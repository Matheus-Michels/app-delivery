import React from 'react';
import { X } from 'lucide-react';

export default function FacebookLoginPopup({ onClose, onLoginSuccess }) {
    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-2xl w-11/12 max-w-sm overflow-hidden text-center">
                <header className="p-3 bg-blue-600 text-white font-bold text-lg">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" className="h-7 mx-auto" />
                </header>
                <div className="p-6">
                    <img src="https://placehold.co/80x80/e8e8e8/333?text=EU" alt="Avatar" className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-200" />
                    <p className="text-gray-700 mb-4">
                        Você entrará no FastFood como <span className="font-bold">Usuário Teste</span>.
                    </p>
                    <button
                        onClick={onLoginSuccess}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors mb-2"
                    >
                        Continuar como Usuário Teste
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-200 text-gray-800 p-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}