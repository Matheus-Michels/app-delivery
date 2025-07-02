import React, { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { categories } from '../data/mockData';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function FilterScreen({ onNavigate, onApplyFilters, initialFilters }) {
    const [selectedCategories, setSelectedCategories] = useState(initialFilters.categories);
    const [priceRange, setPriceRange] = useState(initialFilters.price || [0, 100]);
    const [filterType, setFilterType] = useState(initialFilters.filterType || 'restaurants');

    const toggleCategory = (categoryName) => {
        setSelectedCategories(prev =>
            prev.includes(categoryName)
                ? prev.filter(c => c !== categoryName)
                : [...prev, categoryName]
        );
    };

    const handleApply = () => {
        onApplyFilters({
            categories: selectedCategories,
            price: priceRange,
            filterType: filterType
        });
    };

    return (
        <div className="flex flex-col h-full">
            <ScreenHeader title="Filtros" onBack={onNavigate} />
            <div className="flex-grow p-4">

                <h3 className="font-bold text-lg mb-3 text-gray-800">Filtrar por</h3>
                <div className="flex bg-gray-200 rounded-lg p-1 mb-6">
                    <button
                        onClick={() => setFilterType('restaurants')}
                        className={`flex-1 p-2 rounded-md text-sm font-bold transition-colors ${filterType === 'restaurants' ? 'bg-white text-red-600 shadow' : 'bg-transparent text-gray-600'}`}
                    >
                        Restaurantes
                    </button>
                    <button
                        onClick={() => setFilterType('items')}
                        className={`flex-1 p-2 rounded-md text-sm font-bold transition-colors ${filterType === 'items' ? 'bg-white text-red-600 shadow' : 'bg-transparent text-gray-600'}`}
                    >
                        Itens
                    </button>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Categorias</h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.name}
                                onClick={() => toggleCategory(cat.name)}
                                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                                    selectedCategories.includes(cat.name)
                                        ? 'bg-red-600 text-white border-red-600'
                                        : 'bg-white text-gray-700 border-gray-300'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <h3 className="font-bold text-lg mt-6 mb-3 text-gray-800">Preço</h3>
                <div className="px-2">
                    <Slider
                        range
                        min={0}
                        max={100}
                        value={priceRange}
                        onChange={setPriceRange}
                        trackStyle={[{ backgroundColor: '#ef4444' }]}
                        handleStyle={[
                            { borderColor: '#ef4444', borderWidth: 2, backgroundColor: 'white', boxShadow: 'none' },
                            { borderColor: '#ef4444', borderWidth: 2, backgroundColor: 'white', boxShadow: 'none' }
                        ]}
                        railStyle={{ backgroundColor: '#e5e7eb' }}
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>R$ {priceRange[0]}</span>
                        <span>R$ {priceRange[1]}</span>
                    </div>
                </div>
            </div>
            <footer className="p-4 border-t bg-white">
                <button onClick={handleApply} className="w-full bg-red-600 text-white p-4 rounded-lg font-bold">
                    Aplicar Filtros
                </button>
            </footer>
        </div>
    );
}