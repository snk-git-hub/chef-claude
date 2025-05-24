import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Inputfield';

function App() {
  return (

    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
          <div className="border-2 border-black-500 rounded-lg p-4"> 

      <Header />
        <div className="flex gap-2">
          <Input placeholder="Type your ingredient or recipe..." />
          <div className="pt-8 ">
            <Button label="ADD INCREDIEN +" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;