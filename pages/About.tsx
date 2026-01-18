
import React from 'react';
import Typewriter from '../components/Typewriter';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            <Typewriter words={["Nossa Identidade.", "Nossos Valores.", "Sua Segurança."]} />
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Mais do que consultoria, entregamos liberdade e dignidade financeira através de um trabalho ético e transparente.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: 'fa-bullseye', title: 'Missão', desc: 'Transformar a vida de pessoas e empresas, removendo barreiras financeiras para um futuro próspero.' },
              { icon: 'fa-eye', title: 'Visão', desc: 'Ser a maior autoridade nacional em reabilitação de crédito até 2027, com foco em excelência e resultados.' },
              { icon: 'fa-hand-holding-heart', title: 'Valores', desc: 'Trabalhamos com ética absoluta, transparência em cada etapa e respeito profundo ao cliente.' }
            ].map((v, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[50px] border border-slate-100 group hover:bg-blue-600 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center text-3xl text-blue-600 mb-10 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <i className={`fa-solid ${v.icon}`}></i>
                </div>
                <h3 className="text-3xl font-black mb-6 text-slate-900 group-hover:text-white transition-colors">{v.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed group-hover:text-blue-100 transition-colors">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-blue-600 text-4xl mb-12">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 leading-tight tracking-tighter">
              A ALPHA CRED nasceu para ajudar pessoas reais a recuperarem sua dignidade. Sabemos que por trás de cada restrição existe um sonho adiado.
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
