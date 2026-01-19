
import React from 'react';

const Watermark: React.FC = () => {
  // Gerando uma grade de itens para cobrir a tela
  const items = Array.from({ length: 100 }).map((_, i) => (
    <div key={i} className="flex-shrink-0 rotate-[-25deg] whitespace-nowrap px-12 py-16 text-[11px] font-black uppercase tracking-widest text-slate-900/5 select-none pointer-events-none">
      Desenvolvido ❤️ por <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="pointer-events-auto hover:text-blue-600 hover:underline transition-colors">Suprema Sites Express</a>
    </div>
  ));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden flex flex-wrap justify-center content-center pointer-events-none opacity-40">
      {items}
    </div>
  );
};

export default Watermark;
