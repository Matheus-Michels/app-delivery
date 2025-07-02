import React from 'react';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';

export default function CartScreen({ cart, setCart, onNavigate, onFinalizeOrder }) {

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            setCart(cart.filter(item => item.id !== itemId));
        } else {
            setCart(cart.map(item => item.id === itemId ? { ...item, quantity: newQuantity } : item));
        }
    };

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 5.99 : 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="flex flex-col h-full">
            <ScreenHeader title="Meu Carrinho" onBack={onNavigate} />
            {cart.length === 0 ? (
                <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
                    <ShoppingCart size={60} className="text-gray-300 mb-4" />
                    <h2 className="text-xl font-bold text-gray-700">Seu carrinho está vazio</h2>
                    <p className="text-gray-500">Adicione itens para fazer um pedido.</p>
                </div>
            ) : (
                <>
                    <div className="flex-grow p-4 space-y-3 overflow-y-auto">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center bg-white p-2 rounded-lg shadow-sm">
                                <img src={`https://placehold.co/80x80/f0f0f0/333?text=${item.name.substring(0,2)}`} alt={item.name} className="w-16 h-16 rounded-md object-cover mr-4" />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-red-600 font-bold">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="p-1 bg-gray-200 rounded-full">
                                        {item.quantity === 1 ? <Trash2 size={16} className="text-red-600"/> : <Minus size={16} className="text-red-600" />}
                                    </button>
                                    <span className="font-bold w-5 text-center">{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="p-1 bg-gray-200 rounded-full">
                                        <Plus size={16} className="text-red-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <footer className="p-4 border-t bg-white">
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Taxa de entrega</span>
                                <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="flex justify-between font-bold text-xl text-gray-800">
                                <span>Total</span>
                                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>
                        <button onClick={() => onFinalizeOrder(total)} className="w-full bg-red-600 text-white p-4 rounded-lg font-bold">
                            Finalizar Pedido
                        </button>
                    </footer>
                </>
            )}
        </div>
    );
}