import React from 'react';
import { X } from 'lucide-react';

export default function GoogleLoginPopup({ onClose, onLoginSuccess }) {
    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-2xl w-11/12 max-w-sm overflow-hidden">
                <header className="p-4 border-b flex justify-between items-center">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png" alt="Google" className="h-6" />
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
                        <X size={20} className="text-gray-600" />
                    </button>
                </header>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Escolha uma conta</h2>
                    <p className="text-center text-sm text-gray-500 mb-6">para continuar em FastFood</p>
                    <div
                        onClick={onLoginSuccess}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer border"
                    >
                        <img src="https://placehold.co/40x40/e8e8e8/333?text=EU" alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <p className="font-semibold text-gray-800">Usuário Teste</p>
                            <p className="text-sm text-gray-600">usuario.teste@email.com</p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Usar outra conta
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}