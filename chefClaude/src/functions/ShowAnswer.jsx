import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowAnswer({ ingredients }) {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (ingredients.length === 0) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const prompt = `Suggest a recipe using these ingredients: ${ingredients.join(", ")}`;

                const result = await axios.post(
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDqIRqRFPpKqDLhAUxdQDWqpao7NNqXgqA",
                    {
                        contents: [
                            {
                                parts: [{ text: prompt }]
                            }
                        ]
                    },
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );

                const rawReply = result.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
                const cleanReply = rawReply.replace(/\*/g, ""); 
                setResponse(cleanReply);
            } catch (error) {
                console.error(error);
                setResponse("Failed to fetch recipe suggestion.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [ingredients]);

    if (ingredients.length === 0) return null;

    return (
        <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Gemini AI Suggestion</h2>
            {loading ? (
                <p className="text-gray-500">Generating recipe...</p>
            ) : (
                <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
            )}
        </div>
    );
}
