import React, { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import { MapPin } from 'lucide-react';

export default function AddAddressScreen({ onNavigate, onAddAddress }) {
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleSave = () => {
        if (!street || !number || !city || !state) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        const newAddress = {
            street: `${street}, ${number}`,
            city: `${city}, ${state}`,
        };
        onAddAddress(newAddress);
    };

    return (
        <div className="flex flex-col h-full">
            <ScreenHeader title="Adicionar Endereço" onBack={onNavigate} />
            <div className="flex-grow p-4 space-y-4">
                <div>
                    <label className="text-sm font-bold text-gray-600 mb-1 block">CEP</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="00000-000"
                            className="w-full p-3 border rounded-lg bg-gray-100"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 font-semibold text-sm">
                            Buscar
                        </button>
                    </div>
                </div>
                <div>
                    <label className="text-sm font-bold text-gray-600 mb-1 block">Rua</label>
                    <input
                        type="text"
                        placeholder="Nome da sua rua"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="text-sm font-bold text-gray-600 mb-1 block">Número</label>
                        <input
                            type="text"
                            placeholder="Ex: 123"
                            className="w-full p-3 border rounded-lg bg-gray-100"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-sm font-bold text-gray-600 mb-1 block">Complemento</label>
                        <input
                            type="text"
                            placeholder="Opcional"
                            className="w-full p-3 border rounded-lg bg-gray-100"
                            value={complement}
                            onChange={(e) => setComplement(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-bold text-gray-600 mb-1 block">Bairro</label>
                    <input
                        type="text"
                        placeholder="Nome do seu bairro"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex-grow">
                        <label className="text-sm font-bold text-gray-600 mb-1 block">Cidade</label>
                        <input
                            type="text"
                            placeholder="Sua cidade"
                            className="w-full p-3 border rounded-lg bg-gray-100"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="w-20">
                        <label className="text-sm font-bold text-gray-600 mb-1 block">Estado</label>
                        <input
                            type="text"
                            placeholder="UF"
                            className="w-full p-3 border rounded-lg bg-gray-100"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <footer className="p-4 border-t bg-white">
                <button onClick={handleSave} className="w-full bg-red-600 text-white p-4 rounded-lg font-bold flex items-center justify-center gap-2">
                    <MapPin size={20} />
                    Salvar Endereço
                </button>
            </footer>
        </div>
    );
}