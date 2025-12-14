import React from 'react';
import { Shield, Home, Clock, Activity, Briefcase, HelpCircle, Siren } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/dz-scams', label: 'الاحتيالات', icon: Siren },
    { path: '/simulation', label: 'المعمل', icon: Activity },
    { path: '/arsenal', label: 'الترسانة', icon: Briefcase },
    { path: '/timeline', label: 'الزمن', icon: Clock },
    { path: '/myths', label: 'خرافات', icon: HelpCircle },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none hidden md:flex">
        <nav className="glass rounded-full px-6 py-3 shadow-2xl pointer-events-auto flex items-center gap-2 transform hover:scale-[1.02] transition-transform duration-300">
          
          <Link to="/" className="flex items-center gap-2 ml-6 group">
            <div className="bg-gradient-to-tr from-sky-600 to-indigo-600 p-2 rounded-full text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Shield size={20} fill="currentColor" fillOpacity={0.2} />
            </div>
            <span className="font-bold text-lg text-slate-800 tracking-tight">حصنك الرقمي</span>
          </Link>

          <div className="h-6 w-px bg-slate-300 mx-2"></div>

          <div className="flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden ${
                    active
                      ? 'text-white shadow-md'
                      : 'text-slate-600 hover:bg-white/50 hover:text-sky-600'
                  }`}
                >
                  {active && (
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 z-0"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Bar (Glassmorphism) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="glass-dark rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 p-2 flex justify-between items-center px-4">
           {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${
                      active ? 'bg-sky-500 text-white shadow-lg transform -translate-y-2' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                  </Link>
                );
            })}
        </div>
      </div>
      
      {/* Spacer for content to not hide behind navbar on mobile */}
      <div className="h-4 md:h-24"></div> 
    </>
  );
};

export default Navbar;