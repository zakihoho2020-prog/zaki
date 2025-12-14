import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, BrainCircuit, Siren, ArrowRight, Lock, Fingerprint, Globe, ChevronLeft, Zap, Database, Server } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in overflow-hidden min-h-screen relative">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`, backgroundSize: '40px 40px'}}>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto perspective-1000 z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 bg-white/80 border border-white shadow-sm px-4 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-md animate-float-delayed text-indigo-900">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                متحف الدفاع السيبراني التفاعلي
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              حصنك <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 to-sky-500">الرقمي</span>
              <br />
              <span className="text-4xl md:text-6xl text-slate-400 font-bold">ضد المجهول</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
              ليست مجرد دروس.. بل مدينة تفاعلية ثلاثية الأبعاد. تعلم كيف تحمي بياناتك، أموالك، وهويتك من خلال المحاكاة المباشرة للهجمات والحلول.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/simulation" className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl hover:shadow-indigo-500/20 transition-all transform hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                    ابدأ المحاكاة <Activity size={20} />
                </span>
              </Link>
              
              <Link to="/dz-scams" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 rounded-2xl font-bold shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <Siren size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span>كشف الاحتيال</span>
                <ChevronLeft size={16} className="mt-1 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>

            {/* Stats Strip */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400 text-sm font-bold opacity-80">
                <div className="flex items-center gap-2">
                    <Zap size={16} className="text-yellow-500" />
                    <span>تحديث فوري</span>
                </div>
                <div className="flex items-center gap-2">
                    <Database size={16} className="text-sky-500" />
                    <span>محتوى محلي</span>
                </div>
                <div className="flex items-center gap-2">
                    <Lock size={16} className="text-emerald-500" />
                    <span>تصفح آمن</span>
                </div>
            </div>
          </div>

          {/* 3D Visual Element (Refined) */}
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-full perspective-1000">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto transform-style-3d animate-float">
                
                {/* Core Sphere */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-64 h-64 rounded-full bg-gradient-to-b from-slate-100 to-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center border border-white z-10 relative">
                        <Globe size={120} className="text-slate-200" strokeWidth={0.5} />
                        <div className="absolute inset-0 rounded-full border-4 border-slate-50 border-t-sky-500/30 animate-spin-slow"></div>
                   </div>
                </div>

                {/* Floating Modules */}
                <FloatingCard 
                    icon={ShieldCheck} 
                    label="Active" 
                    color="emerald" 
                    position="top-0 right-10" 
                    delay="0s" 
                />
                
                <FloatingCard 
                    icon={Siren} 
                    label="Threats" 
                    color="red" 
                    position="bottom-20 left-0" 
                    delay="1s" 
                />

                <FloatingCard 
                    icon={Server} 
                    label="Data" 
                    color="indigo" 
                    position="bottom-10 right-20" 
                    delay="2s" 
                />

                 {/* Connecting Lines (SVG) */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                    <path d="M250 250 L350 100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M250 250 L100 350" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M250 250 L400 400" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                 </svg>

            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-10">
            <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
            <h2 className="text-2xl font-black text-slate-800 text-center">بوابات المدينة الدفاعية</h2>
            <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
          
          <ModuleCard 
            to="/simulation"
            title="معمل المحاكاة"
            description="بيئة معزولة لتجربة الهجمات وفهم آليتها."
            icon={Activity}
            color="sky"
            gradient="from-sky-500 to-blue-600"
          />

          <ModuleCard 
            to="/arsenal"
            title="ترسانة الدفاع"
            description="أدوات وقوائم تحقق لتأمين أجهزتك فوراً."
            icon={ShieldCheck}
            color="emerald"
            gradient="from-emerald-500 to-teal-600"
          />

          <ModuleCard 
            to="/myths"
            title="تصحيح المفاهيم"
            description="حقائق تقنية تصدمك عن الخصوصية والأمان."
            icon={BrainCircuit}
            color="purple"
            gradient="from-purple-500 to-indigo-600"
          />
          
        </div>
      </section>
      
      <style>{`
        .animate-spin-slow {
            animation: spin 10s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// --- Sub Components ---

const FloatingCard = ({ icon: Icon, label, color, position, delay }: any) => {
    const colorClasses = {
        emerald: 'text-emerald-500 bg-emerald-50 border-emerald-100',
        red: 'text-red-500 bg-red-50 border-red-100',
        indigo: 'text-indigo-500 bg-indigo-50 border-indigo-100',
    }[color] || 'text-slate-500';

    return (
        <div 
            className={`absolute ${position} p-3 rounded-2xl shadow-xl border backdrop-blur-sm bg-white/90 transform translate-z-20 animate-float`}
            style={{ animationDelay: delay }}
        >
            <div className={`p-2 rounded-xl mb-1 ${colorClasses} w-fit`}>
                <Icon size={24} />
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>
        </div>
    );
};

const ModuleCard = ({ to, title, description, icon: Icon, color, gradient }: any) => {
    return (
        <Link to={to} className="group relative h-64 cursor-pointer transform-style-3d hover:z-20">
            {/* Background Card */}
            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl border border-slate-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                {/* Header Gradient */}
                <div className={`h-24 bg-gradient-to-r ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Content */}
                <div className="p-8 relative -mt-12">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 mb-6`}>
                        <Icon size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">
                        {title}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Arrow Icon on Hover */}
                <div className="absolute bottom-6 left-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <div className="bg-slate-100 p-2 rounded-full text-slate-600">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Home;