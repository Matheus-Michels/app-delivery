import React from 'react';
import { CreditCard, Trash2, PlusCircle } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { mockPayments } from '../data/mockData';

export default function PaymentMethodsScreen({ onNavigate }) {
    return (
        <div>
            <ScreenHeader title="Formas de Pagamento" onBack={onNavigate} />
            <div className="p-4 space-y-4">
                {mockPayments.map(pay => (
                    <div key={pay.id} className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center">
                        <CreditCard size={24} className="text-gray-600 mr-4" />
                        <div className="flex-grow">
                            <h3 className="font-bold">{pay.brand}</h3>
                            <p className="text-gray-600">**** **** **** {pay.last4}</p>
                        </div>
                        <button><Trash2 size={20} className="text-gray-400 hover:text-red-500" /></button>
                    </div>
                ))}
                <button className="w-full flex items-center justify-center p-4 mt-4 bg-red-100 text-red-600 rounded-lg font-bold hover:bg-red-200">
                    <PlusCircle size={20} className="mr-2" />
                    Adicionar novo cartão
                </button>
            </div>
        </div>
    );
};
