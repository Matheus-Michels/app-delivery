import React, { useState } from 'react';
import { Soup } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { mockOrders } from '../data/mockData';

export default function MyOrdersScreen({ onNavigate }) {
    const [tab, setTab] = useState('anteriores');

    return (
        <div>
            <ScreenHeader title="Meus Pedidos" onBack={onNavigate} />
            <div className="p-4">
                <div className="flex border-b mb-4">
                    <button onClick={() => setTab('anteriores')} className={`flex-1 pb-2 font-semibold ${tab === 'anteriores' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500'}`}>
                        Anteriores
                    </button>
                    <button onClick={() => setTab('andamento')} className={`flex-1 pb-2 font-semibold ${tab === 'andamento' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500'}`}>
                        Em andamento
                    </button>
                </div>

                {tab === 'anteriores' && (
                    <div className="space-y-4">
                        {mockOrders.map(order => (
                            <div key={order.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <div className="flex items-center mb-2">
                                    <img src={order.logo} alt={order.restaurant} className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <h3 className="font-bold">{order.restaurant}</h3>
                                        <p className={`text-sm font-semibold ${order.status === 'Entregue' ? 'text-green-600' : 'text-red-600'}`}>{order.status}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">{order.date} • {order.items.join(', ')}</p>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t">
                                    <span className="text-gray-600">Total: {order.total}</span>
                                    <button className="bg-red-600 text-white text-sm px-3 py-1 rounded-md">Pedir de novo</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                 {tab === 'andamento' && (
                    <div className="text-center text-gray-500 pt-16">
                        <Soup size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="font-bold text-lg">Nenhum pedido em andamento</h3>
                        <p className="text-sm">Que tal fazer um pedido agora?</p>
                        <button onClick={() => onNavigate('home')} className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-bold">Ver restaurantes</button>
                    </div>
                 )}
            </div>
        </div>
    );
};
