import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';

export default function CartScreen({ cart, setCart, onNavigate }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = 5.99;

    return (
        <div className="flex flex-col h-full">
            <ScreenHeader title="Meu Carrinho" onBack={onNavigate} />

            <div className="flex-grow p-4">
                {cart.length === 0 ? (
                    <div className="text-center my-auto pt-16">
                        <ShoppingCart size={60} className="mx-auto text-gray-300" />
                        <p className="text-gray-500 mt-4 font-semibold">Seu carrinho está vazio.</p>
                        <p className="text-gray-400 text-sm">Adicione itens para continuar.</p>
                    </div>
                ) : (
                    <div>
                        <div className="space-y-4">
                            {cart.map((item, index) => (
                                <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                                    <span className="bg-gray-100 text-red-600 font-bold px-2 py-1 rounded-md mr-4">{item.quantity}x</span>
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-green-600 font-bold">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                                    </div>
                                    <Trash2 size={20} className="text-gray-400 cursor-pointer hover:text-red-500" onClick={() => setCart(cart.filter((_, i) => i !== index))} />
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-4 border-t">
                            <div className="flex justify-between text-gray-600">
                                <p>Subtotal</p>
                                <p>R$ {total.toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <p>Taxa de entrega</p>
                                <p>R$ {deliveryFee.toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div className="flex justify-between font-bold text-xl mt-2 text-gray-800">
                                <p>Total</p>
                                <p>R$ {(total + deliveryFee).toFixed(2).replace('.', ',')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {cart.length > 0 && (
                <div className="p-4 border-t bg-white">
                    <button onClick={() => onNavigate('orderTracking')} className="w-full bg-red-600 text-white p-4 rounded-lg font-bold">
                        Finalizar Pedido
                    </button>
                </div>
            )}
        </div>
    );
}
