import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { mockHelpTopics } from '../data/mockData';

export default function HelpScreen({ onNavigate }) {
    const [openId, setOpenId] = useState(null);

    const toggleTopic = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div>
            <ScreenHeader title="Ajuda" onBack={onNavigate} />
            <div className="p-4">
                <div className="relative mb-6">
                   <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input className="w-full p-3 pl-10 border rounded-lg bg-gray-100" type="text" placeholder="Como podemos ajudar?" />
                </div>
                <h3 className="font-bold text-lg mb-4">Perguntas Frequentes</h3>
                <div className="space-y-2">
                    {mockHelpTopics.map(topic => (
                        <div key={topic.id} className="border-b">
                            <button onClick={() => toggleTopic(topic.id)} className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-50">
                                <span className="font-semibold text-gray-800">{topic.question}</span>
                                <ChevronDown className={`transform transition-transform ${openId === topic.id ? 'rotate-180' : ''}`} />
                            </button>
                            {openId === topic.id && (
                                <div className="p-4 bg-gray-50 text-gray-600">
                                    {topic.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
