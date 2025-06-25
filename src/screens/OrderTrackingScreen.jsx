import React from 'react';
import { MapPin, CheckCircle, Soup, Bike } from 'lucide-react';

export default function OrderTrackingScreen({ onNavigate }) {
    return (
        <div className="flex flex-col h-full">
            <header className="p-4 text-center relative border-b bg-white">
                <h1 className="text-xl font-bold">Acompanhe seu Pedido</h1>
            </header>
            <div className="flex-grow p-4 text-center">
                <p className="text-gray-500">Previsão de entrega</p>
                <p className="text-4xl font-bold text-red-600">20:35 - 20:50</p>
                <div className="my-8">
                    <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <MapPin size={48} className="text-gray-400" />
                    </div>
                </div>

                <ul className="space-y-6 text-left">
                    <li className="flex items-center">
                        <CheckCircle size={24} className="text-green-500 mr-4" />
                        <div>
                            <p className="font-bold">Pedido confirmado</p>
                            <p className="text-sm text-gray-500">O restaurante já está preparando seu pedido.</p>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <Soup size={24} className="text-red-500 mr-4 animate-pulse" />
                        <div>
                            <p className="font-bold">Em preparo</p>
                            <p className="text-sm text-gray-500">Sua comida está sendo feita com carinho.</p>
                        </div>
                    </li>
                    <li className="flex items-center opacity-50">
                        <Bike size={24} className="text-gray-500 mr-4" />
                        <div>
                            <p className="font-bold">Saiu para entrega</p>
                            <p className="text-sm text-gray-500">Nosso entregador está a caminho.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <footer className="p-4 border-t bg-white">
                <button onClick={() => { onNavigate('home'); }} className="w-full bg-gray-200 text-gray-800 p-4 rounded-lg font-bold">
                    Voltar para o início
                </button>
            </footer>
        </div>
    );
}
