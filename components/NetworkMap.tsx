import React, { useState, useEffect } from 'react';
import { Wifi, Monitor, Smartphone, Camera, Server, ShieldAlert, Radio, Lock, Unlock, ShieldCheck, AlertOctagon } from 'lucide-react';

const NetworkMap: React.FC = () => {
  const [isAttacking, setIsAttacking] = useState(false);
  const [stage, setStage] = useState(0); // 0: Secure, 1: Cam Infected, 2: Router Infected, 3: All Infected

  const startAttack = () => {
    if (isAttacking) return;
    setIsAttacking(true);
    setStage(1); // Cam infected immediately

    // Sequence the attack
    setTimeout(() => setStage(2), 1500); // Router infected after beam 1
    setTimeout(() => setStage(3), 3000); // Devices infected after beam 2/3
    
    // Reset
    setTimeout(() => {
        setIsAttacking(false);
        setStage(0);
    }, 7000); 
  };

  return (
    <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 p-8 relative overflow-hidden font-[Cairo]">
      
      {/* HUD Header */}
      <div className="flex justify-between items-start mb-10 relative z-10">
        <div>
            <h3 className="font-bold text-2xl text-white mb-1 flex items-center gap-3">
                <Wifi className="text-sky-500" />
                خريطة الشبكة التكتيكية
            </h3>
            <p className="text-slate-400 text-sm">محاكاة اختراق عبر نقاط الضعف (IoT)</p>
        </div>
        <div className={`px-4 py-2 rounded-lg border font-mono text-xs transition-colors flex items-center gap-2 ${isAttacking ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse' : 'bg-emerald-500/20 border-emerald-500 text-emerald-400'}`}>
            {isAttacking ? <AlertOctagon size={14} /> : <ShieldCheck size={14} />}
            STATUS: {stage === 0 ? 'SECURE' : stage === 3 ? 'SYSTEM CRITICAL' : 'INTRUSION DETECTED'}
        </div>
      </div>

      {/* 3D Isometric Viewport */}
      <div className="h-[500px] flex items-center justify-center perspective-1000 overflow-visible">
        <div className="relative w-80 h-80 iso-container">
            
            {/* Base Grid */}
            <div className="absolute inset-0 bg-slate-800/50 rounded-xl border-2 border-slate-600 grid grid-cols-4 grid-rows-4 shadow-2xl transition-colors duration-500" style={{borderColor: isAttacking ? 'rgba(239,68,68,0.3)' : 'rgba(71,85,105,1)'}}>
                {[...Array(16)].map((_, i) => <div key={i} className="border border-slate-700/30"></div>)}
            </div>

            {/* --- DEVICES (Isometric Items) --- */}

            {/* ROUTER (Center) */}
            <DeviceNode 
                icon={Server} 
                label="ROUTER" 
                isInfected={stage >= 2} 
                position="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-10"
                baseColor="sky"
            />

            {/* CAMERA (Weak Point) - Top Right Corner */}
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 translate-z-20 iso-item cursor-pointer">
                <div className="relative">
                    <StatusBadge isInfected={stage >= 1} />
                    <div className={`w-16 h-16 rounded-lg border-2 shadow-xl flex flex-col items-center justify-center transition-all duration-300 ${stage >= 1 ? 'bg-red-900 border-red-500 text-red-100 animate-shake' : 'bg-slate-800 border-slate-600 text-slate-300'}`}>
                        <Camera size={24} />
                        <span className="text-[8px] mt-1">IoT CAM</span>
                    </div>
                    {/* Vulnerability Indicator */}
                    <div className={`absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] px-2 py-0.5 rounded font-bold transition-all ${stage >= 1 ? 'bg-red-600 text-white animate-bounce' : 'bg-yellow-500/80 text-black'}`}>
                        {stage >= 1 ? 'EXPLOITED' : 'WEAK PORT'}
                    </div>
                </div>
            </div>

            {/* PC - Bottom Left */}
            <DeviceNode 
                icon={Monitor} 
                label="PC" 
                isInfected={stage >= 3} 
                position="bottom-0 left-0 -translate-x-1/2 translate-y-1/2 translate-z-10"
                baseColor="slate"
            />

            {/* Phone - Bottom Right */}
            <DeviceNode 
                icon={Smartphone} 
                label="MOBILE" 
                isInfected={stage >= 3} 
                position="bottom-0 right-0 translate-x-1/2 translate-y-1/2 translate-z-10"
                baseColor="slate"
            />

            {/* --- ATTACK BEAMS --- */}
            
            {/* Beam 1: Camera -> Router */}
            <AttackBeam 
                isActive={stage >= 1} 
                from={{top: '10%', right: '10%'}} 
                rotation={45} 
                delay={0}
            />
            
            {/* Beam 2: Router -> PC */}
            <AttackBeam 
                isActive={stage >= 2} 
                from={{top: '50%', left: '50%'}} 
                rotation={135} 
                delay={0}
            />

            {/* Beam 3: Router -> Phone */}
            <AttackBeam 
                isActive={stage >= 2} 
                from={{top: '50%', left: '50%'}} 
                rotation={45} 
                delay={0.2} // Slight stagger
            />

        </div>
      </div>

      {/* Control Panel */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xs text-center z-20">
        <button
          onClick={startAttack}
          disabled={isAttacking}
          className={`w-full py-4 rounded-xl font-bold tracking-widest text-sm shadow-lg backdrop-blur-md border transition-all transform active:scale-95 flex items-center justify-center gap-3 ${
            isAttacking 
              ? 'bg-slate-800/50 border-slate-600 text-slate-500 cursor-not-allowed' 
              : 'bg-red-600/90 hover:bg-red-500 border-red-400 text-white shadow-red-600/30'
          }`}
        >
          {isAttacking ? (
            <>
                <Radio className="animate-spin" size={16} /> ATTACK IN PROGRESS...
            </>
          ) : (
            <>
                <ShieldAlert size={18} /> SIMULATE ATTACK
            </>
          )}
        </button>
      </div>

      <style>{`
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px) rotate(-2deg); }
            75% { transform: translateX(2px) rotate(2deg); }
        }
        .animate-shake {
            animation: shake 0.5s ease-in-out;
        }
        @keyframes packetMove {
            0% { left: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
        }
        .animate-packet {
            animation: packetMove 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

// --- Sub Components ---

const DeviceNode = ({ icon: Icon, label, isInfected, position, baseColor }: any) => {
    return (
        <div className={`absolute ${position} iso-item transition-all duration-300`}>
             <div className="relative group">
                {/* Floating Status Icon */}
                <StatusBadge isInfected={isInfected} />

                <div className={`w-16 h-16 rounded-lg border-b-4 shadow-xl flex flex-col items-center justify-center transition-all duration-500 ${
                    isInfected 
                    ? 'bg-red-950 border-red-800 text-red-200 shadow-red-900/50 animate-shake' 
                    : `${baseColor === 'sky' ? 'bg-sky-900/80 border-sky-600 text-sky-200' : 'bg-slate-800 border-slate-600 text-slate-300'}`
                }`}>
                    <Icon size={24} />
                    <span className="text-[8px] mt-1 font-bold tracking-wider">{label}</span>
                </div>
                
                {/* Infection Glow */}
                {isInfected && (
                    <div className="absolute inset-0 bg-red-500/30 blur-xl rounded-full animate-pulse"></div>
                )}
             </div>
        </div>
    );
};

const StatusBadge = ({ isInfected }: { isInfected: boolean }) => (
    <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 ${
        isInfected 
        ? 'bg-red-600 border-red-400 text-white shadow-[0_0_10px_rgba(220,38,38,0.8)]' 
        : 'bg-emerald-500 border-emerald-300 text-white'
    }`}>
        {isInfected ? <Unlock size={12} /> : <Lock size={12} />}
    </div>
);

const AttackBeam = ({ isActive, from, rotation, delay }: any) => {
    if (!isActive) return null;

    return (
        <div 
            className="absolute h-1 bg-red-900/30 overflow-hidden transform origin-left transition-opacity duration-300"
            style={{
                top: from.top,
                left: from.left,
                right: from.right,
                width: '120px',
                transform: `rotate(${rotation}deg)`,
                opacity: isActive ? 1 : 0
            }}
        >
            {/* Core Beam */}
            <div className="absolute inset-0 bg-red-500/20 blur-[1px]"></div>
            
            {/* Moving Packet */}
            <div 
                className="absolute top-1/2 -translate-y-1/2 w-8 h-2 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444] animate-packet"
                style={{ animationDelay: `${delay}s` }}
            ></div>
            
             {/* Secondary Fast Packet */}
             <div 
                className="absolute top-1/2 -translate-y-1/2 w-2 h-1 bg-white rounded-full opacity-70 animate-packet"
                style={{ animationDelay: `${delay + 0.5}s`, animationDuration: '0.8s' }}
            ></div>
        </div>
    );
};

export default NetworkMap;