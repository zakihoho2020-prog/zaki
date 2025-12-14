import React, { useState, useMemo } from 'react';
import { AlertTriangle, PhoneOff, CreditCard, Siren, ShieldAlert, ChevronDown, ChevronUp, ShoppingBag, Plane, MessageSquare, Search, Smartphone, UserX, Camera, Share2, MoreHorizontal, Lock, Eye, AlertOctagon, Wallet } from 'lucide-react';

// --- DATA: OFFICIAL POLICE WARNINGS (Sétif Court) ---
const OFFICIAL_DATA = {
  tiktok: [
    "Fiatservices", "Électroménager Brandt", "Perfomance China", "Fiat Relizane", 
    "Fiat Aintemochent", "Elwakil Service", "Dfsk.Service", "Servive El Bayedh", 
    "Dfsk Mohamed Fiat", "Mouh_Motoo", "User_Ysetaksi_Phone", "Golden_Phone20", "Elwakil.Auto.Serv"
  ],
  instagram: [
    "Showroom World Moto Cycle", "Phone Plus 31", "Phone Plus Off", "Mobile_Worldphone", 
    "Electromenge_Walid", "Vms_Sym_Moto", "Vms_48_Motors", "Royal_Mobille_02_", 
    "Arti Store_Phone", "Dfsk.Service", "Dfsk sevice mostaganem", "Dfsk Service El Bayedh", 
    "Your Arti Phone", "Tadjooooou", "Maison Vms04", "Vms Sym Setif", "Moto Cycle_", 
    "Dfsk Relizane.48", "Fiat_Relizane", "Moto_Alg_24", "Symo_Mototrs", "Vms Industrie_18",
    "Zak.Phone__16", "Meuble._.Aziz", "Es_Phone_Tiliphon43", "My__Phone_.31", "Vms_Shoroom",
    "Zinou_Phone_Tlemcen", "Dfsk_Algerie_Chlef", "El_Hadj_Auto", "Anis Moto", "Golden_Phone_17",
    "Mino_Phone_02", "Golden_Phone", "Amine_Phonee", "Mino_Phone_17", "Auto_Israa_31",
    "Ramii_Phones", "Es_Store_39", "Electromenager.Planet1", "Dfsk_Telemcen", 
    "Electromenager El Rahma", "Meuble Deco", "Madjidelectromenager"
  ],
  facebook: [
    "Boutique_Role_Phone", "Gasmielectromenager", "Fiat Ghardia", "electrou Rahlaoui", "Minomotoo39"
  ],
  whatsapp: [
    "Vms_Sim_Batna", "Aston_Martin_00", "Adem Auto", "Aston Martin", "Dfsk Khenchla", "Zaza Phone"
  ],
  ccp: [
    "00418301 (18)", "00417375 (38)", "00289912 (34)", "00238683 (86)", "00243166 (66)", 
    "00262314 (08)", "00261532 (82)", "00412752 (88)", "00419050 (58)", "00406137 (93)", 
    "00282786 (85)", "00296665 (75)", "00262662 (92)", "00292752 (89)", "00169820 (87)", 
    "00420221 (66)", "00025079 (71)", "00257321 (95)", "00410242 (97)"
  ],
  phones: [
    "0654059997", "0559467242", "0554970728", "0540448574",
    "0655438236", "0561040850", "0556123990", "0540526892",
    "0655939351", "0561214158", "0556445812", "0540614673",
    "0659990487", "0779283006", "0557067456", "0540728665",
    "0663156385", "0791260131", "0557352927", "0540835357",
    "0675259274", "0791414698", "0557784652", "0541842843",
    "0676062731", "0774925637", "0796321226", "0542170392",
    "0668166206", "0553201401", "0559115437", "0542567920",
    "0669242265", "0794957413", "0549783101", "0542649015",
    "0559673253", "0796545695", "0562858463", "0549168334",
    "0672664372", "0797230614", "0551061211", "0552740154",
    "0696703415", "0554730096", "0551492606", "0552993934",
    "0699721334", "0779283006", "0561343769", "0562837285",
    "0795489692", "0559717619", "0563417476", "5634167710",
    "0557636708", "0559676813", "0551089109", "0549750545",
    "0562854663", "0559684989", "0554932934", "0549780131",
    "0552960618", "0674761899", "0793393443", "0775885145",
    "0797218474", "0549.16.83.34", "0663299765", "0792575709",
    "0669171673", "0551492606", "0666912812", "0797439095",
    "0541165362", "0657836207", "0669291930", "0798279805"
  ]
};

