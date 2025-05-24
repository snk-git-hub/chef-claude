import Button from "./Button";

export default function RecipePrompt({ onGenerate }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 shadow-sm border border-gray-200">
            <div>
                <h2 className="text-base font-semibold text-gray-900">Ready for a recipe?</h2>
                <p className="text-sm text-gray-600">Generate a recipe from your list of ingredients.</p>
            </div>
            <Button label="Get a recipe" onClick={onGenerate} />
        </div>
    );
}
