import { ChefHat } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-5 max-w-2xl mx-auto text-center rounded-lg shadow-lg mt-6">
      <div className="flex items-center justify-center mb-2">
        <ChefHat className="w-8 h-8 mr-2 text-orange-400" />
        <h1 className="text-3xl font-bold">Chef Claude</h1>
      </div>
      <p className="text-sm text-gray-300">Your AI-powered cooking assistant</p>
    </header>
  );
} 