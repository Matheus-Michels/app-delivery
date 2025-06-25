import React from 'react';
import { ArrowLeft, Star, Clock, DollarSign } from 'lucide-react';
import { restaurantDetails } from '../data/mockData';

export default function RestaurantDetailScreen({ restaurant, onNavigate, onSelectMenuItem, cartCount }) {
    const details = restaurant || restaurantDetails[1];

    if (!details) {
        return <p>Restaurante não encontrado.</p>;
    }

    return (
        <div>
            <div className="relative">
                <img src={details.banner} alt={details.name} className="w-full h-40 object-cover" />
                <ArrowLeft className="absolute top-4 left-4 text-white bg-black bg-opacity-50 rounded-full p-1 cursor-pointer" size={32} onClick={() => onNavigate(-1)} />
            </div>
            <div className="p-4">
                <div className="flex items-start justify-between">
                    <img src={details.logo} alt={details.name} className="w-16 h-16 rounded-lg -mt-10 border-4 border-white" />
                    <div className="text-right">
                        <div className="flex items-center justify-end">
                            <Star size={16} className="text-yellow-500 fill-current" />
                            <span className="font-bold ml-1 text-gray-800">{details.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">2mil+ avaliações</p>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-2 text-gray-800">{details.name}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                    <span><Clock size={14} className="inline mr-1" />{details.deliveryTime}</span>
                    <span><DollarSign size={14} className="inline mr-1" />{details.deliveryFee}</span>
                </div>
            </div>

            <div className="px-4 mt-4">
                {Object.entries(details.menu).map(([category, items]) => (
                    <div key={category} className="mb-6">
                        <h2 className="text-xl font-bold mb-3 border-b pb-2 text-gray-800">{category}</h2>
                        <div className="space-y-4">
                            {items.map(item => (
                                <div key={item.id} className="flex items-start justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-md" onClick={() => { onSelectMenuItem(item); onNavigate('menuItemDetail') }}>
                                    <div className="flex-1 pr-4">
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                        <p className="text-md font-bold text-green-600 mt-1">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                                    </div>
                                    <img src={`https://placehold.co/80x80/f0f0f0/333?text=${item.name.substring(0, 2)}`} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {cartCount > 0 && (
                <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[374px] p-2 z-20">
                    <button onClick={() => onNavigate('cart')} className="w-full bg-red-600 text-white p-4 rounded-lg font-bold flex justify-between items-center shadow-lg">
                        <span>Ver carrinho</span>
                        <span>{cartCount} {cartCount > 1 ? 'itens' : 'item'}</span>
                    </button>
                </div>
            )}
        </div>
    );
}
