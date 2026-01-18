
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: 'fa-hand-holding-dollar',
      title: 'Reabilitação de Crédito',
      problem: 'Seu crédito está "queimado" por erros do passado?',
      benefit: 'Limpamos seu histórico e criamos uma blindagem legal que te protege de cobranças abusivas e te recoloca no topo do mercado.',
      items: ['Blindagem de CPF/CNPJ', 'Remoção de Gravames', 'Auditoria de Juros', 'Poder de Compra Restaurado'],
      color: 'blue'
    },
    {
      id: 2,
      icon: 'fa-user-check',
      title: 'Limpa Nome Definitivo',
      problem: 'O SPC e o Serasa não te deixam dormir em paz?',
      benefit: 'Não é apenas pagar dívidas. É regularizar sua situação de forma definitiva para que seu nome brilhe novamente nos registros.',
      items: ['Baixa em 72h úteis*', 'Ação contra Negativação Indevida', 'Negociação Inteligente', 'Paz de Espírito'],
      color: 'green'
    },
    {
      id: 3,
      icon: 'fa-building-columns',
      title: 'Bacen & Registrato',
      problem: 'Nome limpo, mas crédito negado? A culpa é do Bacen.',
      benefit: 'Limpamos seu "histórico de prejuízo" nos registros do Banco Central, a barreira secreta que impede seus financiamentos.',
      items: ['Remoção de Prejuízo SCR', 'Correção do Registrato', 'Tratativa Jurídica Direta', 'Histórico Bancário Impecável'],
      color: 'slate'
    },
    {
      id: 4,
      icon: 'fa-chart-simple',
      title: 'Master Score & Rating',
      problem: 'Seu score não sobe nem com as contas em dia?',
      benefit: 'Aplicamos engenharia financeira para turbinar sua pontuação e melhorar seu rating interno nos bancos privados.',
      items: ['Aumento Exponencial', 'Remoção de Consultas', 'Atualização Cadastral', 'Rating AA Garantido*'],
      color: 'blue'
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-32 bg-white">
      {/* Persuasive Header */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/20 blur-[150px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 leading-none tracking-tighter">
              A chave para o seu <span className="text-blue-500 italic">"Sim"</span> bancário.
            </h1>
            <p className="text-slate-400 text-xl md:text-3xl font-medium leading-relaxed max-w-2xl">
              Nossas soluções foram desenhadas para quem não aceita mais as amarras do sistema financeiro.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Refined */}
      <section className="container mx-auto px-6 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-slate-100 hover:shadow-blue-500/10 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <i className={`fa-solid ${service.icon} text-[15rem]`}></i>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-3xl text-blue-600 mb-10 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                
                <h3 className="text-4xl font-black text-slate-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-bold mb-8 italic">{service.problem}</p>
                <p className="text-slate-500 text-xl leading-relaxed mb-12 font-medium">{service.benefit}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-800 font-black text-sm">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px]">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center gap-4 bg-slate-900 hover:bg-blue-600 text-white font-black px-12 py-6 rounded-3xl w-full sm:w-auto transition-all shadow-xl hover:shadow-blue-600/40"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  Iniciar Análise Gratuita
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Prop Final */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-10">
          <div className="inline-block px-6 py-2 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest border border-green-100">Resultado Garantido ou seu Investimento de Volta*</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">O seu recomeço está a um clique de distância.</h2>
          <p className="text-slate-500 text-xl font-medium">Pare de tentar sozinho. Use o método de quem é referência nacional.</p>
          <div className="pt-6">
            <Link to="/contato" className="bg-blue-600 text-white font-black px-16 py-7 rounded-[2rem] text-xl shadow-2xl hover:bg-blue-700 transition-all inline-block hover:-translate-y-2">Falar com Especialista</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
