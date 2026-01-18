
import React from 'react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre reabilitação de crédito.');
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl animate-bounce group-hover:animate-none"></i>
      <span className="absolute right-20 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
