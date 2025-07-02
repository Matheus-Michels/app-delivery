import React from 'react';
import { UserPlus } from 'lucide-react';

export default function RegisterScreen({ onNavigate }) {
    return (
        <div className="p-8 flex flex-col justify-center h-full">
            <div className="text-center mb-12">
                <UserPlus size={60} className="mx-auto text-red-600" />
                <h1 className="text-3xl font-bold mt-4 text-gray-800">Crie sua Conta</h1>
            </div>
            <div className="space-y-4">
                <input className="w-full p-4 border rounded-lg bg-gray-100" type="text" placeholder="Nome Completo" />
                <input className="w-full p-4 border rounded-lg bg-gray-100" type="email" placeholder="Email" />
                <input className="w-full p-4 border rounded-lg bg-gray-100" type="password" placeholder="Senha" />
                <input className="w-full p-4 border rounded-lg bg-gray-100" type="password" placeholder="Confirmar Senha" />
            </div>
            <button onClick={() => onNavigate('login')} className="w-full bg-red-600 text-white p-4 rounded-lg mt-8 font-bold hover:bg-red-700 transition-colors">
                Cadastrar
            </button>
            <div className="text-center mt-12">
                <p className="text-gray-500">Já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('login'); }} className="font-bold text-red-600">Faça Login</a></p>
            </div>
        </div>
    );
}