import React, { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { CreditCard, Landmark, KeySquare, Save } from 'lucide-react';

export default function AddPaymentMethodScreen({ onNavigate, onAddPaymentMethod }) {
    const [paymentType, setPaymentType] = useState('credit');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSave = () => {
        let newPaymentMethod = { type: '', details: '', icon: null };

        if (paymentType === 'credit' || paymentType === 'debit') {
            if (!cardNumber || !cardName || !expiryDate || !cvv) {
                alert('Por favor, preencha todos os dados do cartão.');
                return;
            }
            newPaymentMethod = {
                type: paymentType === 'credit' ? 'Cartão de Crédito' : 'Cartão de Débito',
                details: `**** **** **** ${cardNumber.slice(-4)}`,
                icon: <CreditCard />,
            };
        } else if (paymentType === 'pix') {
            newPaymentMethod = {
                type: 'Pix',
                details: 'Chave aleatória cadastrada',
                icon: <KeySquare />,
            };
        }
        onAddPaymentMethod(newPaymentMethod);
    };

    return (
        <div className="flex flex-col h-full">
            <ScreenHeader title="Adicionar Pagamento" onBack={onNavigate} />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Selecione o tipo</h3>
                <div className="flex bg-gray-200 rounded-lg p-1 mb-6">
                    <button
                        onClick={() => setPaymentType('credit')}
                        className={`flex-1 p-2 rounded-md text-sm font-bold transition-colors ${paymentType === 'credit' ? 'bg-white text-red-600 shadow' : 'bg-transparent text-gray-600'}`}
                    >
                        Crédito
                    </button>
                    <button
                        onClick={() => setPaymentType('debit')}
                        className={`flex-1 p-2 rounded-md text-sm font-bold transition-colors ${paymentType === 'debit' ? 'bg-white text-red-600 shadow' : 'bg-transparent text-gray-600'}`}
                    >
                        Débito
                    </button>
                    <button
                        onClick={() => setPaymentType('pix')}
                        className={`flex-1 p-2 rounded-md text-sm font-bold transition-colors ${paymentType === 'pix' ? 'bg-white text-red-600 shadow' : 'bg-transparent text-gray-600'}`}
                    >
                        Pix
                    </button>
                </div>

                {(paymentType === 'credit' || paymentType === 'debit') && (
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-1 block">Número do Cartão</label>
                            <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="w-full p-3 border rounded-lg bg-gray-100"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-600 mb-1 block">Nome no Cartão</label>
                            <input
                                type="text"
                                placeholder="Seu nome completo"
                                className="w-full p-3 border rounded-lg bg-gray-100"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="text-sm font-bold text-gray-600 mb-1 block">Validade</label>
                                <input
                                    type="text"
                                    placeholder="MM/AA"
                                    className="w-full p-3 border rounded-lg bg-gray-100"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm font-bold text-gray-600 mb-1 block">CVV</label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    className="w-full p-3 border rounded-lg bg-gray-100"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {paymentType === 'pix' && (
                    <div className="text-center p-8 bg-gray-100 rounded-lg">
                        <Landmark size={40} className="mx-auto text-gray-500 mb-4" />
                        <h3 className="font-bold text-lg">Pagamento com Pix</h3>
                        <p className="text-gray-600 text-sm">Ao salvar, uma chave será associada à sua conta para pagamentos futuros.</p>
                    </div>
                )}
            </div>
            <footer className="p-4 border-t bg-white mt-auto">
                <button onClick={handleSave} className="w-full bg-red-600 text-white p-4 rounded-lg font-bold flex items-center justify-center gap-2">
                    <Save size={20} />
                    Salvar Método
                </button>
            </footer>
        </div>
    );
}