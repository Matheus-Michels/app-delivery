import React from 'react';
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react'; 
import { restaurants, restaurantDetails } from '../data/mockData';

export default function SearchScreen({ onNavigate, onSelectRestaurant, appliedFilters }) {

    const allRestaurants = React.useMemo(() => {
        return Object.entries(restaurants).flatMap(([category, restaurantList]) =>
            restaurantList.map(restaurant => ({ ...restaurant, category }))
        );
    }, []);

    const checkPriceRange = (price, range) => {
        if (!range || range.length !== 2) return true;
        const [minPrice, maxPrice] = range;
        return price >= minPrice && price <= maxPrice;
    };

    const filteredRestaurants = React.useMemo(() => {
        const { categories: selectedCategories, price: selectedPriceRange } = appliedFilters;

        if (selectedCategories.length === 0 && (!selectedPriceRange || (selectedPriceRange[0] === 0 && selectedPriceRange[1] === 100))) {
            return allRestaurants;
        }

        return allRestaurants.filter(restaurant => {
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(restaurant.category);

            const priceMatch = !selectedPriceRange || Object.values(restaurantDetails?.[restaurant.id]?.menu || {})
                .flat()
                .some(item => checkPriceRange(item.price, selectedPriceRange));

            return categoryMatch && priceMatch;
        });
    }, [allRestaurants, appliedFilters]);

    const filtersActive = appliedFilters.categories.length > 0 || (appliedFilters.price && (appliedFilters.price[0] > 0 || appliedFilters.price[1] < 100));


    return (
        <div className="p-4">
            {/* CABEÇALHO ATUALIZADO COM O BOTÃO DE FILTRO DE VOLTA */}
            <header className="flex items-center mb-4 gap-3">
                <ArrowLeft className="cursor-pointer" onClick={() => onNavigate(-1)} />
                <div className="relative flex-grow">
                   <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input autoFocus className="w-full p-3 pl-10 border rounded-lg bg-gray-100" type="text" placeholder="Buscar no FastFood" />
                </div>
                <button onClick={() => onNavigate('filter')} className="relative p-3 border rounded-lg bg-gray-100 hover:bg-gray-200">
                    {filtersActive && <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-600" />}
                    <SlidersHorizontal size={20} className="text-gray-600" />
                </button>
            </header>
            <div>
                 {filteredRestaurants.length > 0 ? (
                    <>
                        <h3 className="font-bold text-gray-600 mb-4">
                            {filtersActive ? `Resultados (${filteredRestaurants.length})` : 'Sugestões'}
                        </h3>
                        <div className="space-y-3">
                            {filteredRestaurants.map(r => (
                                 <div key={r.id} onClick={() => { onSelectRestaurant(restaurantDetails?.[r.id]); onNavigate('restaurantDetail'); }} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <img src={r.logo} alt={r.name} className="w-12 h-12 rounded-md object-cover" />
                                    <div>
                                        <h4 className="font-bold text-gray-800">{r.name}</h4>
                                        <p className="text-sm text-gray-500">{r.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                 ) : (
                    <div className="text-center text-gray-500 mt-16">
                        <h3 className="font-bold text-lg">Nenhum resultado encontrado</h3>
                        <p className="text-sm">Tente ajustar seus filtros.</p>
                    </div>
                 )}
            </div>
        </div>
    );
};