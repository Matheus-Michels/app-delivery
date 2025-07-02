import React from 'react';
import { Pizza } from 'lucide-react';

export default function LoginScreen({ onNavigate, onGoogleLogin, onFacebookLogin }) {
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

            <button onClick={() => onNavigate('home')} className="w-full bg-red-600 text-white p-4 rounded-lg mt-6 font-bold hover:bg-red-700 transition-colors">
                Entrar
            </button>

            <div className="text-center mt-4">
                <a href="#" className="text-sm text-red-600">Esqueceu a senha?</a>
            </div>

            <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">OU</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="space-y-3">
                <button onClick={onGoogleLogin} className="w-full flex justify-center items-center bg-white border border-gray-300 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C44.437,36.218,48,30.651,48,24C48,22.659,47.862,21.35,47.611,20.083z"></path></svg>
                    Entrar com Google
                </button>
                <button onClick={onFacebookLogin} className="w-full flex justify-center items-center bg-[#1877F2] text-white p-3 rounded-lg font-semibold hover:bg-[#166fe5] transition-colors">
                     <svg className="w-6 h-6 mr-3" fill="white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
                    Entrar com Facebook
                </button>
            </div>

            <div className="text-center mt-6">
                <p className="text-gray-500">Não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('register'); }} className="font-bold text-red-600">Cadastre-se</a></p>
            </div>
        </div>
    );
}