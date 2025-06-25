import React from 'react';
import { Search } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { mockCoupons } from '../data/mockData';

export default function CouponsScreen({ onNavigate }) {
    return (
        <div>
            <ScreenHeader title="Cupons" onBack={onNavigate} />
            <div className="p-4">
                <div className="flex gap-2 mb-6">
                    <input type="text" placeholder="Código do cupom" className="flex-grow p-3 border rounded-lg bg-gray-100" />
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold">Aplicar</button>
                </div>
                <h3 className="font-bold text-lg mb-4">Meus Cupons</h3>
                <div className="space-y-3">
                    {mockCoupons.map(coupon => (
                        <div key={coupon.id} className={`p-4 rounded-lg border-l-4 ${coupon.valid ? 'border-green-500 bg-green-50' : 'border-gray-400 bg-gray-100'}`}>
                            <p className={`font-bold ${coupon.valid ? 'text-green-800' : 'text-gray-500'}`}>{coupon.code}</p>
                            <p className={`text-sm ${coupon.valid ? 'text-green-700' : 'text-gray-500'}`}>{coupon.description}</p>
                            {!coupon.valid && <p className="text-xs text-red-500 font-semibold mt-1">Expirado</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
