import React, { useState, useEffect } from 'react';

import BottomNavBar from './components/BottomNavBar';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from './screens/FilterScreen';
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
import FoodListScreen from './screens/FoodListScreen';
import AddAddressScreen from './screens/AddAddressScreen';
import AddPaymentMethodScreen from './screens/AddPaymentMethodScreen';
import GoogleLoginPopup from './screens/GoogleLoginPopup';
import FacebookLoginPopup from './screens/FacebookLoginPopup';

import { mockAddresses, mockPaymentMethods, restaurantDetails } from './data/mockData';
import { Home } from 'lucide-react';

export default function App() {

    const [history, setHistory] = useState(['splash']);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({ categories: [], price: [0, 100], filterType: 'restaurants' });
    const [addresses, setAddresses] = useState(mockAddresses);
    const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);
    const [activeOrders, setActiveOrders] = useState([]);
    const [activePopup, setActivePopup] = useState(null);

    const currentPage = history[history.length - 1];
    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const navigate = (page) => {
        if (page === -1) {
            if (history.length > 1) {
                setHistory(prev => prev.slice(0, -1));
            }
        } else {
            setHistory(prev => [...prev, page]);
        }
    };

    const openGooglePopup = () => setActivePopup('google');
    const openFacebookPopup = () => setActivePopup('facebook');
    const closePopup = () => setActivePopup(null);

    const handleSocialLoginSuccess = () => {
        closePopup();
        navigate('home');
    };

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
        const newHistory = history.slice(0, -1);
        if (newFilters.filterType === 'items') {
            newHistory.push('foodList');
        } else {
            newHistory.push('search');
        }
        setHistory(newHistory);
    };

    const handleDeleteAddress = (addressId) => {
        setAddresses(prevAddresses => prevAddresses.filter(address => address.id !== addressId));
    };

    const handleAddAddress = (newAddressData) => {
        const newAddress = {
            id: Date.now(),
            type: 'Casa',
            icon: <Home />,
            ...newAddressData
        };
        setAddresses(prevAddresses => [...prevAddresses, newAddress]);
        navigate(-1);
    };

    const handleDeletePaymentMethod = (paymentMethodId) => {
        setPaymentMethods(prevMethods => prevMethods.filter(method => method.id !== paymentMethodId));
    };

    const handleAddPaymentMethod = (newPaymentMethodData) => {
        const newMethod = {
            id: Date.now(),
            ...newPaymentMethodData
        };
        setPaymentMethods(prevMethods => [...prevMethods, newMethod]);
        navigate(-1);
    };

    const addToCart = (item, quantityToAdd) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd } : cartItem
            ));
        } else {
            const restaurant = Object.values(restaurantDetails).find(r => r.menu && Object.values(r.menu).flat().some(menuItem => menuItem.id === item.id));
            setCart(prevCart => [...prevCart, { ...item, quantity: quantityToAdd, restaurantName: restaurant.name, restaurantLogo: restaurant.logo }]);
        }
        navigate(-1);
    };

    const handleFinalizeOrder = (total) => {
        if (cart.length === 0) return;
        const newOrder = {
            id: `order-${Date.now()}`,
            restaurant: cart[0].restaurantName,
            logo: cart[0].restaurantLogo,
            date: new Date().toLocaleDateString('pt-BR'),
            total: total.toFixed(2),
            status: 'Preparando',
            items: cart.map(item => `${item.quantity}x ${item.name}`)
        };
        setActiveOrders(prevOrders => [newOrder, ...prevOrders]);
        setCart([]);
        navigate('orderTracking');
    };

    useEffect(() => {
        if (currentPage === 'splash') {
            const timer = setTimeout(() => navigate('login'), 2000);
            return () => clearTimeout(timer);
        }
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'splash': return <SplashScreen />;
            case 'login': return <LoginScreen onNavigate={navigate} onGoogleLogin={openGooglePopup} onFacebookLogin={openFacebookPopup} />;
            case 'register': return <RegisterScreen onNavigate={navigate} onGoogleLogin={openGooglePopup} onFacebookLogin={openFacebookPopup} />;
            case 'home': return <HomeScreen onNavigate={navigate} onSelectCategory={setSelectedCategory} onSelectRestaurant={setSelectedRestaurant} appliedFilters={filters} />;
            case 'search': return <SearchScreen onNavigate={navigate} onSelectRestaurant={setSelectedRestaurant} appliedFilters={filters} />;
            case 'filter': return <FilterScreen onNavigate={navigate} onApplyFilters={handleApplyFilters} initialFilters={filters} />;
            case 'foodList': return <FoodListScreen onNavigate={navigate} onSelectRestaurant={setSelectedRestaurant} onSelectMenuItem={setSelectedMenuItem} appliedFilters={filters} />;
            case 'restaurantList': return <RestaurantListScreen category={selectedCategory} onNavigate={navigate} onSelectRestaurant={setSelectedRestaurant} />;
            case 'restaurantDetail': return <RestaurantDetailScreen restaurant={selectedRestaurant} onNavigate={navigate} onSelectMenuItem={setSelectedMenuItem} cartCount={cartItemCount} />;
            case 'menuItemDetail': return <MenuItemDetailScreen item={selectedMenuItem} onNavigate={navigate} onAddToCart={addToCart} />;
            case 'cart': return <CartScreen cart={cart} setCart={setCart} onNavigate={navigate} onFinalizeOrder={handleFinalizeOrder} />;
            case 'orderTracking': return <OrderTrackingScreen onNavigate={navigate} activeOrders={activeOrders} />;
            case 'profile': return <ProfileScreen onNavigate={navigate} />;
            case 'myOrders': return <MyOrdersScreen onNavigate={navigate} activeOrders={activeOrders} />;
            case 'savedAddresses': return <SavedAddressesScreen onNavigate={navigate} addresses={addresses} onDeleteAddress={handleDeleteAddress} />;
            case 'addAddress': return <AddAddressScreen onNavigate={navigate} onAddAddress={handleAddAddress} />;
            case 'paymentMethods': return <PaymentMethodsScreen onNavigate={navigate} paymentMethods={paymentMethods} onDeletePaymentMethod={handleDeletePaymentMethod} />;
            case 'addPaymentMethod': return <AddPaymentMethodScreen onNavigate={navigate} onAddPaymentMethod={handleAddPaymentMethod} />;
            case 'coupons': return <CouponsScreen onNavigate={navigate} />;
            case 'help': return <HelpScreen onNavigate={navigate} />;
            default: return <HomeScreen onNavigate={navigate} onSelectCategory={setSelectedCategory} onSelectRestaurant={setSelectedRestaurant} />;
        }
    };

    return (
        <div className="bg-gray-800 flex justify-center items-center min-h-screen font-sans">
            <div className="w-[390px] h-[844px] bg-gray-50 shadow-2xl rounded-[40px] overflow-hidden relative">
                <div className="h-full overflow-y-auto pb-20 bg-white">
                    {renderPage()}
                </div>
                {['home', 'search', 'cart', 'profile'].includes(currentPage) && (
                    <BottomNavBar activePage={currentPage} onNavigate={navigate} cartCount={cartItemCount} />
                )}

                {activePopup === 'google' && <GoogleLoginPopup onClose={closePopup} onLoginSuccess={handleSocialLoginSuccess} />}
                {activePopup === 'facebook' && <FacebookLoginPopup onClose={closePopup} onLoginSuccess={handleSocialLoginSuccess} />}
            </div>
        </div>
    );
}