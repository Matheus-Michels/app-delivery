import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { restaurants, restaurantDetails } from '../data/mockData';

export default function SearchScreen({ onNavigate, onSelectRestaurant }) {
    const allRestaurants = Object.values(restaurants).flat();

    return (
        <div className="p-4">
            <header className="flex items-center mb-4">
                <ArrowLeft className="cursor-pointer mr-4" onClick={() => onNavigate(-1)} />
                <div className="relative flex-grow">
                   <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input autoFocus className="w-full p-3 pl-10 border rounded-lg bg-gray-100" type="text" placeholder="Buscar no FastFood" />
                </div>
            </header>
            <div>
                <h3 className="font-bold text-gray-600 mb-4">Sugestões</h3>
                <div className="space-y-3">
                    {allRestaurants.map(r => (
                         <div key={r.id} onClick={() => { onSelectRestaurant(restaurantDetails[1]); onNavigate('restaurantDetail'); }} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <img src={r.logo} alt={r.name} className="w-12 h-12 rounded-md object-cover" />
                            <div>
                                <h4 className="font-bold text-gray-800">{r.name}</h4>
                                <p className="text-sm text-gray-500">Restaurante</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
