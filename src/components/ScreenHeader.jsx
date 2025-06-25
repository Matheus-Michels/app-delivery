import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ScreenHeader({ title, onBack }) {
    return (
        <header className="flex items-center p-4 border-b bg-white sticky top-0 z-10">
            <ArrowLeft className="cursor-pointer" onClick={() => onBack(-1)} />
            <h1 className="text-xl font-bold mx-auto">{title}</h1>
            <div className="w-6"></div> {}
        </header>
    );
}
