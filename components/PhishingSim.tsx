import React, { useState } from 'react';
import { Mail, AlertTriangle, CheckCircle, XCircle, User, MoreVertical, Reply, Star, Paperclip, ChevronLeft, ChevronRight, ShieldAlert } from 'lucide-react';
import { PhishingEmail } from '../types';

const EMAILS: PhishingEmail[] = [
  {
    id: 1,
    sender: "security@paypa1-support.com",
    subject: "⚠️ عاجل: تم تعليق حسابك مؤقتاً",
    body: "عزيزي العميل،\n\nلاحظنا نشاطاً مريباً في حسابك وتجميده احترازياً. يرجى الضغط على الزر أدناه لتحديث بياناتك فوراً لتجنب الإغلاق النهائي.\n\n[تحديث الحساب الآن]\n\nفريق الدعم الفني.",
    isPhishing: true,
    explanation: "لاحظ عنوان المرسل (paypa1 بدلاً من paypal). الشركات المالية لا تطلب تحديث البيانات الحساسة عبر روابط مباشرة في البريد."
  },
  {
    id: 2,
    sender: "rh@entreprise-dz.com",
    subject: "تحديث سياسة العطل السنوية 2024",
    body: "الزملاء الأعزاء،\n\nيرجى الاطلاع على الوثيقة المرفقة بخصوص التعديلات الجديدة على نظام العطل السنوية، والمتاحة أيضاً على البوابة الداخلية للموظفين.\n\nتحياتي،\nمدير الموارد البشرية.",
    isPhishing: false,
    explanation: "هذه رسالة سليمة. النطاق صحيح (نطاق الشركة)، اللغة مهنية، ولا يوجد طلب عاجل للمال أو كلمات المرور."
  },
  {
    id: 3,
    sender: "meta-security@faceboook-verify.net",
    subject: "شخص ما حاول الدخول لحسابك في وهران",
    body: "مرحباً،\n\nتم رصد محاولة دخول من جهاز غير معروف. إذا لم تكن أنت، يرجى تغيير كلمة المرور فوراً عبر الرابط التالي:\nwww.facebook-secure-login.net\n\nشكراً،\nفريق الأمن.",
    isPhishing: true,
    explanation: "انتبه للنطاق (faceboook بزيادة حرف o) والرابط المشبوه. هذا تكتيك (Typosquatting) لخداع العين."
  },
  {
    id: 4,
    sender: "ceo.urgent.task@gmail.com",
    subject: "أمر تحويل بنكي سري وعاجل",
    body: "أنا في اجتماع مغلق حالياً ولا أستطيع التحدث.\nأحتاج منك تحويل مبلغ 50 مليون سنتيم للمورد الجديد بشكل عاجل جداً. سأرسل لك الفاتورة لاحقاً.\n\nنفذ الأمر الآن وأخبرني عند الانتهاء.\nالمدير العام.",
    isPhishing: true,
    explanation: "احتيال المدير التنفيذي (CEO Fraud). المدير لن يراسلك من بريد Gmail شخصي لأمور مالية، ولن يستخدم أسلوب الضغط والسرية المفرطة."
  },
  {
    id: 5,
    sender: "promo@mega-deals.xyz",
    subject: "🎉 مبروك! ربحت iPhone 15 Pro Max",
    body: "مبروك!\nتم اختيار بريدك عشوائياً من بين مليون مستخدم.\n\nاضغط هنا وادفع فقط رسوم الشحن (800 دج) لاستلام جائزتك غداً.\nالعرض ينتهي خلال 10 دقائق!",
    isPhishing: true,
    explanation: "إذا كان العرض يبدو جيداً لدرجة لا تصدق، فهو كذب. الاستعجال (10 دقائق) وطلب مبلغ بسيط (رسوم شحن) هي علامات النصب الكلاسيكية."
  }
];

