// ARQUIVO: src/App.jsx
import React, { useState, useEffect } from 'react';

// Importando componentes reutilizáveis
import BottomNavBar from './components/BottomNavBar';

// Importando todas as telas da aplicação
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RestaurantListScreen from './screens/RestaurantListScreen';
import RestaurantDetailScreen from './screens/RestaurantDetailScreen';
import MenuItemDetailScreen from './screens/MenuItemDetailScreen';
import CartScreen from './screens/CartScreen';
import OrderTrackingScreen from './screens/OrderTrackingScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';
import SavedAddressesScreen from './screens/SavedAddressesScreen';
import PaymentMethodsScreen from './screens/PaymentMethodsScreen';
import CouponsScreen from './screens/CouponsScreen';
import HelpScreen from './screens/HelpScreen';

// Componente Principal
export default function App() {
    // =================================================================
    // ESTADOS GLOBAIS DA APLICAÇÃO
    // =================================================================
    const [history, setHistory] = useState(['splash']);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [cart, setCart] = useState([]);

    const currentPage = history[history.length - 1];
    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    // =================================================================
    // FUNÇÕES DE LÓGICA
    // =================================================================

    // Controla a navegação entre as telas
    const navigate = (page) => {
        if (page === -1) {
            if (history.length > 1) {
                setHistory(prev => prev.slice(0, -1));
            }
        } else {
            setHistory(prev => [...prev, page]);
        }
    };

    // Adiciona um item ao carrinho
    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
        }
        // Volta para a tela do restaurante para o usuário continuar comprando
        navigate(-1);
    };

    // Efeito para a tela de splash inicial
    useEffect(() => {
        if (currentPage === 'splash') {
            const timer = setTimeout(() => navigate('login'), 2000);
            return () => clearTimeout(timer);
        }
    }, [currentPage]);

    // =================================================================
    // RENDERIZADOR DE PÁGINAS
    // =================================================================
    const renderPage = () => {
        switch (currentPage) {
            case 'splash': return <SplashScreen />;
            case 'login': return <LoginScreen onNavigate={navigate} />;
            case 'home': return <HomeScreen onNavigate={navigate} onSelectCategory={setSelectedCategory} onSelectRestaurant={setSelectedRestaurant} />;
            case 'search': return <SearchScreen onNavigate={navigate} onSelectRestaurant={setSelectedRestaurant} />;
            case 'restaurantList': return <RestaurantListScreen category={selectedCategory} onNavigate={navigate} onSelectRestaurant={setSelectedRestaurant} />;
            case 'restaurantDetail': return <RestaurantDetailScreen restaurant={selectedRestaurant} onNavigate={navigate} onSelectMenuItem={setSelectedMenuItem} cartCount={cartItemCount} />;
            case 'menuItemDetail': return <MenuItemDetailScreen item={selectedMenuItem} onNavigate={navigate} onAddToCart={addToCart} />;
            case 'cart': return <CartScreen cart={cart} setCart={setCart} onNavigate={navigate} />;
            case 'orderTracking': return <OrderTrackingScreen onNavigate={navigate} />;
            case 'profile': return <ProfileScreen onNavigate={navigate} />;
            case 'myOrders': return <MyOrdersScreen onNavigate={navigate} />;
            case 'savedAddresses': return <SavedAddressesScreen onNavigate={navigate} />;
            case 'paymentMethods': return <PaymentMethodsScreen onNavigate={navigate} />;
            case 'coupons': return <CouponsScreen onNavigate={navigate} />;
            case 'help': return <HelpScreen onNavigate={navigate} />;
            default: return <HomeScreen onNavigate={navigate} onSelectCategory={setSelectedCategory} onSelectRestaurant={setSelectedRestaurant} />;
        }
    };

    // =================================================================
    // ESTRUTURA PRINCIPAL DO APP
    // =================================================================
    return (
        <div className="bg-gray-800 flex justify-center items-center min-h-screen font-sans">
            <div className="w-[390px] h-[844px] bg-gray-50 shadow-2xl rounded-[40px] overflow-hidden relative">
                <div className="h-full overflow-y-auto pb-20 bg-white">
                    {renderPage()}
                </div>
                {['home', 'search', 'cart', 'profile'].includes(currentPage) && (
                    <BottomNavBar activePage={currentPage} onNavigate={navigate} cartCount={cartItemCount} />
                )}
            </div>
        </div>
    );
}