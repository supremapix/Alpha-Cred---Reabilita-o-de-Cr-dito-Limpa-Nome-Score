
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", light = false }) => {
  const color = light ? "#FFFFFF" : "#0066CC";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5L15 85H30L50 35L70 85H85L50 5Z" fill={color} />
        <rect x="42" y="55" width="16" height="5" rx="2" fill={light ? "#00C853" : "#00C853"} />
        <path d="M50 5L85 85H70L50 35L30 85H15L50 5Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-blue-900'}`}>
        ALPHA<span className="text-green-500">CRED</span>
      </span>
    </div>
  );
};

export default Logo;
