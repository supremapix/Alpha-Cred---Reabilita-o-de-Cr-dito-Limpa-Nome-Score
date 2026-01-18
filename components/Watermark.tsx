
import React from 'react';

const Watermark: React.FC = () => {
  const items = Array.from({ length: 40 }).map((_, i) => (
    <div key={i} className="watermark-item">
      Desenvolvido ❤️ por <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="hover:underline pointer-events-auto">Suprema Sites Express</a>
    </div>
  ));

  return (
    <div className="watermark-bg">
      {items}
    </div>
  );
};

export default Watermark;
