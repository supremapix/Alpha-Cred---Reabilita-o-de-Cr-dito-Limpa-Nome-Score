
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-green-50/30"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-24 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-xl shadow-blue-500/5 border border-blue-100 text-blue-700 text-[10px] font-black mb-10 tracking-[0.2em] uppercase">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Líder Nacional em Reabilitação 2025
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] mb-10 tracking-tighter">
              <Typewriter
                words={["Dê um basta na negativação.", "Reconstrua sua vida financeira.", "Limpe seu nome hoje mesmo."]}
                wait={4500}
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl leading-relaxed font-medium">
              Utilizamos estratégias jurídicas de ponta para remover apontamentos indevidos e restaurar sua credibilidade no mercado em tempo recorde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-12 py-6 rounded-2xl shadow-2xl shadow-blue-600/40 transition-all flex items-center justify-center gap-4 transform hover:-translate-y-1 active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-3xl"></i>
                Consultoria Gratuita
              </a>
              <Link
                to="/servicos"
                className="bg-white hover:bg-slate-50 text-slate-900 text-xl font-black px-12 py-6 rounded-2xl shadow-xl transition-all flex items-center justify-center border border-slate-200 active:scale-95"
              >
                Ver Soluções
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-24 pt-10 border-t border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Conformidade e Segurança:</p>
              <div className="flex flex-wrap items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2 font-black text-xl"><i className="fa-solid fa-building-columns"></i> BANCO CENTRAL</div>
                <div className="flex items-center gap-2 font-black text-xl"><i className="fa-solid fa-shield-halved"></i> LGPD READY</div>
                <div className="flex items-center gap-2 font-black text-xl"><i className="fa-solid fa-gavel"></i> CÓDIGO CONSUMIDOR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Proof */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'CPF/CNPJ Reabilitados', val: '12k+' },
              { label: 'Aumento Médio Score', val: '+350pts' },
              { label: 'Tempo de Atuação', val: '8 Anos' },
              { label: 'Cidades Atendidas', val: '450+' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-6xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform">{stat.val}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
               <div className="relative z-10 bg-slate-900 rounded-[60px] p-10 md:p-20 text-white overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-10 opacity-10 text-9xl"><i className="fa-solid fa-quote-right"></i></div>
                  <h3 className="text-3xl md:text-5xl font-black mb-10 leading-tight">"O crédito é a porta para a realização dos seus sonhos."</h3>
                  <p className="text-slate-400 text-xl leading-relaxed mb-10">Na Alpha Cred, não apenas limpamos nomes; restauramos a dignidade de quem quer voltar a produzir, comprar e crescer.</p>
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-1 bg-green-500"></div>
                    <span className="font-black uppercase tracking-widest text-xs">Diretoria Alpha Cred</span>
                  </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Por que somos a escolha número 1?</h2>
              <div className="space-y-8">
                {[
                  { icon: 'fa-check-double', title: 'Metodologia Jurídica Própria', desc: 'Protocolos exclusivos baseados no Código de Defesa do Consumidor.' },
                  { icon: 'fa-user-tie', title: 'Consultoria Especializada', desc: 'Analistas reais, sem respostas automáticas ou robôs cansativos.' },
                  { icon: 'fa-clock-rotate-left', title: 'Transparência em Tempo Real', desc: 'Você acompanha cada passo da sua reabilitação diretamente conosco.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm flex-shrink-0">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
