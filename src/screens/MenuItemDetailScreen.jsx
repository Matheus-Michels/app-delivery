import React from 'react';
import { XCircle } from 'lucide-react';

export default function MenuItemDetailScreen({ item, onNavigate, onAddToCart }) {
    if (!item) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-gray-500">Carregando item...</p>
            </div>
        );
    }

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
                <p className="text-2xl font-bold text-gray-800">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                <button onClick={() => onAddToCart(item)} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold">
                    Adicionar
                </button>
            </footer>
        </div>
    );
}
