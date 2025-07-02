import React from 'react';
import { ChefHat, Bike, Home, ShoppingBag } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';

export default function OrderTrackingScreen({ onNavigate, activeOrders }) {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            <ScreenHeader title="Acompanhar Pedido" onBack={onNavigate} />
            {activeOrders && activeOrders.length > 0 ? (
                <div className="flex-grow flex flex-col">
                    <div className="p-4 text-center">
                        <p className="text-sm text-gray-500">PREVISÃO DE ENTREGA</p>
                        <p className="text-3xl font-bold text-gray-800">20:35 - 20:50</p>
                    </div>

                    <div className="px-4 flex-grow flex items-center justify-center">
                        <div className="h-40 w-full rounded-2xl bg-gray-100 p-4 relative flex items-center">
                            <div className="absolute top-1/2 left-10 right-10 border-t-2 border-dashed border-gray-300"></div>

                            <div className="absolute top-1/2 left-8 -translate-y-1/2">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <ChefHat size={20} className="text-gray-600" />
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2">
                                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Bike size={28} className="text-white" />
                                </div>
                            </div>

                            <div className="absolute top-1/2 right-8 -translate-y-1/2">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <Home size={20} className="text-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 mt-4 bg-white rounded-t-2xl shadow-inner">
                        <div className="relative pl-5">
                            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-200"></div>
                            <div className="flex items-center mb-6 relative">
                                <div className="absolute z-10 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white">
                                    <ChefHat size={14} />
                                </div>
                                <div className="ml-8">
                                    <h3 className="font-bold text-red-600">Preparando seu pedido</h3>
                                    <p className="text-sm text-gray-500">O restaurante já está no preparo!</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-6 relative">
                                <div className="absolute z-10 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                                    <Bike size={14} />
                                </div>
                                <div className="ml-8">
                                    <h3 className="font-bold text-gray-400">Pedido a caminho</h3>
                                    <p className="text-sm text-gray-400">Nosso entregador parceiro está levando até você.</p>
                                </div>
                            </div>
                            <div className="flex items-center relative">
                                <div className="absolute z-10 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                                    <Home size={14} />
                                </div>
                                <div className="ml-8">
                                    <h3 className="font-bold text-gray-400">Pedido entregue</h3>
                                    <p className="text-sm text-gray-400">Aproveite sua refeição!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
                    <ShoppingBag size={60} className="text-gray-300 mb-4" />
                    <h2 className="text-xl font-bold text-gray-700">Nenhum pedido em andamento</h2>
                    <p className="text-gray-500">Faça um pedido para acompanhá-lo aqui.</p>
                </div>
            )}
        </div>
    );
};