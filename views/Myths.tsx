import React, { useState } from 'react';
import { HelpCircle, AlertCircle, CheckCircle2, RotateCw } from 'lucide-react';
import { MythFact } from '../types';

const MYTHS: MythFact[] = [
  {
    id: 1,
    myth: "أنا لستُ مهماً بما يكفي ليتم اختراقي!",
    fact: "80% من الهجمات هي هجمات آلية (Bots) تمسح الإنترنت بحثاً عن أي جهاز به ثغرة لاستخدامه في هجمات أخرى أو تعدين العملات. أنت هدف لمجرد اتصالك بالإنترنت."
  },
  {
    id: 2,
    myth: "التصفح الخفي (Incognito) يحميني تماماً.",
    fact: "الوضع الخفي يمنع المتصفح فقط من حفظ السجل (History) على جهازك. لكن مزود الإنترنت، والشركة، والمواقع التي تزورها لا يزالون يعرفون كل شيء عنك."
  },
  {
    id: 3,
    myth: "أجهزة Apple (ماك وآيفون) لا تصاب بالفيروسات.",
    fact: "أنظمة أبل أكثر تقييداً، لكنها ليست محصنة. توجد برمجيات خبيثة متخصصة تستهدف macOS، والاعتماد الكلي على سمعة الشركة خطأ فادح."
  },
  {
    id: 4,
    myth: "كلمة المرور القوية تعني أنني آمن 100%.",
    fact: "إذا تم اختراق قاعدة بيانات الموقع الذي تستخدمه، فلا تهم قوة كلمتك. لهذا السبب تفعيل المصادقة الثنائية (2FA) ضروري لحماية حسابك حتى لو سُرقت كلمة السر."
  },
  {
    id: 5,
    myth: "الواي فاي العام آمن طالما له كلمة سر.",
    fact: "كلمة السر في المقهى تحمي الشبكة من الخارج، لكنها لا تحميك ممن يجلس بجانبك ومتصل بنفس الشبكة. استخدم دائماً VPN في الأماكن العامة."
  },
  {
    id: 6,
    myth: "رابط HTTPS (القفل الأخضر) يعني الموقع آمن.",
    fact: "HTTPS يعني أن الاتصال مشفر، لكنه لا يعني أن الموقع شرعي. المحتالون يستخدمون HTTPS في مواقع التصيد لتبدو موثوقة."
  }
];

const Myths: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in font-[Cairo]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-800 mb-4">خرافات <span className="text-red-500">vs</span> حقائق</h2>
        <p className="text-slate-600 text-lg">معلومات خاطئة قد تكلفك الكثير.. اضغط على البطاقة لتكتشف الحقيقة</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MYTHS.map((item) => {
          const isFlipped = flippedCards.includes(item.id);
          return (
            <div 
              key={item.id}
              onClick={() => toggleCard(item.id)}
              className="group h-[350px] perspective-1000 cursor-pointer"
            >
              <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : 'hover:-translate-y-2'}`}>
                
                {/* Front Side (Myth) */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-xl border-b-8 border-red-500 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <AlertCircle size={40} />
                  </div>
                  
                  <h3 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-3">خرافة شائعة</h3>
                  <p className="text-xl font-black text-slate-800 leading-snug">"{item.myth}"</p>
                  
                  <div className="mt-auto flex items-center gap-2 text-slate-400 text-sm font-bold bg-slate-50 px-4 py-2 rounded-full">
                    <RotateCw size={14} /> اضغط للقلب
                  </div>
                </div>

                {/* Back Side (Fact) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl shadow-2xl border-b-8 border-emerald-500 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6 animate-pulse">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-emerald-400 mb-4">الحقيقة</h3>
                  <p className="text-base leading-loose text-slate-300 font-medium">
                    {item.fact}
                  </p>
                  
                  <div className="mt-auto text-xs text-slate-500">
                    حصنك الرقمي &copy;
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myths;