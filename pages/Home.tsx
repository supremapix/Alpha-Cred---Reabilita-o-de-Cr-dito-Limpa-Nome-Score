
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section Premium com Mesh Gradients */}
      <section className="relative min-h-screen flex items-center pt-24">
        {/* Background Visuals Refinados */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-green-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0066CC 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-2xl border border-blue-100 text-blue-700 text-[10px] font-black mb-12 tracking-[0.2em] uppercase">
              <i className="fa-solid fa-certificate text-blue-500"></i>
              Tecnologia Jurídica Anti-Negativação
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-black text-slate-900 leading-[0.82] mb-12 tracking-tighter">
              <Typewriter
                words={["O fim do seu nome sujo.", "Recupere seu respeito.", "Diga sim ao seu crédito."]}
                wait={4000}
              />
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-600 mb-16 max-w-4xl leading-snug font-medium border-l-8 border-blue-600 pl-10">
              O sistema bancário quer te manter invisível. Nós usamos a <span className="text-blue-600 font-extrabold underline decoration-blue-200 underline-offset-4">inteligência legal</span> para quebrar as barreiras que impedem o seu crescimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Quero%20uma%20análise%20gratuita%20do%20meu%20CPF`}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-14 py-7 rounded-[2.5rem] shadow-2xl shadow-blue-600/40 transition-all flex items-center justify-center gap-4 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <i className="fa-brands fa-whatsapp text-3xl"></i>
                Limpar meu Nome Agora
              </a>
              <Link
                to="/servicos"
                className="bg-slate-900 hover:bg-slate-800 text-white text-xl font-black px-14 py-7 rounded-[2.5rem] shadow-xl transition-all flex items-center justify-center border border-slate-700 hover:scale-105"
              >
                Como Funciona?
              </Link>
            </div>

            {/* Social Proof e Gatilho de Autoridade */}
            <div className="mt-24 flex flex-wrap items-center gap-12">
              <div className="flex -space-x-5">
                {[12, 15, 22, 35].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Cliente Satisfeito" />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-white bg-green-500 text-white flex items-center justify-center text-[10px] font-black shadow-lg">99%</div>
              </div>
              <div className="text-sm font-bold text-slate-500 max-w-xs">
                <span className="text-slate-900 block text-lg font-black mb-1">Satisfação Absoluta</span>
                Nossos clientes recuperam o crédito em média em 45 dias úteis.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Dor Estratégica */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                Chega de ser humilhado pelo <span className="text-blue-600">Score baixo</span>.
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Você trabalha, paga suas contas e mesmo assim o banco diz "não"? O problema não é você, é a falta de uma gestão profissional da sua imagem financeira. 
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'fa-ban', text: 'Remoção de registros internos abusivos', color: 'text-red-500' },
                  { icon: 'fa-shield-heart', text: 'Proteção legal contra cobranças vexatórias', color: 'text-blue-500' },
                  { icon: 'fa-arrow-up-right-dots', text: 'Estratégia real de elevação de Score', color: 'text-green-500' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ${item.color}`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className="text-lg font-black text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[4rem] rotate-3 opacity-10"></div>
              <div className="relative bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <i className="fa-solid fa-check-double text-xl"></i>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">Resultado Comprovado</h4>
                </div>
                <blockquote className="text-2xl font-bold text-slate-700 italic mb-8 leading-relaxed">
                  "Eu não conseguia nem um cartão de crédito de 500 reais. Com a Alpha Cred, em 60 dias financiei meu primeiro carro."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="font-black text-slate-900">Ricardo M. Barbosa</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Empresário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Transformador */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
                Sua vida nova começa com um <span className="text-green-500 italic">"Oi"</span>.
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-medium">
                Não cobramos para analisar seu caso. A primeira consulta é 100% gratuita e sigilosa.
              </p>
              <div className="pt-8">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="bg-white hover:bg-green-500 hover:text-white text-slate-900 text-3xl font-black px-16 py-8 rounded-[3rem] transition-all inline-flex items-center gap-6 shadow-2xl"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  Quero minha análise agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
