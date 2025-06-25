import React from 'react';
import { Home, Search, ShoppingCart, User } from 'lucide-react';

export default function BottomNavBar({ activePage, onNavigate, cartCount }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2 z-20">
      <div onClick={() => onNavigate('home')} className={`p-2 rounded-lg flex flex-col items-center cursor-pointer w-16 ${activePage === 'home' ? 'text-red-600' : 'text-gray-500'}`}>
        <Home />
        <span className="text-xs">Início</span>
      </div>
      <div onClick={() => onNavigate('search')} className={`p-2 rounded-lg flex flex-col items-center cursor-pointer w-16 ${activePage === 'search' ? 'text-red-600' : 'text-gray-500'}`}>
        <Search />
        <span className="text-xs">Busca</span>
      </div>
      <div onClick={() => onNavigate('cart')} className={`relative p-2 rounded-lg flex flex-col items-center cursor-pointer w-16 ${activePage === 'cart' ? 'text-red-600' : 'text-gray-500'}`}>
        {cartCount > 0 && <span className="absolute top-1 right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
        <ShoppingCart />
        <span className="text-xs">Carrinho</span>
      </div>
      <div onClick={() => onNavigate('profile')} className={`p-2 rounded-lg flex flex-col items-center cursor-pointer w-16 ${activePage === 'profile' ? 'text-red-600' : 'text-gray-500'}`}>
        <User />
        <span className="text-xs">Perfil</span>
      </div>
    </div>
  );
}
