import React, { useState } from 'react';
import { Lock, Unlock, KeyRound, Check, X, Shield, Clock } from 'lucide-react';

const PasswordMeter: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  const requirements = [
    { id: 1, label: "8 أحرف على الأقل", met: password.length >= 8 },
    { id: 2, label: "حرف كبير (A-Z)", met: /[A-Z]/.test(password) },
    { id: 3, label: "حرف صغير (a-z)", met: /[a-z]/.test(password) },
    { id: 4, label: "رقم (0-9)", met: /[0-9]/.test(password) },
    { id: 5, label: "رمز خاص (!@#$)", met: /[^A-Za-z0-9]/.test(password) },
  ];

  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (!pwd) return 0;
    if (pwd.length > 8) score += 20;
    if (pwd.length > 12) score += 20;
    if (/[A-Z]/.test(pwd)) score += 15;
    if (/[0-9]/.test(pwd)) score += 15;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 30;
    return Math.min(100, score);
  };

  const getCrackTime = (strength: number) => {
    if (strength < 30) return "لحظياً (فوراً)";
    if (strength < 50) return "ساعات قليلة";
    if (strength < 70) return "3 أيام";
    if (strength < 90) return "5 سنوات";
    return "+100 قرن";
  };

  const getColor = (strength: number) => {
    if (strength < 30) return "bg-red-500";
    if (strength < 60) return "bg-yellow-500";
    if (strength < 80) return "bg-blue-500";
    return "bg-emerald-500";
  };

  const strength = calculateStrength(password);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-sky-50 rounded-full text-sky-600 mb-3">
            <KeyRound size={32} />
        </div>
        <h3 className="font-bold text-2xl text-slate-800">مختبر كلمات المرور</h3>
        <p className="text-slate-500 mt-2">جرب قوة كلمة مرورك واكتشف كم تستغرق لكسرها</p>
      </div>

      <div className="relative mb-6">
        <input
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="اكتب هنا..."
          className="w-full p-4 pl-12 pr-12 text-center text-xl font-mono border-2 border-slate-200 rounded-xl focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition-all"
        />
        <button 
            onClick={() => setIsVisible(!isVisible)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-600"
        >
            {strength > 50 ? <Lock size={20} /> : <Unlock size={20} />}
        </button>
      </div>

      {/* Strength Bar */}
      <div className="h-3 bg-slate-100 rounded-full overflow-hidden mb-8">
        <div 
          className={`h-full transition-all duration-700 ease-out ${getColor(strength)}`} 
          style={{ width: `${strength}%` }}
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-colors ${strength > 70 ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
          <Clock className={`mb-2 ${strength > 70 ? 'text-emerald-500' : 'text-red-500'}`} />
          <span className="text-xs text-slate-500 mb-1">الزمن للكسر</span>
          <span className="font-bold text-lg text-slate-800">{password ? getCrackTime(strength) : "-"}</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-100 flex flex-col items-center justify-center">
          <Shield className="mb-2 text-sky-500" />
          <span className="text-xs text-slate-500 mb-1">التقييم</span>
          <span className={`font-bold text-lg ${strength < 50 ? 'text-red-600' : strength < 80 ? 'text-yellow-600' : 'text-emerald-600'}`}>
            {password ? (strength < 50 ? "ضعيفة" : strength < 80 ? "جيدة" : "خارقة") : "-"}
          </span>
        </div>
      </div>

      {/* Requirements List */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
        <h4 className="font-bold text-slate-700 mb-4 text-sm">متطلبات الأمان:</h4>
        <div className="space-y-3">
            {requirements.map((req) => (
                <div key={req.id} className="flex items-center justify-between">
                    <span className={`text-sm ${req.met ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{req.label}</span>
                    {req.met ? (
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                            <Check size={12} strokeWidth={3} />
                        </div>
                    ) : (
                        <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                            <X size={12} strokeWidth={3} />
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
      
      <p className="text-xs text-center text-slate-400 mt-6">
        🔒 التشفير يتم محلياً في متصفحك، لا يتم إرسال أي شيء للخادم.
      </p>
    </div>
  );
};

export default PasswordMeter;