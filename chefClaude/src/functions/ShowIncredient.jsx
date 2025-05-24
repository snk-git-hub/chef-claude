import Incredien from "../components/Incredien";
import RecipePrompt from "../components/ClaudeSubmitButton";
export const ShowIngredients = ({ ingredients,onGenerate }) => {


    if (!ingredients || ingredients.length === 0) {
        return null; 
    }
    else{

    return (
        <div>
            <h1 className="text-xl font-bold mb-2 text-gray-800">Ingredients on hand:</h1>

            <ul>
                {ingredients.map((item, index) => (
                    <Incredien key={index} IncredienName={item} />
                ))}
            </ul>
            <RecipePrompt onGenerate={onGenerate} />

        </div>
    );
};
}
