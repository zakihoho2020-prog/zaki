import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { Disc, CloudLightning, Lock, Users, Bug, WifiOff, Eye, FileWarning, ShieldCheck, ChevronDown, ChevronUp, Database, Globe, UserX, MapPin, Smartphone, AlertTriangle, MessageCircle } from 'lucide-react';

// --- DATA: TIMELINE ---
const EVENTS: TimelineEvent[] = [
  {
    year: "1988",
    title: "دودة موريس (Morris Worm)",
    description: "أول فيروس كمبيوتر ينتشر عبر الإنترنت، أصاب 10% من الأجهزة المتصلة بالشبكة آنذاك.",
    lesson: "الأنظمة المتصلة تحتاج إلى حماية فورية، والعزل المادي لم يعد ممكناً.",
    solution: "تحديث الأنظمة (Patching) وجدران الحماية (Firewalls).",
    icon: "disc"
  },
  {
    year: "2000",
    title: "فيروس ILOVEYOU",
    description: "رسالة عاطفية خادعة أصابت 50 مليون جهاز وتسببت في خسائر بمليارات الدولارات.",
    lesson: "الفضول البشري هو الثغرة الأولى التي يستغلها المخترقون.",
    solution: "التوعية الأمنية وعدم فتح المرفقات المجهولة.",
    icon: "users"
  },
  {
    year: "2010",
    title: "ستوكسنت (Stuxnet)",
    description: "سلاح سيبراني استهدف المنشآت النووية، أول فيروس يسبب دماراً فيزيائياً للأجهزة.",
    lesson: "الهجمات السيبرانية يمكن أن تدمر البنية التحتية الواقعية.",
    solution: "فصل الشبكات الحساسة (Air-gapping) والمراقبة السلوكية.",
    icon: "cloud"
  },
  {
    year: "2017",
    title: "واناكراي (WannaCry)",
    description: "هجوم فدية عالمي شفر ملفات المستشفيات والشركات وطلب الدفع بالبيتكوين.",
    lesson: "تحديث الأنظمة القديمة (مثل Windows XP) ليس رفاهية بل ضرورة.",
    solution: "النسخ الاحتياطي المعزول وتحديث الأنظمة فوراً.",
    icon: "lock"
  }
];

