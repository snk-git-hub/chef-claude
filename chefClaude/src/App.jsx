import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Inputfield';
import { ShowIngredients } from './functions/ShowIncredient';
import ShowAnswer from './functions/ShowAnswer';
function App() {
    const [ingredients, setIngredients] = useState([]);
    const [value, setValue] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        if (value.trim()) {
            setIngredients([...ingredients, value]);
            setValue("");
        }
    };
    const handleGenerate=()=>{
       setShowAnswer(true)
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <div className="border-2 border-black-500 rounded-lg p-4">
                <Header />
                <div className="flex gap-2">
                    <Input placeholder="Type your ingredient or recipe..." value={value} onChange={handleChange} />
                    <div className="pt-8">
                        <Button label="ADD INGREDIENT +" onClick={handleAdd} />
                    </div>
                </div>
                <ShowIngredients ingredients={ingredients} onGenerate={handleGenerate} />
                {showAnswer && <ShowAnswer ingredients={ingredients} />}

            </div>
        </div>
    );
}

export default App;