const PhishingSim: React.FC = () => {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'real' | 'fake' | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentEmail = EMAILS[currentEmailIndex];

  const handleAnswer = (answer: 'real' | 'fake') => {
    setSelectedAnswer(answer);
    const isCorrect = (answer === 'fake' && currentEmail.isPhishing) || (answer === 'real' && !currentEmail.isPhishing);
    if (isCorrect) setScore(score + 1);
    setShowResult(true);
  };

  const nextEmail = () => {
    if (currentEmailIndex < EMAILS.length - 1) {
      setCurrentEmailIndex(currentEmailIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      alert(`انتهى الاختبار! نتيجتك: ${score} من ${EMAILS.length}`);
      setCurrentEmailIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col md:flex-row h-auto md:min-h-[600px]">
      
      {/* Sidebar (Fake Email Client) */}
      <div className="w-full md:w-64 bg-slate-50 border-l border-slate-200 p-4 hidden md:flex flex-col gap-4">
        <button className="bg-sky-600 text-white p-3 rounded-xl font-bold flex items-center gap-2 shadow-sm hover:bg-sky-700 transition-colors">
            <Mail size={20} /> رسالة جديدة
        </button>
        <div className="space-y-1">
            <div className="flex items-center gap-3 p-2 bg-sky-100 text-sky-800 rounded-lg font-bold cursor-pointer">
                <Mail size={16} /> الوارد ({EMAILS.length - currentEmailIndex})
            </div>
            <div className="flex items-center gap-3 p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                <Star size={16} /> المميزة
            </div>
            <div className="flex items-center gap-3 p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                <Paperclip size={16} /> المسودات
            </div>
        </div>
        <div className="mt-auto bg-slate-200 p-3 rounded-lg text-xs text-slate-600 text-center">
            محاكي البريد الآمن v2.0
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Email Header Actions */}
        <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white">
            <div className="flex gap-4 text-slate-400">
                <div className="w-5 h-5 rounded bg-slate-200"></div>
                <ChevronRight size={20} />
                <ChevronLeft size={20} />
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
                <span>رسالة {currentEmailIndex + 1} من {EMAILS.length}</span>
            </div>
            <div className="flex gap-4 text-slate-400">
                <Reply size={20} />
                <MoreVertical size={20} />
            </div>
        </div>

        {/* Email Body */}
        <div className="flex-1 p-6 md:p-10 bg-white overflow-y-auto">
            {/* Subject */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-relaxed">
                {currentEmail.subject}
            </h2>

            {/* Sender Info */}
            <div className="flex items-start gap-4 mb-8">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm ${currentEmail.isPhishing ? 'bg-gradient-to-br from-orange-400 to-red-500' : 'bg-gradient-to-br from-blue-400 to-indigo-500'}`}>
                    {currentEmail.sender[0].toUpperCase()}
                </div>
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-bold text-slate-800 text-lg">المرسل:</span>
                        <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded text-slate-600 border border-slate-200">{currentEmail.sender}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">إلى: أنا (me@example.com) • اليوم، 10:30 صباحاً</div>
                </div>
            </div>

            {/* Content */}
            <div className="text-slate-700 leading-loose text-lg whitespace-pre-wrap border-l-4 border-slate-100 pl-4 py-2">
                {currentEmail.body}
            </div>

            {/* Link Preview (Fake) */}
            {currentEmail.isPhishing && (
                 <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-blue-100 transition-colors group">
                    <div className="bg-blue-200 p-2 rounded text-blue-600">
                        <Paperclip size={20} />
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-bold text-blue-800">رابط مرفق / زر</div>
                        <div className="text-xs text-blue-600 font-mono opacity-60 group-hover:opacity-100 transition-opacity">http://short-link.xyz/verify...</div>
                    </div>
                 </div>
            )}
        </div>

        {/* Action Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50">
            {!showResult ? (
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <p className="text-slate-600 font-bold mb-2 md:mb-0">هل هذه الرسالة آمنة؟</p>
                    <div className="flex w-full md:w-auto gap-4">
                        <button
                        onClick={() => handleAnswer('fake')}
                        className="flex-1 md:flex-none px-8 py-3 bg-white border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-400 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                        <ShieldAlert size={20} />
                        احتيال (Phishing)
                        </button>
                        <button
                        onClick={() => handleAnswer('real')}
                        className="flex-1 md:flex-none px-8 py-3 bg-white border-2 border-green-200 text-green-600 hover:bg-green-50 hover:border-green-400 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                        <CheckCircle size={20} />
                        سليمة (Safe)
                        </button>
                    </div>
                </div>
            ) : (
                <div className={`rounded-xl p-6 animate-fade-in ${
                    (selectedAnswer === 'fake' && currentEmail.isPhishing) || (selectedAnswer === 'real' && !currentEmail.isPhishing)
                      ? 'bg-green-100 border border-green-200 text-green-900'
                      : 'bg-red-100 border border-red-200 text-red-900'
                  }`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 font-bold text-lg mb-2">
                            {(selectedAnswer === 'fake' && currentEmail.isPhishing) || (selectedAnswer === 'real' && !currentEmail.isPhishing) ? (
                                <><CheckCircle className="text-green-600" /> إجابة صحيحة! أحسنت</>
                            ) : (
                                <><XCircle className="text-red-600" /> إجابة خاطئة، انتبه!</>
                            )}
                            </div>
                            <p className="text-sm md:text-base opacity-90 leading-relaxed">{currentEmail.explanation}</p>
                        </div>
                        <button
                        onClick={nextEmail}
                        className="px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-bold shadow-lg transition-all transform hover:-translate-y-1"
                        >
                        {currentEmailIndex < EMAILS.length - 1 ? "التالي" : "إنهاء الاختبار"}
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PhishingSim;