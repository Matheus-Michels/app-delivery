import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { mockOrders } from '../data/mockData';

export default function MyOrdersScreen({ onNavigate, activeOrders }) {
    const allOrders = [...activeOrders, ...mockOrders];

    return (
        <div>
            <ScreenHeader title="Meus Pedidos" onBack={onNavigate} />
            <div className="p-4 space-y-4">
                {allOrders.map(order => (
                    <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center">
                                <img src={order.logo} alt={order.restaurant} className="w-10 h-10 rounded-full mr-3" />
                                <div>
                                    <h3 className="font-bold text-gray-800">{order.restaurant}</h3>
                                    <p className="text-xs text-gray-500">Pedido #{order.id.slice(-4)} &bull; {order.date}</p>
                                </div>
                            </div>
                            <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                                order.status === 'Entregue' ? 'bg-green-100 text-green-700' :
                                order.status === 'Cancelado' ? 'bg-red-100 text-red-700' :
                                'bg-yellow-100 text-yellow-700'
                            }`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="border-t border-gray-100 pt-2">
                            <p className="text-sm text-gray-600">{order.items.join(', ')}</p>
                            <p className="text-right font-bold text-gray-800 mt-2">Total: R$ {order.total}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};