import React from 'react';
import { Pizza } from 'lucide-react';

export default function LoginScreen({ onNavigate }) {
    return (
        <div className="p-8 flex flex-col justify-center h-full">
            <div className="text-center mb-12">
                <Pizza size={60} className="mx-auto text-red-600" />
                <h1 className="text-3xl font-bold mt-4 text-gray-800">Bem-vindo(a)</h1>
            </div>
            <div className="space-y-4">
                <input className="w-full p-4 border rounded-lg bg-gray-100" type="email" placeholder="Email" />
                <input className="w-full p-4 border rounded-lg bg-gray-100" type="password" placeholder="Senha" />
            </div>
            <button onClick={() => onNavigate('home')} className="w-full bg-red-600 text-white p-4 rounded-lg mt-8 font-bold hover:bg-red-700 transition-colors">
                Entrar
            </button>
            <div className="text-center mt-6">
                <a href="#" className="text-red-600">Esqueceu a senha?</a>
            </div>
            <div className="text-center mt-12">
                <p className="text-gray-500">Não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="font-bold text-red-600">Cadastre-se</a></p>
            </div>
        </div>
    );
}