// --- DATA: ALGERIAN TIMELINE ---
const DZ_EVENTS = [
  {
    year: "2015-2017",
    title: "موجة 'الشيخ الروحاني' والكنوز",
    description: "انتشار مكالمات ورسائل من دول غرب إفريقيا (مثل بينين والسنغال) تدعي وجود سحر أو كنز في منزل الضحية.",
    impact: "استنزاف أموال الضحايا عبر تحويلات ويسترن يونيون وشحن أرصدة الهاتف (Flexy) بحجة 'شراء البخور لفك السحر'.",
    prevention: "تجاهل وحظر أي اتصال دولي مجهول المصدر، خاصة الذي يبدأ بـ +229 أو +223.",
    scenario: "رسالة واتساب (+229): 'سلام يا ولدي، أنا الشيخ أبو يحيى. شفت رؤية بلي عندك كنز مدفون في الدار وجنية تحرسه. اتصل بي نخرجوه ونقسموه.'"
  },
  {
    year: "2018-2019",
    title: "احتيال 'مدير الشركة' (انتحال الصفة)",
    description: "اتصالات من أرقام محلية (0770/0661) يدعي أصحابها أنهم مدراء في شركات الاتصال (جازي/موبيليس).",
    impact: "سرقة آلاف الدنانير عبر إجبار الضحية على إرسال أكواد تعبئة كرسوم لاستلام 'جائزة وهمية' (سيارة أو شيك).",
    prevention: "الشركات الرسمية لا تطلب أبداً إرسال بطاقات تعبئة لاستلام الهدايا.",
    scenario: "اتصال هاتفي: 'ألو مبروك! معاك المدير العام. نمرتك خرجت في القرعة وربحت سيارة سامبول. باش نبعثلك الدوسي لازم تبعثلي 2 ملاين فليكسي حق الطابع.'"
  },
  {
    year: "2020 (Covid)",
    title: "هجمات التصيد باسم 'بريد الجزائر'",
    description: "مع تزايد التجارة الإلكترونية والحجر الصحي، انفجرت ظاهرة الصفحات المزورة التي تشبه BaridiMob.",
    impact: "اختراق حسابات CCP وسرقة الأرصدة عبر إيهام الضحية بتحديث البيانات أو دفع رسوم طرد.",
    prevention: "التحقق دائماً من العنوان (.dz) وعدم مشاركة كود OTP الذي يصل في رسالة نصية.",
    scenario: "SMS: 'Algérie Poste: Votre compte CCP est suspendu. Veuillez confirmer vos informations via ce lien: http://algerie-poste-update.com'"
  },
  {
    year: "2022",
    title: "هجمات الفدية على المؤسسات (Ransomware)",
    description: "موجة هجمات استهدفت شركات اقتصادية جزائرية عبر ثغرات في أنظمة Windows غير المحدثة ورسائل البريد الملغمة.",
    impact: "تشفير قواعد بيانات الشركات وتوقف خدماتها الحيوية لأيام، مع ابتزاز المسؤولين لدفع فدية بالبيتكوين.",
    prevention: "النسخ الاحتياطي المعزول (Offline Backup) هو خط الدفاع الأخير والوحيد الفعال ضد التشفير.",
    scenario: "شاشة خادم الشركة تتحول للأحمر: 'تم تشفير ملفاتك! ادفع 2 BTC خلال 48 ساعة أو سيتم حذف كل شيء.'"
  },
  {
    year: "2023",
    title: "روابط 'منحة البطالة' المزيفة",
    description: "استغلال الاهتمام المجتمعي بمنحة البطالة لنشر روابط تزعم التسجيل أو زيادة قيمة المنحة.",
    impact: "جمع بيانات شخصية وهويات ملايين الشباب لاستخدامها في عمليات انتحال شخصية وفتح حسابات بنكية وهمية.",
    prevention: "التعامل حصرياً مع منصة 'منحة' الرسمية (minha.anem.dz) وتجاهل الروابط العشوائية في فيسبوك.",
    scenario: "تعليق فيسبوك: 'عاجل! الرئيس يأمر برفع المنحة إلى 20000 دج بأثر رجعي. سجل الآن لاستلام الزيادة: minha-new-dz.com'"
  },
  {
    year: "2023-2024",
    title: "خدعة 'التوظيف وتداول العملات' (+44)",
    description: "عروض عمل وهمية عبر واتساب وتيليجرام من أرقام بريطانية أو أمريكية تعرض أرباحاً سهلة مقابل مهام بسيطة.",
    impact: "تورط شباب في مخططات هرمية (Ponzi Schemes) وخسارة أموال الاشتراك بعد إغلاق المنصات الوهمية.",
    prevention: "القاعدة الذهبية: لا توجد وظيفة حقيقية تطلب منك الدفع لتبدأ العمل، ولا يوجد ربح سريع بدون جهد.",
    scenario: "واتساب (+44): 'مرحباً، هل تبحث عن دخل إضافي؟ نحن نوظف! ضع لايكات على فيديوهات يوتيوب واربح 5000 دج يومياً.'"
  }
];

// --- DATA: ATTACK METHODS ---
interface AttackMethod {
  id: string;
  nameAR: string;
  nameEN: string;
  icon: any;
  category: 'malware' | 'network' | 'social';
  description: string;
  mechanism: string; // How it works
  prevention: string; // How to prevent
}

