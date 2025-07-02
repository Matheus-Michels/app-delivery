import React from 'react';
import { Tag } from 'lucide-react';
import { restaurantDetails, restaurants as allRestaurantsData } from '../data/mockData';
import ScreenHeader from '../components/ScreenHeader';

export default function FoodListScreen({ onNavigate, onSelectRestaurant, onSelectMenuItem, appliedFilters }) {

    const allItems = React.useMemo(() => {
        const itemsWithCategory = [];
        for (const category in allRestaurantsData) {
            allRestaurantsData[category].forEach(restaurantStub => {
                const details = restaurantDetails[restaurantStub.id];
                if (details && details.menu) {
                    Object.values(details.menu).flat().forEach(item => {
                        itemsWithCategory.push({
                            ...item,
                            restaurantId: details.id,
                            restaurantName: details.name,
                            restaurantLogo: details.logo,
                            category: category
                        });
                    });
                }
            });
        }
        return itemsWithCategory;
    }, []);

    const checkPriceRange = (price, range) => {
        if (!range || range.length !== 2) return true;
        const [minPrice, maxPrice] = range;
        return price >= minPrice && price <= maxPrice;
    };

    const filteredItems = React.useMemo(() => {
        const { categories: selectedCategories, price: selectedPriceRange } = appliedFilters;

        return allItems.filter(item => {
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(item.category);
            const priceMatch = checkPriceRange(item.price, selectedPriceRange);
            return categoryMatch && priceMatch;
        });
    }, [allItems, appliedFilters]);

    const handleItemClick = (item) => {
        onSelectMenuItem(item);
        onNavigate('menuItemDetail');
    };

    const handleRestaurantClick = (e, restaurantId) => {
        e.stopPropagation();
        onSelectRestaurant(restaurantDetails[restaurantId]);
        onNavigate('restaurantDetail');
    };

    return (
        <div>
            <ScreenHeader title="Itens por Preço e Categoria" onBack={onNavigate} />
            <div className="p-4 space-y-3">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <div
                            key={`${item.restaurantId}-${item.id}`}
                            onClick={() => handleItemClick(item)}
                            className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1 pr-4">
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                    <p className="text-md font-bold text-green-600 mt-1">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                                </div>
                                <img src={`https://placehold.co/80x80/f0f0f0/333?text=${item.name.substring(0, 2)}`} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                            </div>
                            <div
                                onClick={(e) => handleRestaurantClick(e, item.restaurantId)}
                                className="flex items-center mt-3 pt-3 border-t border-gray-100 text-sm text-gray-600 hover:text-red-600"
                            >
                                <img src={item.restaurantLogo} alt={item.restaurantName} className="w-6 h-6 rounded-full mr-2" />
                                <span className="font-semibold">{item.restaurantName}</span>
                            </div>
                        </div>
                    ))
                ) : (
                     <div className="text-center text-gray-500 mt-16">
                        <Tag size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="font-bold text-lg">Nenhum item encontrado</h3>
                        <p className="text-sm">Tente ajustar seus filtros.</p>
                    </div>
                )}
            </div>
        </div>
    );
};