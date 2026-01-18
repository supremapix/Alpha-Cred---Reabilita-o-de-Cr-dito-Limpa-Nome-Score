
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
          <div className="absolute inset-0 bg-blue-50/50"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-blue-700 text-xs font-black mb-8 tracking-widest uppercase">
              <i className="fa-solid fa-shield-halved text-green-500"></i>
              Sua reabilitação começa aqui
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              <Typewriter
                words={["Recupere seu crédito hoje.", "Volte a ter poder de escolha.", "Limpe seu nome com segurança."]}
                wait={4000}
              />
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
              A ALPHA CRED utiliza inteligência jurídica e estratégica para restaurar seu CPF ou CNPJ, elevando seu score de forma definitiva e 100% legal.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-black px-10 py-5 rounded-2xl shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Consultoria Gratuita
              </a>
              <Link
                to="/servicos"
                className="bg-white hover:bg-slate-50 text-slate-900 text-lg font-bold px-10 py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center border border-slate-200 active:scale-95"
              >
                Nossas Soluções
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: 'fa-gavel', label: '100% Legalizado' },
                { icon: 'fa-bolt', label: 'Resultado Rápido' },
                { icon: 'fa-user-lock', label: 'Sigilo Total' },
                { icon: 'fa-handshake', label: 'Transparência' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Processo em 3 Etapas</h2>
            <p className="text-slate-400 text-xl">Simplicidade e eficácia para transformar sua realidade financeira.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'fa-clipboard-list', title: 'Diagnóstico', desc: 'Análise minuciosa de todas as restrições e apontamentos no seu histórico.' },
              { icon: 'fa-chess-knight', title: 'Estratégia', desc: 'Aplicação de protocolos jurídicos para remoção legal de apontamentos.' },
              { icon: 'fa-circle-check', title: 'Conclusão', desc: 'Confirmação da limpeza e monitoramento do aumento do seu score.' }
            ].map((step, i) => (
              <div key={i} className="relative p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="absolute -top-6 left-10 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-xl">
                  {i + 1}
                </div>
                <div className="text-5xl text-blue-500 mb-8 mt-4 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Especialidades</h2>
              <p className="text-slate-600 text-xl font-medium">Soluções focadas em resolver cada entrave do seu crédito.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-trophy', title: 'Reabilitação', desc: 'Restauração completa do perfil de crédito.' },
              { icon: 'fa-wand-magic-sparkles', title: 'Limpa Nome', desc: 'Exclusão legal de dívidas do CPF/CNPJ.' },
              { icon: 'fa-building-columns', title: 'Bacen', desc: 'Regularização junto ao Banco Central.' },
              { icon: 'fa-chart-line', title: 'Score', desc: 'Estratégias para elevação imediata da pontuação.' }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
                <Link to="/servicos" className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Explorar <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
