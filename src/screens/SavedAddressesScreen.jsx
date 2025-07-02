import React from 'react';
import { Trash2, PlusCircle } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';

export default function SavedAddressesScreen({ onNavigate, addresses, onDeleteAddress }) {
    return (
        <div>
            <ScreenHeader title="Endereços Salvos" onBack={onNavigate} />
            <div className="p-4 space-y-4">
                {addresses.map(addr => (
                    <div key={addr.id} className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start">
                        <div className="bg-gray-200 p-3 rounded-full mr-4 text-gray-600">{addr.icon}</div>
                        <div className="flex-grow">
                            <h3 className="font-bold text-lg">{addr.type}</h3>
                            <p className="text-gray-600">{addr.street}</p>
                            <p className="text-gray-500 text-sm">{addr.city}</p>
                        </div>
                        <button onClick={() => onDeleteAddress(addr.id)}>
                            <Trash2 size={20} className="text-gray-400 hover:text-red-500" />
                        </button>
                    </div>
                ))}
                <button
                    onClick={() => onNavigate('addAddress')}
                    className="w-full flex items-center justify-center p-4 mt-4 bg-red-100 text-red-600 rounded-lg font-bold hover:bg-red-200"
                >
                    <PlusCircle size={20} className="mr-2" />
                    Adicionar novo endereço
                </button>
            </div>
        </div>
    );
};