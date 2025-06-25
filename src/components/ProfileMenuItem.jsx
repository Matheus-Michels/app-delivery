import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProfileMenuItem({ icon, text, onClick }) {
    return (
        <div onClick={onClick} className="flex justify-between items-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center">
                <span className="text-gray-600 mr-3">{icon}</span>
                <span className="font-semibold text-gray-700">{text}</span>
            </div>
            <ChevronRight className="text-gray-400" />
        </div>
    );
}