const DZScams: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'financial' | 'shopping' | 'visa' | 'sms'>('financial');
  const [activeScam, setActiveScam] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeWarningTab, setActiveWarningTab] = useState<'social' | 'ccp' | 'phones'>('social');

  const toggleScam = (id: number) => {
    setActiveScam(activeScam === id ? null : id);
  };

  // Filter Logic for Official Data
  const filteredSocial = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return {
      tiktok: OFFICIAL_DATA.tiktok.filter(item => item.toLowerCase().includes(term)),
      instagram: OFFICIAL_DATA.instagram.filter(item => item.toLowerCase().includes(term)),
      facebook: OFFICIAL_DATA.facebook.filter(item => item.toLowerCase().includes(term)),
      whatsapp: OFFICIAL_DATA.whatsapp.filter(item => item.toLowerCase().includes(term)),
    };
  }, [searchTerm]);

  const filteredCCP = useMemo(() => 
    OFFICIAL_DATA.ccp.filter(item => item.includes(searchTerm)), [searchTerm]);

  const filteredPhones = useMemo(() => 
    OFFICIAL_DATA.phones.filter(item => item.includes(searchTerm)), [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in font-[Cairo] relative overflow-hidden">
      
      {/* Background Pattern - Subtle Algerian/Geometric Motif */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
      </div>

      {/* 3D Hero Section */}
      <div className="relative z-10 mb-16 perspective-1000">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative transform-style-3d group hover:rotate-x-1 transition-transform duration-500">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                    <Siren size={56} className="text-red-400 drop-shadow-lg" />
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        OFFICIAL
                    </div>
                </div>
                <div className="text-center md:text-right flex-1">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-indigo-100 px-4 py-1.5 rounded-full text-xs font-bold mb-4 backdrop-blur-sm shadow-sm">
                        <AlertOctagon size={14} className="text-red-400" />
                        <span>بيانات محدثة: محكمة سطيف 2024</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">
                        الموسوعة الجزائرية <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">للاحتيال</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                        الدليل الموثوق لكشف طرق النصب المتداولة في الجزائر. من "بريد موب" إلى "واد كنيس". 
                        <span className="block mt-2 text-white font-bold opacity-90">"ما يحشوهالكش.. اقرأ وتعلم!"</span>
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* --- OFFICIAL POLICE WARNING / BLACKLIST --- */}
      <div className="relative z-10 mb-20">
        
        {/* Controls Bar */}
        <div className="glass rounded-3xl p-6 mb-8 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-xl border border-white/60">
             <div>
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                    <span className="bg-slate-800 text-white p-2 rounded-lg"><UserX size={20} /></span>
                    القائمة السوداء
                </h2>
                <p className="text-slate-500 text-sm mt-1">ابحث في قاعدة بيانات المحتالين (أرقام، حسابات، أسماء)</p>
             </div>

             {/* Search */}
             <div className="relative w-full lg:w-96 group">
                <input 
                    type="text" 
                    placeholder="ابحث عن اسم، رقم هاتف، CCP..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-4 pr-12 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 outline-none text-slate-700 transition-all shadow-inner font-bold"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" size={20} />
             </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
            {[
                { id: 'social', label: 'حسابات وهمية', icon: UserX },
                { id: 'phones', label: 'أرقام هواتف', icon: PhoneOff },
                { id: 'ccp', label: 'حسابات CCP', icon: Wallet },
            ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeWarningTab === tab.id;
                return (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveWarningTab(tab.id as any)}
                        className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1 ${
                            isActive 
                            ? 'bg-slate-800 text-white shadow-lg shadow-slate-800/20 scale-105' 
                            : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                        }`}
                    >
                        <Icon size={18} /> <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                )
            })}
        </div>

        {/* Gallery Content */}
        <div className="min-h-[400px]">
            {/* SOCIAL MEDIA CARDS */}
            {activeWarningTab === 'social' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                    {filteredSocial.instagram.map((name, idx) => (
                        <SocialProfileCard key={`inst-${idx}`} name={name} platform="Instagram" />
                    ))}
                    {filteredSocial.tiktok.map((name, idx) => (
                        <SocialProfileCard key={`tik-${idx}`} name={name} platform="TikTok" />
                    ))}
                    {filteredSocial.facebook.map((name, idx) => (
                        <SocialProfileCard key={`fb-${idx}`} name={name} platform="Facebook" />
                    ))}
                    {filteredSocial.whatsapp.map((name, idx) => (
                        <SocialProfileCard key={`wa-${idx}`} name={name} platform="Whatsapp" />
                    ))}
                </div>
            )}

             {/* CCP CARDS */}
             {activeWarningTab === 'ccp' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCCP.map((ccp, idx) => (
                        <div key={idx} className="bg-[#fff9c4] border-2 border-[#fbc02d] p-5 rounded-xl shadow-md relative overflow-hidden group hover:shadow-xl transition-all transform hover:-translate-y-1">
                            <div className="absolute top-0 right-0 bg-[#fbc02d] text-[#5f4306] text-[10px] font-bold px-2 py-1 rounded-bl-lg">Algérie Poste</div>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="bg-[#fbc02d]/20 p-3 rounded-full text-[#f57f17]">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-yellow-800 font-bold uppercase tracking-wider mb-1">Compte CCP</div>
                                    <div className="text-xl font-mono font-black text-slate-800 tracking-widest">{ccp}</div>
                                </div>
                            </div>
                             {/* Stamp */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-red-600 text-red-600 font-black text-4xl -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 bg-white/80 px-4 py-1 backdrop-blur-sm whitespace-nowrap">
                                FRAUDE !
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* PHONES */}
            {activeWarningTab === 'phones' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredPhones.map((phone, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-red-200 hover:shadow-md transition-all">
                             <div className="flex items-center gap-3">
                                <div className="bg-slate-100 p-2.5 rounded-full text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                                    <PhoneOff size={18} />
                                </div>
                                <span className="font-mono font-bold text-lg text-slate-700">{phone}</span>
                             </div>
                             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Empty State */}
            {((activeWarningTab === 'social' && Object.values(filteredSocial).every(arr => arr.length === 0)) ||
              (activeWarningTab === 'ccp' && filteredCCP.length === 0) ||
              (activeWarningTab === 'phones' && filteredPhones.length === 0)) && (
                <div className="text-center py-20 opacity-50">
                    <Search size={48} className="mx-auto mb-4 text-slate-300" />
                    <p className="text-xl font-bold text-slate-400">لا توجد نتائج مطابقة</p>
                </div>
            )}
        </div>
      </div>

      {/* --- SCAM CATEGORIES --- */}
      <div className="relative z-10">
        <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3 border-r-8 border-indigo-500 pr-4">
            <span className="text-indigo-600">كيف</span> يخدعونك؟
        </h2>

        {/* 3D Category Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 perspective-1000">
            {[
                { id: 'financial', label: 'بريد موب', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { id: 'shopping', label: 'واد كنيس', icon: ShoppingBag, color: 'text-orange-600', bg: 'bg-orange-50' },
                { id: 'visa', label: 'الفيزا', icon: Plane, color: 'text-sky-600', bg: 'bg-sky-50' },
                { id: 'sms', label: 'الرسائل', icon: MessageSquare, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            ].map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id as any)}
                        className={`relative h-28 rounded-2xl border-2 transition-all duration-300 transform-style-3d group cursor-pointer overflow-hidden ${
                            isActive 
                            ? 'bg-white border-slate-800 shadow-xl scale-105 z-10' 
                            : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm hover:-translate-y-1'
                        }`}
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                            <div className={`p-3 rounded-full mb-2 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'bg-slate-800 text-white' : `${cat.bg} ${cat.color}`}`}>
                                <Icon size={24} />
                            </div>
                            <span className={`font-bold ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>{cat.label}</span>
                        </div>
                        {isActive && <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>}
                    </button>
                );
            })}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden min-h-[400px] relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <AlertTriangle size={200} />
            </div>

            {/* FINANCIAL SCAMS */}
            {activeCategory === 'financial' && (
                <div className="p-8 md:p-12 animate-slide-up relative z-10">
                    <h3 className="text-3xl font-black text-slate-800 mb-8">احتيالات بريد موب والبطاقات</h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <ScamDetailCard 
                            title="سرقة كود OTP"
                            desc="يتصل بك شخص يدعي أنه من 'Algérie Poste' ويطلب الكود لفك تجميد حسابك."
                            truth="الكود هو مفتاح تفعيل تطبيق BaridiMob في هاتف المحتال لسرقة رصيدك."
                            color="red"
                            isOpen={activeScam === 1}
                            onToggle={() => toggleScam(1)}
                        />
                         <ScamDetailCard 
                            title="إيصال CCP المزور"
                            desc="المشتري يرسل لك صورة إيصال الدفع ويستعجلك لإرسال السلعة."
                            truth="الصورة معدلة بالفوتوشوب. لا ترسل شيئاً حتى ترى الرصيد في حسابك."
                            color="orange"
                            isOpen={activeScam === 2}
                            onToggle={() => toggleScam(2)}
                        />
                    </div>
                </div>
            )}

            {/* SHOPPING */}
            {activeCategory === 'shopping' && (
                <div className="p-8 md:p-12 animate-slide-up relative z-10">
                    <h3 className="text-3xl font-black text-slate-800 mb-8">فخاخ التسوق الإلكتروني</h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
                             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-4">
                                <ShoppingBag size={24} />
                             </div>
                             <h4 className="font-bold text-xl mb-2 text-slate-800">1. فخ "العربون" (L'avance)</h4>
                             <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                "خويا عندي بزاف مشترين، ابعثلي 5000 دج فليكسي نحكمهالك." <br/>
                                <strong className="text-orange-700">النتيجة:</strong> يغلق الهاتف ويختفي.
                             </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-600 mb-4">
                                <Camera size={24} />
                             </div>
                             <h4 className="font-bold text-xl mb-2 text-slate-800">2. السلع الوهمية</h4>
                             <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                صفحات انستغرام تعرض ملابس ماركات بأسعار خيالية. تطلب الدفع المسبق عبر CCP ثم تقوم بحظرك.
                             </p>
                        </div>
                    </div>
                </div>
            )}

             {/* VISA */}
             {activeCategory === 'visa' && (
                <div className="p-8 md:p-12 animate-slide-up relative z-10">
                     <h3 className="text-3xl font-black text-slate-800 mb-8">أوهام الهجرة والفيزا</h3>
                     <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-2xl border border-sky-100">
                            <div className="bg-sky-200 p-2 rounded-lg text-sky-700 mt-1"><Plane size={20} /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800">مواعيد VFS / TLS الوهمية</h4>
                                <p className="text-sm text-slate-600">بيع مواعيد مزورة (PDF معدل) بمبالغ ضخمة. يتم اكتشاف التزوير عند بوابة المركز.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-sky-50 rounded-2xl border border-sky-100">
                            <div className="bg-sky-200 p-2 rounded-lg text-sky-700 mt-1"><UserX size={20} /></div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-800">عقود العمل الكاذبة</h4>
                                <p className="text-sm text-slate-600">شركات وهمية تطلب رسوم "دراسة ملف" باليورو. الشركات الحقيقية لا تطلب مالاً للتوظيف.</p>
                            </div>
                        </div>
                     </div>
                </div>
            )}

            {/* SMS */}
            {activeCategory === 'sms' && (
                <div className="p-8 md:p-12 animate-slide-up relative z-10">
                    <h3 className="text-3xl font-black text-slate-800 mb-8">رسائل التصيد (Phishing)</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                         {/* Mockup Phone */}
                        <div className="w-64 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800 transform rotate-[-2deg]">
                            <div className="bg-slate-100 rounded-[2rem] h-80 overflow-hidden relative flex flex-col">
                                <div className="bg-emerald-600 text-white p-4 text-center text-xs font-bold shadow-sm z-10">
                                    Messages
                                </div>
                                <div className="p-4 space-y-4 flex-1 overflow-hidden relative">
                                    <div className="text-center text-[10px] text-slate-400">Today 9:41 AM</div>
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 text-xs text-slate-800 relative z-10">
                                        <div className="font-bold text-emerald-700 mb-1 flex items-center gap-1"><Siren size={10}/> Algérie Poste</div>
                                        عزيزي الزبون، طردك معلق. ادفع 250 دج: <span className="text-blue-500 underline">http://poste-dz-pay.com</span>
                                    </div>
                                    <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center backdrop-blur-[1px]">
                                         <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                                            FAKE LINK!
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-xl mb-4 text-slate-800">علامات الخطر 🚩</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                                    <span className="bg-red-100 text-red-600 p-1 rounded font-bold text-xs">1</span>
                                    <span className="text-sm font-medium text-slate-700">الرابط لا ينتهي بـ <strong className="text-emerald-600">.dz</strong></span>
                                </li>
                                <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                                    <span className="bg-red-100 text-red-600 p-1 rounded font-bold text-xs">2</span>
                                    <span className="text-sm font-medium text-slate-700">طلب إدخال بيانات البطاقة فوراً.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

        </div>
      </div>

    </div>
  );
};

// --- SUB COMPONENTS ---

const SocialProfileCard = ({ name, platform }: { name: string, platform: string }) => {
    const styles = {
        Instagram: { bg: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', text: 'Instagram' },
        TikTok: { bg: 'bg-black', text: 'TikTok' },
        Facebook: { bg: 'bg-[#1877F2]', text: 'Facebook' },
        Whatsapp: { bg: 'bg-[#25D366]', text: 'Whatsapp' },
    }[platform] || { bg: 'bg-slate-500', text: 'Platform' };

    return (
        <div className="relative h-48 rounded-2xl bg-white shadow-lg border border-slate-100 overflow-hidden group transform-style-3d hover:rotate-x-2 hover:translate-y-[-5px] transition-all duration-300">
             {/* Header */}
             <div className="h-16 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
                <div className={`text-xs font-bold text-white px-2 py-1 rounded-md ${styles.bg}`}>
                    {styles.text}
                </div>
                <MoreHorizontal size={16} className="text-slate-400" />
             </div>

             {/* Profile Body */}
             <div className="p-4 flex flex-col items-center -mt-8">
                <div className="w-16 h-16 rounded-full bg-slate-200 border-4 border-white shadow-md flex items-center justify-center text-xl font-bold text-slate-500 relative z-10">
                    {name[0].toUpperCase()}
                    <div className="absolute bottom-0 right-0 bg-red-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                        <UserX size={10} className="text-white" />
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <h4 className="font-bold text-slate-800 text-sm">{name}</h4>
                    <p className="text-xs text-slate-400">@{name.toLowerCase().replace(/\s/g, '_')}</p>
                </div>
             </div>

             {/* Scam Overlay */}
             <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="bg-red-600 text-white text-xl font-black px-6 py-2 border-4 border-white shadow-2xl transform -rotate-12">
                    SCAM / احتيال
                </div>
             </div>
        </div>
    );
};

const ScamDetailCard = ({ title, desc, truth, color, isOpen, onToggle }: any) => (
    <div 
        className={`border-2 rounded-2xl transition-all cursor-pointer overflow-hidden ${isOpen ? 'border-red-200 bg-red-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
        onClick={onToggle}
    >
        <div className="p-5 flex justify-between items-center">
            <div>
                <h4 className={`font-bold text-lg ${isOpen ? 'text-red-700' : 'text-slate-800'}`}>{title}</h4>
                {!isOpen && <p className="text-sm text-slate-500 mt-1 line-clamp-1">{desc}</p>}
            </div>
            <div className={`p-2 rounded-full ${isOpen ? 'bg-red-200 text-red-700' : 'bg-slate-100 text-slate-400'}`}>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
        </div>
        
        {isOpen && (
            <div className="px-5 pb-5 animate-fade-in">
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">{desc}</p>
                <div className="bg-white p-3 rounded-xl border border-red-200 shadow-sm flex gap-3">
                    <div className="bg-red-100 p-2 rounded-lg text-red-600 h-fit"><ShieldAlert size={18} /></div>
                    <div>
                        <span className="text-xs font-bold text-red-500 uppercase">الحقيقة</span>
                        <p className="text-sm font-bold text-slate-800">{truth}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default DZScams;