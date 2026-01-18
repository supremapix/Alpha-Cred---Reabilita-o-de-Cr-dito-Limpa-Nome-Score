
import React from 'react';
import Typewriter from '../components/Typewriter';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-950 py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[10px] font-black tracking-widest uppercase mb-10">Nossa História</div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none">
            Ética e <span className="text-blue-500">Resultado.</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-3xl max-w-4xl mx-auto font-medium leading-relaxed">
            Fundada com o propósito de humanizar o mercado financeiro, a Alpha Cred tornou-se referência em proteção ao consumidor e recuperação de crédito.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">Nascemos para devolver o seu poder de escolha.</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>Sabemos que imprevistos acontecem. O desemprego, uma doença na família ou um investimento mal planejado podem levar qualquer pessoa à negativação. </p>
                <p>O mercado financeiro costuma ser implacável, fechando portas e dificultando o recomeço. Foi nesse cenário que a Alpha Cred surgiu: para ser a ponte entre o problema e a solução definitiva.</p>
                <p>Nossa equipe não é formada apenas por consultores, mas por especialistas em Direito do Consumidor e inteligência financeira que lutam pelo seu direito de ter crédito aprovado.</p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { title: 'Análise Gratuita', icon: 'fa-magnifying-glass-chart', color: 'bg-blue-50 text-blue-600' },
                 { title: 'Sigilo Absoluto', icon: 'fa-user-shield', color: 'bg-green-50 text-green-600' },
                 { title: 'Foco no Cliente', icon: 'fa-heart-pulse', color: 'bg-red-50 text-red-600' },
                 { title: 'Legalidade 100%', icon: 'fa-scale-balanced', color: 'bg-purple-50 text-purple-600' }
               ].map((card, i) => (
                 <div key={i} className={`${card.color} p-10 rounded-[40px] flex flex-col items-center text-center shadow-sm hover:scale-105 transition-all`}>
                    <i className={`fa-solid ${card.icon} text-4xl mb-6`}></i>
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{card.title}</h4>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Nossos Pilares</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Transparência', desc: 'Informação clara e objetiva em todas as etapas do processo, sem entrelinhas ou taxas escondidas.' },
              { title: 'Eficácia', desc: 'Foco absoluto em resultados rápidos e permanentes, respeitando sempre a legislação vigente.' },
              { title: 'Empatia', desc: 'Atendimento humanizado porque entendemos que cada CPF representa uma história de vida única.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[50px] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:bg-blue-600 transition-all duration-500">
                <h3 className="text-3xl font-black mb-6 text-slate-900 group-hover:text-white transition-colors">{v.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed group-hover:text-blue-50 transition-colors font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
