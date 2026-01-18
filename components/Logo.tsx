
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", light = false }) => {
  const primaryColor = light ? "#FFFFFF" : "#0066CC";
  const accentColor = "#00C853";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10L10 90H30L50 45L70 90H90L50 10Z" fill={primaryColor} />
          <path d="M45 65H55V75H45V65Z" fill={accentColor} />
          <circle cx="50" cy="50" r="48" stroke={primaryColor} strokeWidth="2" strokeDasharray="10 5" className="opacity-20" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-slate-900'}`}>
          ALPHA<span className="text-green-500">CRED</span>
        </span>
        <span className={`text-[8px] font-bold tracking-[0.3em] uppercase ${light ? 'text-blue-200' : 'text-slate-400'}`}>
          Inteligência Financeira
        </span>
      </div>
    </div>
  );
};

export default Logo;
