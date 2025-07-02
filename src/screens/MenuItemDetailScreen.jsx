import React, { useState } from 'react';
import { XCircle, Plus, Minus } from 'lucide-react';

export default function MenuItemDetailScreen({ item, onNavigate, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    if (!item) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-gray-500">Carregando item...</p>
            </div>
        );
    }

    const handleAddToCart = () => {
        onAddToCart(item, quantity);
    };

    const increment = () => {
        setQuantity(prev => prev + 1);
    };

    const decrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const totalPrice = (item.price * quantity).toFixed(2).replace('.', ',');

    return (
        <div className="flex flex-col h-full">
            <header className="p-4 flex items-center shadow-md bg-white sticky top-0 z-10">
                <XCircle className="cursor-pointer" onClick={() => onNavigate(-1)} />
                <h1 className="text-xl font-bold mx-auto">{item.name}</h1>
                <div className="w-6"></div>
            </header>
            <div className="flex-grow p-4">
                <img src={`https://placehold.co/600x300/f0f0f0/333?text=${item.name.replace(/\s/g, '+')}`} alt={item.name} className="w-full h-48 rounded-lg object-cover mb-4"/>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Alguma observação?</h3>
                    <textarea className="w-full p-2 border rounded-md" rows="3" placeholder="Ex: tirar a cebola, maionese à parte, etc."></textarea>
                </div>
            </div>
            <footer className="p-4 border-t flex items-center justify-between bg-white sticky bottom-0">
                <div className="flex items-center gap-3">
                    <button onClick={decrement} className="p-2 bg-gray-200 rounded-full">
                        <Minus size={20} className="text-red-600"/>
                    </button>
                    <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                    <button onClick={increment} className="p-2 bg-gray-200 rounded-full">
                        <Plus size={20} className="text-red-600"/>
                    </button>
                </div>
                <button onClick={handleAddToCart} className="bg-red-600 text-white px-5 py-3 rounded-lg font-bold">
                    Adicionar (R$ {totalPrice})
                </button>
            </footer>
        </div>
    );
}