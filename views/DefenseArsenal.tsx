import React, { useState } from 'react';
import { CheckSquare, ExternalLink, Download, Shield, Lock, Smartphone, Wifi, ArrowUpRight, CheckCircle2, Circle } from 'lucide-react';

const DefenseArsenal: React.FC = () => {
  const [checklist, setChecklist] = useState({
    mfa: false,
    update: false,
    router: false,
    backup: false,
    antivirus: false,
    privacy: false
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateProgress = () => {
    const total = Object.keys(checklist).length;
    const checked = Object.values(checklist).filter(Boolean).length;
    return Math.round((checked / total) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in font-[Cairo]">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-emerald-100 rounded-full text-emerald-600 mb-4 shadow-sm">
            <Shield size={40} />
        </div>
        <h2 className="text-4xl font-black text-slate-800 mb-4">الترسانة الدفاعية</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            حول جهازك إلى حصن منيع باستخدام هذه الأدوات المجانية والخطوات العملية.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Progress & Checklist */}
        <div className="lg:col-span-1 space-y-6">
            {/* Score Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 ${progress === 100 ? 'bg-emerald-500' : 'bg-slate-100'}`}>
                    <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                </div>
                
                <h3 className="text-slate-500 font-bold mb-2 uppercase tracking-widest text-xs">مستوى الحماية الحالي</h3>
                <div className="text-6xl font-black text-slate-800 mb-2">{progress}%</div>
                <p className={`text-sm font-bold ${progress === 100 ? 'text-emerald-600' : 'text-orange-500'}`}>
                    {progress === 100 ? "الحصن مكتمل! 🛡️" : "دفاعاتك تحتاج لتعزيز"}
                </p>
            </div>

            {/* Checklist */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
                    <CheckSquare className="text-emerald-500" /> مهام عاجلة
                </h3>
                <div className="space-y-4">
                    {[
                    { key: 'mfa', label: 'تفعيل المصادقة الثنائية (2FA)', sub: 'على البريد الإلكتروني وفيسبوك' },
                    { key: 'update', label: 'تحديث النظام', sub: 'Windows / iOS / Android' },
                    { key: 'router', label: 'تأمين الراوتر', sub: 'تغيير كلمة المرور الافتراضية' },
                    { key: 'backup', label: 'النسخ الاحتياطي', sub: 'في قرص خارجي مفصول' },
                    { key: 'privacy', label: 'مراجعة الخصوصية', sub: 'تقليل صلاحيات التطبيقات' },
                    ].map((item) => (
                    <label key={item.key} className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all border ${checklist[item.key as keyof typeof checklist] ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-100 hover:border-slate-300'}`}>
                        <div className="mt-1">
                             {checklist[item.key as keyof typeof checklist] ? <CheckCircle2 className="text-emerald-500" /> : <Circle className="text-slate-400" />}
                        </div>
                        <input 
                            type="checkbox" 
                            checked={checklist[item.key as keyof typeof checklist]}
                            onChange={() => toggleCheck(item.key as keyof typeof checklist)}
                            className="hidden"
                        />
                        <div>
                            <span className={`block font-bold text-sm ${checklist[item.key as keyof typeof checklist] ? 'text-emerald-900 line-through decoration-emerald-500/50' : 'text-slate-700'}`}>
                                {item.label}
                            </span>
                            <span className="text-xs text-slate-500">{item.sub}</span>
                        </div>
                    </label>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Column: Tools Grid */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Category: Passwords */}
            <div>
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                    <Lock className="text-sky-500" /> إدارة كلمات المرور
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ToolCard 
                        title="Bitwarden" 
                        desc="أفضل مدير كلمات مرور مجاني ومفتوح المصدر." 
                        tags={['مجاني', 'آمن']}
                        color="sky"
                    />
                    <ToolCard 
                        title="Have I Been Pwned" 
                        desc="تحقق مما إذا تم تسريب بريدك الإلكتروني في اختراقات سابقة." 
                        tags={['بحث']}
                        color="sky"
                    />
                </div>
            </div>

            {/* Category: Privacy */}
            <div>
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                    <Smartphone className="text-purple-500" /> الخصوصية والتواصل
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ToolCard 
                        title="Signal" 
                        desc="تطبيق المراسلة الأكثر أماناً في العالم. مشفر ولا يجمع بياناتك." 
                        tags={['تشفير تام']}
                        color="purple"
                    />
                    <ToolCard 
                        title="Brave Browser" 
                        desc="متصفح يحجب الإعلانات والمتتبعات تلقائياً." 
                        tags={['تصفح سريع']}
                        color="purple"
                    />
                </div>
            </div>

            {/* Category: Network */}
            <div>
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                    <Wifi className="text-orange-500" /> الشبكة والحماية
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ToolCard 
                        title="Cloudflare 1.1.1.1" 
                        desc="تطبيق لتسريع وتأمين اتصال الإنترنت (DNS)." 
                        tags={['Android', 'iOS']}
                        color="orange"
                    />
                    <ToolCard 
                        title="VirusTotal" 
                        desc="افحص أي ملف أو رابط مشبوه بـ 70 مضاد فيروسات في وقت واحد." 
                        tags={['فحص أونلاين']}
                        color="orange"
                    />
                </div>
            </div>

             {/* Quick Guides */}
             <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="font-bold text-xl mb-2">📥 أدلة الحماية (PDF)</h3>
                    <p className="text-slate-400 text-sm">شروحات مصورة خطوة بخطوة لتأمين حساباتك.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                        <Download size={16} /> دليل الفيسبوك
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                        <Download size={16} /> دليل الجيميل
                    </button>
                </div>
             </div>

        </div>
      </div>
    </div>
  );
};

// Helper Component for Tools
const ToolCard = ({ title, desc, tags, color }: { title: string, desc: string, tags: string[], color: string }) => {
    const colorClasses = {
        sky: 'bg-sky-50 border-sky-100 text-sky-600 hover:border-sky-300',
        purple: 'bg-purple-50 border-purple-100 text-purple-600 hover:border-purple-300',
        orange: 'bg-orange-50 border-orange-100 text-orange-600 hover:border-orange-300',
    }[color] || 'bg-slate-50';

    return (
        <div className={`p-5 rounded-xl border transition-all cursor-pointer group relative overflow-hidden ${colorClasses}`}>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">{title}</h4>
                    <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-slate-600 mb-4 h-10">{desc}</p>
                <div className="flex gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs bg-white/60 px-2 py-1 rounded font-bold border border-black/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DefenseArsenal;