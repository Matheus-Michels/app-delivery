import React from 'react';
import { Star } from 'lucide-react';
import { restaurantDetails } from '../data/mockData';

export default function RestaurantCard({ restaurant, onNavigate, onSelectRestaurant }) {
  const handleCardClick = () => {
    const details = restaurantDetails[restaurant.id];
    onSelectRestaurant(details);
    onNavigate('restaurantDetail');
  }

  return (
    <div onClick={handleCardClick} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      <img src={restaurant.logo} alt={restaurant.name} className="w-16 h-16 rounded-md object-cover" />
      <div className="flex-grow">
        <h4 className="font-bold text-gray-800">{restaurant.name}</h4>
        <div className="flex items-center text-xs text-gray-500 space-x-2">
          <span className="flex items-center"><Star size={12} className="text-yellow-500 fill-current mr-1" /> {restaurant.rating}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{restaurant.deliveryFee === 'Grátis' ? <span className="text-green-600 font-semibold">Entrega Grátis</span> : restaurant.deliveryFee}</p>
      </div>
    </div>
  );
}
