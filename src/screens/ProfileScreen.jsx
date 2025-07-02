import React from 'react';
import { ShoppingCart, Map, CreditCard, Tag, HelpCircle } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import ProfileMenuItem from '../components/ProfileMenuItem';

export default function ProfileScreen({ onNavigate }) {
    return (
        <div>
            <ScreenHeader title="Meu Perfil" onBack={onNavigate} />
            <div className="p-4">
                <div className="text-center my-6">
                    <img src="https://placehold.co/100x100/e8e8e8/333?text=EU" className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-gray-200" alt="Foto do perfil" />
                    <h2 className="text-xl font-bold">Usuário Teste</h2>
                    <p className="text-gray-500">usuario.teste@email.com</p>
                </div>

                <div className="space-y-2">
                    <ProfileMenuItem icon={<ShoppingCart size={20} />} text="Meus Pedidos" onClick={() => onNavigate('myOrders')} />
                    <ProfileMenuItem icon={<Map size={20} />} text="Endereços" onClick={() => onNavigate('savedAddresses')} />
                    <ProfileMenuItem icon={<CreditCard size={20} />} text="Formas de Pagamento" onClick={() => onNavigate('paymentMethods')} />
                    <ProfileMenuItem icon={<Tag size={20} />} text="Cupons" onClick={() => onNavigate('coupons')} />
                    <ProfileMenuItem icon={<HelpCircle size={20} />} text="Ajuda" onClick={() => onNavigate('help')} />
                </div>

                <div className="mt-8">
                    <button onClick={() => onNavigate('login')} className="w-full text-left text-red-600 p-3 rounded-lg hover:bg-red-50 font-semibold">
                        Sair
                    </button>
                </div>
            </div>
        </div>
    );
}
