import React from 'react';
import { Pizza } from 'lucide-react';

export default function SplashScreen() {
    return (
        <div className="flex flex-col justify-center items-center h-full bg-red-600 text-white">
            <Pizza size={100} />
            <h1 className="text-4xl font-bold mt-4">FastFood</h1>
            <p className="mt-2">Seu delivery favorito.</p>
        </div>
    );
}