const ATTACKS: AttackMethod[] = [
  {
    id: 'ransomware',
    nameAR: 'برامج الفدية',
    nameEN: 'Ransomware',
    icon: FileWarning,
    category: 'malware',
    description: 'برمجية خبيثة تقوم بتشفير ملفاتك الخاصة وصورك ومستنداتك، ثم يطلب المخترق مبلغاً مالياً (فدية) لفك التشفير.',
    mechanism: 'يدخل عبر مرفق بريد إلكتروني أو برنامج مقرصن، وبمجرد تشغيله ينتشر في الجهاز ويقفل الملفات بمفتاح تشفير لا يملكه إلا المخترق.',
    prevention: 'الحل الوحيد المضمون هو النسخ الاحتياطي (Backup) في قرص خارجي غير متصل بالكمبيوتر. لا تدفع الفدية أبداً!'
  },
  {
    id: 'ddos',
    nameAR: 'هجمات حجب الخدمة',
    nameEN: 'DDoS Attack',
    icon: Globe,
    category: 'network',
    description: 'محاولة لجعل موقع ويب أو خدمة غير متاحة عن طريق إغراقها بسيل هائل من الزيارات الوهمية.',
    mechanism: 'يستخدم المخترق آلاف الأجهزة المخترقة (Botnet) لإرسال طلبات للموقع في نفس الثانية، مما يؤدي لسقوط السيرفر.',
    prevention: 'بالنسبة للمستخدم العادي: لا تقلق. بالنسبة للشركات: استخدام خدمات توزيع المحتوى (CDN) مثل Cloudflare لامتصاص الهجوم.'
  },
  {
    id: 'mitm',
    nameAR: 'هجوم الوسيط',
    nameEN: 'Man-in-the-Middle',
    icon: WifiOff,
    category: 'network',
    description: 'المخترق يحشر نفسه بينك وبين الموقع الذي تتصفحه، ويتجسس على كل البيانات المرسلة والمستقبلة.',
    mechanism: 'يحدث غالباً عند استخدام "واي فاي" عام ومجاني (مقاهي، مطارات). المخترق ينشئ شبكة وهمية ويسرق بيانات من يتصل بها.',
    prevention: 'استخدم دائماً VPN عند الاتصال بشبكة عامة، وتأكد أن الموقع يستخدم HTTPS (رمز القفل).'
  },
  {
    id: 'phishing',
    nameAR: 'التصيد الاحتيالي',
    nameEN: 'Phishing',
    icon: Bug,
    category: 'social',
    description: 'انتحال صفة شركة موثوقة (مثل البنك، فيسبوك) لخداع الضحية وسرقة بياناته.',
    mechanism: 'يتم عبر رابط مزيف يشبه الرابط الأصلي. بمجرد إدخال كلمة المرور في الصفحة المزيفة، تصل للمخترق.',
    prevention: 'تحقق من عنوان الرابط (URL) دائماً. لا تضغط على الروابط في الرسائل المجهولة.'
  },
  {
    id: 'bruteforce',
    nameAR: 'هجوم التخمين',
    nameEN: 'Brute Force',
    icon: Database,
    category: 'malware',
    description: 'محاولة تخمين كلمة المرور بتجربة ملايين الاحتمالات في الثانية.',
    mechanism: 'يستخدم المخترق برنامجاً يجرب "123456"، "password"، وتواريخ الميلاد والقواميس حتى يجد الكلمة الصحيحة.',
    prevention: 'استخدم كلمات مرور طويلة ومعقدة، وفعّل المصادقة الثنائية (2FA) لتوقف هذا الهجوم تماماً.'
  },
  {
    id: 'keylogger',
    nameAR: 'مسجل المفاتيح',
    nameEN: 'Keylogger',
    icon: Eye,
    category: 'malware',
    description: 'برنامج تجسس يسجل كل ضغطة زر تقوم بها على لوحة المفاتيح.',
    mechanism: 'يختبئ داخل برامج "الكراك" والألعاب المقرصنة. يرسل كل ما تكتبه (كلمات سر، رسائل) للمخترق.',
    prevention: 'استخدم برنامج مكافحة فيروسات موثوق، وتجنب تحميل البرامج المقرصنة (Cracked Software).'
  }
];

