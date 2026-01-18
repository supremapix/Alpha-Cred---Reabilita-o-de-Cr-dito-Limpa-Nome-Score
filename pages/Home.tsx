
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section Premium */}
      <section className="relative min-h-screen flex items-center pt-24">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0066CC 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-blue-100 text-blue-700 text-[10px] font-black mb-12 tracking-[0.2em] uppercase">
              <i className="fa-solid fa-shield-halved animate-bounce"></i>
              Sua reabilitação começa em 24 horas
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-slate-900 leading-[0.82] mb-12 tracking-tighter">
              <Typewriter
                words={["O fim da sua dívida.", "Seu nome limpo.", "Crédito aprovado."]}
                wait={4000}
              />
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-600 mb-16 max-w-4xl leading-snug font-medium border-l-4 border-blue-600 pl-8">
              Cansado de ouvir "não" nos bancos? Restauramos seu <span className="text-blue-600 font-bold">poder de compra</span> e sua <span className="text-green-600 font-bold">dignidade</span> através de um método 100% legal e transparente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Quero%20uma%20análise%20gratuita%20do%20meu%20CPF`}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-14 py-7 rounded-[2rem] shadow-2xl shadow-blue-600/40 transition-all flex items-center justify-center gap-4 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <i className="fa-brands fa-whatsapp text-3xl"></i>
                Quero meu Nome Limpo
              </a>
              <Link
                to="/servicos"
                className="bg-slate-900 hover:bg-slate-800 text-white text-xl font-black px-14 py-7 rounded-[2rem] shadow-xl transition-all flex items-center justify-center border border-slate-700 hover:scale-105"
              >
                Conhecer Método
              </Link>
            </div>

            {/* Social Proof Mini */}
            <div className="mt-20 flex flex-wrap items-center gap-10">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Cliente" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">+12k</div>
              </div>
              <div className="text-sm font-bold text-slate-400">
                <span className="text-slate-900">12.482 pessoas</span> já recuperaram sua liberdade este ano.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pain Points Section */}
      <section className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 italic">
              "Por que eu não consigo crédito?"
            </h2>
            <p className="text-xl text-slate-500 font-medium">A culpa não é sua. O sistema bancário cria barreiras invisíveis. Nós as removemos para você.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Dívidas Abusivas', desc: 'Juros sobre juros que tornam a quitação impossível sem uma estratégia legal.', icon: 'fa-percent' },
              { title: 'Score Travado', desc: 'Mesmo com as contas em dia, sua pontuação não sobe? Nós sabemos por que.', icon: 'fa-lock' },
              { title: 'Bacen (Lista Negra)', desc: 'Registros internos que os bancos não te contam, mas que barram seu cartão.', icon: 'fa-eye-slash' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-blue-500 transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-3/5 space-y-10">
                <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Prepare-se para ouvir <span className="text-green-400 italic">"Sim"</span>.</h2>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
                  Imagine entrar em uma concessionária ou solicitar o financiamento da sua casa própria com a certeza da aprovação. Esse é o futuro que construímos juntos.
                </p>
                <div className="flex flex-wrap gap-10 pt-6 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">98%</span>
                    <span className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Satisfação</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">45 dias</span>
                    <span className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Prazo Médio</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="bg-white text-blue-900 text-2xl font-black px-12 py-8 rounded-[2rem] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 w-full"
                >
                  <i className="fa-solid fa-rocket"></i>
                  Quero Recomeçar
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
