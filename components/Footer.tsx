
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <Logo light className="h-10" />
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Especialistas em restauração de dignidade financeira e consultoria estratégica de crédito para pessoas físicas e jurídicas em todo o território nacional.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin', 'x-twitter'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-lg">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-10">Nossas Soluções</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Reabilitação de Crédito</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Limpa Nome Legal</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Regularização Bacen</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Aumento de Score</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-10">Contato Direto</h4>
            <ul className="space-y-8 text-sm">
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-phone text-blue-500 text-lg"></i>
                <div className="space-y-1">
                  <span className="block text-white font-bold">Telefone Central</span>
                  <span className="text-slate-500">{CONTACT_INFO.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-envelope text-blue-500 text-lg"></i>
                <div className="space-y-1">
                  <span className="block text-white font-bold">E-mail Corporativo</span>
                  <span className="text-slate-500">{CONTACT_INFO.email}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
            <h4 className="text-white font-black text-lg mb-6">Precisa de ajuda agora?</h4>
            <p className="text-sm mb-8 font-medium">Inicie uma análise gratuita do seu CPF/CNPJ via WhatsApp.</p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 rounded-2xl w-full transition-all shadow-xl shadow-blue-500/20 active:scale-95"
            >
              <i className="fa-brands fa-whatsapp"></i>
              Falar Agora
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 gap-8">
          <p>© 2025 Alpha Cred Soluções. Todos os direitos reservados.</p>
          <div className="flex items-center gap-8">
            <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2 transition-colors">
              Desenvolvido com <i className="fa-solid fa-heart text-red-500 animate-pulse"></i> por Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
