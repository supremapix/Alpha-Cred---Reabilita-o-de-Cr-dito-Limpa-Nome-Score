
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Soluções', path: '/servicos' },
    { name: 'A Empresa', path: '/sobre' },
    { name: 'Resultados', path: '/depoimentos' },
    { name: 'Contato', path: '/contato' },
  ];

  const activePath = location.pathname;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <Logo className="h-9" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold tracking-tight hover:text-blue-600 transition-all relative group ${
                activePath === link.path ? 'text-blue-600' : 'text-slate-700'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full ${activePath === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            Atendimento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-x' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 ${isOpen ? 'max-h-screen py-8 opacity-100 border-b' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-6 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-black ${activePath === link.path ? 'text-blue-600' : 'text-slate-800'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            className="bg-green-500 text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-xl"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Falar com Especialista
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
