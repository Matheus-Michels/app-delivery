import React from 'react';
import { User, Search, ChevronRight } from 'lucide-react';
import { categories, restaurants } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';

export default function HomeScreen({ onNavigate, onSelectCategory, onSelectRestaurant }) {
    return (
        <div className="p-4">
            <header className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-sm text-gray-500">Entregar em</h2>
                    <p className="font-bold text-gray-800">Rua Fictícia, 123 <ChevronRight className="inline-block h-4 w-4" /></p>
                </div>
                <User size={24} className="text-gray-600 cursor-pointer" onClick={() => onNavigate('profile')} />
            </header>

            <div className="relative mb-6">
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input onClick={() => onNavigate('search')} className="w-full p-3 pl-10 border rounded-lg bg-gray-100" type="text" placeholder="Buscar por pratos ou restaurantes" readOnly />
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800">Categorias</h3>
            <div className="grid grid-cols-4 gap-4 text-center mb-6">
                {categories.map(cat => (
                    <div key={cat.name} onClick={() => { onSelectCategory(cat.name); onNavigate('restaurantList'); }} className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                        {cat.icon}
                        <span className="text-xs mt-1 block">{cat.name}</span>
                    </div>
                ))}
            </div>

            <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
                <h3 className="font-bold text-lg">20% OFF em Pizzas!</h3>
                <p className="text-sm">Use o cupom PIZZA20</p>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800">Restaurantes Famosos</h3>
            <div className="space-y-3">
                <RestaurantCard restaurant={restaurants['Lanches'][0]} onNavigate={onNavigate} onSelectRestaurant={onSelectRestaurant} />
                <RestaurantCard restaurant={restaurants['Brasileira'][1]} onNavigate={onNavigate} onSelectRestaurant={onSelectRestaurant} />
            </div>
        </div>
    );
}
