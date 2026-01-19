
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Narrative */}
      <section className="bg-slate-950 py-48 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 text-[10px] font-black tracking-[0.3em] uppercase mb-12">Manifesto Alpha Cred</div>
          <h1 className="text-6xl md:text-[10rem] font-black mb-12 tracking-tighter leading-[0.85]">
            Onde a ética <br/>encontra a <span className="text-blue-500">Vitória.</span>
          </h1>
          <p className="text-slate-400 text-2xl md:text-4xl max-w-5xl mx-auto font-medium leading-tight tracking-tight">
            Não somos apenas uma empresa de crédito. Somos o ponto de virada para quem foi injustiçado pelo sistema financeiro.
          </p>
        </div>
      </section>

      {/* A Verdadeira História */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
            <div className="lg:w-1/2 space-y-12">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                A dignidade financeira não é um privilégio, <span className="text-blue-600 italic">é um direito.</span>
              </h2>
              <div className="space-y-8 text-slate-600 text-xl leading-relaxed font-medium">
                <p>
                  A Alpha Cred nasceu de um incômodo profundo: ver pessoas honestas impedidas de sonhar por causa de um algoritmo frio de Score ou registros internos invisíveis.
                </p>
                <p>
                  Acreditamos que todo mundo merece uma segunda chance. Por isso, montamos um time de elite capaz de traduzir a complexidade jurídica em resultados práticos no seu CPF ou CNPJ.
                </p>
                <div className="pt-6">
                  <Link to="/contato" className="text-blue-600 font-black text-2xl border-b-4 border-blue-600 hover:text-slate-900 hover:border-slate-900 transition-all inline-block">
                    Conheça nossos fundadores →
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-10">
               {[
                 { title: 'Transparência', icon: 'fa-eye', color: 'bg-blue-600 text-white' },
                 { title: 'Velocidade', icon: 'fa-bolt', color: 'bg-slate-100 text-slate-900' },
                 { title: 'Legalidade', icon: 'fa-gavel', color: 'bg-slate-100 text-slate-900' },
                 { title: 'Foco no Humano', icon: 'fa-users', color: 'bg-green-500 text-white' }
               ].map((card, i) => (
                 <div key={i} className={`${card.color} p-12 rounded-[3.5rem] flex flex-col items-center justify-center text-center shadow-2xl transition-all hover:scale-105`}>
                    <i className={`fa-solid ${card.icon} text-4xl mb-6`}></i>
                    <h4 className="font-black uppercase tracking-widest text-[10px]">{card.title}</h4>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores Reais */}
      <section className="py-40 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: 'Nossa Missão', desc: 'Restaurar a paz de espírito e o poder de compra de cada brasileiro através da legalidade.' },
              { title: 'Nossa Visão', desc: 'Ser o porto seguro onde o consumidor encontra a solução definitiva para o seu crédito.' },
              { title: 'Nossos Valores', desc: 'Ética inabalável, verdade absoluta e foco obsessivo no resultado do cliente.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-16 rounded-[4rem] shadow-xl border border-slate-100 group hover:bg-blue-600 transition-all duration-700">
                <h3 className="text-4xl font-black mb-8 text-slate-900 group-hover:text-white transition-colors">{v.title}</h3>
                <p className="text-slate-500 text-xl leading-relaxed group-hover:text-blue-50 transition-colors font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
