import React from 'react';
import { restaurants } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';
import ScreenHeader from '../components/ScreenHeader';

export default function RestaurantListScreen({ category, onNavigate, onSelectRestaurant }) {
    const list = restaurants[category] || [];

    return (
        <div>
            <ScreenHeader title={category} onBack={onNavigate} />
            <div className="p-4 space-y-4">
                {list.length > 0 ? (
                    list.map(r => (
                        <RestaurantCard key={r.id} restaurant={r} onNavigate={onNavigate} onSelectRestaurant={onSelectRestaurant} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-8">Nenhum restaurante encontrado nesta categoria.</p>
                )}
            </div>
        </div>
    );
}
