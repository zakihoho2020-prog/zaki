import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Shield className="text-sky-500" />
              <span className="font-bold text-xl">حصنك الرقمي</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              منصة تعليمية تهدف لرفع الوعي الأمني وتمكين المستخدمين من حماية أنفسهم في العالم الرقمي.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition-colors">عن المشروع</a></li>
              <li><a href="#/simulation" className="hover:text-sky-400 transition-colors">المعمل</a></li>
              <li><a href="#/arsenal" className="hover:text-sky-400 transition-colors">الأدوات</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">إخلاء مسؤولية</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              هذا الموقع لأغراض تعليمية وتوعوية فقط. المعلومات المقدمة هنا لا تغني عن الاستشارة المهنية المتخصصة. جميع الأدوات المذكورة هي اقتراحات وتخضع لشروط استخدام مزوديها.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} حصنك الرقمي. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;