const Timeline: React.FC = () => {
  const [expandedAttack, setExpandedAttack] = useState<string | null>(null);

  const toggleAttack = (id: string) => {
    setExpandedAttack(expandedAttack === id ? null : id);
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'disc': return <Disc size={24} />;
      case 'cloud': return <CloudLightning size={24} />;
      case 'lock': return <Lock size={24} />;
      default: return <Users size={24} />;
    }
  };

  return (
    <div className="animate-fade-in pb-12">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4 font-[Cairo]">أرشيف التهديدات</h2>
            <p className="text-slate-400 text-lg">
                من دودة موريس إلى الذكاء الاصطناعي.. رحلة في عالم الجريمة الرقمية وكيفية الوقاية منها.
            </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        
        {/* SECTION 1: GLOBAL TIMELINE */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 border-r-4 border-sky-500 pr-3">
                ⏳ التسلسل الزمني للأحداث الكبرى (عالمياً)
            </h3>
            
            <div className="relative border-r-4 border-slate-200 mr-4 md:mr-0 space-y-12">
                {EVENTS.map((event, index) => (
                <div key={index} className="relative md:flex items-center group">
                    <div className="absolute -right-[1.35rem] bg-white border-4 border-sky-500 rounded-full w-10 h-10 flex items-center justify-center text-sky-600 z-10 md:right-1/2 md:translate-x-1/2 md:border-4 shadow-sm">
                        {getIcon(event.icon)}
                    </div>
                    <div className="hidden md:block w-1/2 pl-12 text-left">
                        <span className="text-5xl font-black text-slate-200 group-hover:text-sky-200 transition-colors font-mono">{event.year}</span>
                    </div>
                    <div className="mr-8 md:mr-0 md:w-1/2 md:pr-12">
                        <div className="md:hidden text-4xl font-black text-slate-300 mb-2 font-mono">{event.year}</div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all group-hover:border-sky-200">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                            <div className="text-xs bg-slate-100 p-2 rounded text-slate-600">
                                <span className="font-bold">💡 الدرس:</span> {event.lesson}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* SECTION 2: ALGERIAN TIMELINE (NEW) */}
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-r-4 border-emerald-500 pr-3">
                <h3 className="text-2xl font-bold text-slate-800">
                    🇩🇿 محطات في الأمن السيبراني الجزائري
                </h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">خاص</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {DZ_EVENTS.map((event, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                        <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                            <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded text-sm">{event.year}</span>
                            <MapPin size={16} className="text-slate-400" />
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold text-lg text-slate-800 mb-3">{event.title}</h4>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                            
                            {/* Scenario Box */}
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                                    <MessageCircle size={14} /> سيناريو حقيقي:
                                </div>
                                <p className="text-xs font-mono text-slate-700 bg-white p-2 rounded border border-slate-100 italic">
                                    "{event.scenario}"
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" />
                                    <p className="text-xs text-slate-600"><span className="font-bold">الضرر:</span> {event.impact}</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <ShieldCheck size={14} className="text-emerald-500 mt-1 flex-shrink-0" />
                                    <p className="text-xs text-slate-600"><span className="font-bold">الوقاية:</span> {event.prevention}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 3: ATTACK ENCYCLOPEDIA */}
        <div id="encyclopedia" className="bg-slate-50 rounded-3xl p-6 md:p-12 border border-slate-200">
            <div className="text-center mb-10">
                <div className="inline-block p-3 bg-red-100 rounded-full text-red-600 mb-4">
                    <UserX size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-2">موسوعة طرق الاختراق</h3>
                <p className="text-slate-600">دليلك الشامل لفهم كيف يفكر المخترقون (Attack Vectors) وكيف تصدهم.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {ATTACKS.map((attack) => {
                    const Icon = attack.icon;
                    const isOpen = expandedAttack === attack.id;
                    
                    return (
                        <div 
                            key={attack.id} 
                            className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${isOpen ? 'ring-2 ring-sky-500 shadow-lg' : 'hover:border-slate-300'}`}
                        >
                            <div 
                                className="p-6 cursor-pointer flex justify-between items-center"
                                onClick={() => toggleAttack(attack.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg ${attack.category === 'network' ? 'bg-blue-100 text-blue-600' : attack.category === 'social' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'}`}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-800">{attack.nameAR}</h4>
                                        <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{attack.nameEN}</span>
                                    </div>
                                </div>
                                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="text-slate-400" />
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {isOpen && (
                                <div className="px-6 pb-6 animate-slide-up">
                                    <p className="text-slate-600 mb-4 text-sm leading-relaxed border-b border-slate-100 pb-4">
                                        {attack.description}
                                    </p>
                                    
                                    <div className="grid gap-4">
                                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                            <h5 className="font-bold text-slate-700 text-sm mb-1 flex items-center gap-2">
                                                <Bug size={16} className="text-red-500" /> كيف يحدث الهجوم؟
                                            </h5>
                                            <p className="text-xs text-slate-600 leading-relaxed">{attack.mechanism}</p>
                                        </div>

                                        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                            <h5 className="font-bold text-emerald-800 text-sm mb-1 flex items-center gap-2">
                                                <ShieldCheck size={16} /> الدرع المضاد (الوقاية)
                                            </h5>
                                            <p className="text-xs text-emerald-700 leading-relaxed">{attack.prevention}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;