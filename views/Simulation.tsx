import React, { useState } from 'react';
import PhishingSim from '../components/PhishingSim';
import PasswordMeter from '../components/PasswordMeter';
import NetworkMap from '../components/NetworkMap';
import { Mail, KeyRound, Wifi, Layout, Beaker } from 'lucide-react';

const Simulation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'phishing' | 'password' | 'network'>('phishing');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in font-[Cairo]">
      
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4 shadow-sm">
            <Beaker size={40} />
        </div>
        <h2 className="text-4xl font-black text-slate-800 mb-4">معمل المحاكاة</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            بيئة آمنة ومعزولة لتجربة الهجمات الرقمية وفهم كيف تعمل دون أي خطر على جهازك.
        </p>
      </div>

      {/* Modern Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex flex-wrap justify-center gap-2 shadow-inner">
            {[
                { id: 'phishing', label: 'كاشف الاحتيال', icon: Mail },
                { id: 'password', label: 'مختبر الكلمات', icon: KeyRound },
                { id: 'network', label: 'خريطة الشبكة', icon: Wifi },
            ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                            isActive 
                            ? 'bg-white text-indigo-600 shadow-md scale-105' 
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                        }`}
                    >
                        <Icon size={18} />
                        {tab.label}
                    </button>
                );
            })}
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px]">
        {activeTab === 'phishing' && (
          <div className="animate-slide-up">
            <PhishingSim />
          </div>
        )}
        {activeTab === 'password' && (
          <div className="animate-slide-up max-w-3xl mx-auto">
            <PasswordMeter />
          </div>
        )}
        {activeTab === 'network' && (
          <div className="animate-slide-up max-w-4xl mx-auto">
            <NetworkMap />
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulation;