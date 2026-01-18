
import React from 'react';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: 'fa-award',
      title: 'Reabilitação de Crédito',
      desc: 'Análise técnica de restrições com aplicação de protocolos para reabilitação do perfil de consumo e aprovação bancária.',
      includes: ['Análise de perfil de crédito', 'Estratégia personalizada', 'Protocolos jurídicos', 'Monitoramento mensal'],
      cta: 'Iniciar Reabilitação'
    },
    {
      id: 2,
      icon: 'fa-broom',
      title: 'Limpa Nome Definitivo',
      desc: 'Regularização legal de apontamentos em órgãos de proteção ao crédito, garantindo a limpeza do seu nome em curto prazo.',
      includes: ['Identificação de pendências', 'Baixa em órgãos de proteção', 'Certidões negativas', 'Regularização de protestos'],
      cta: 'Limpar meu Nome'
    },
    {
      id: 3,
      icon: 'fa-landmark-dome',
      title: 'Regularização Bacen',
      desc: 'Correção de registros no Registrato e SCR (Sistema de Informações de Créditos) do Banco Central do Brasil.',
      includes: ['Análise do Registrato', 'Tratativas de SCR', 'Baixa de prejuízos', 'Consultoria bancária'],
      cta: 'Regularizar Bacen'
    },
    {
      id: 4,
      icon: 'fa-arrow-trend-up',
      title: 'Elevação de Score',
      desc: 'Métodos para aumentar sua pontuação interna e externa, facilitando financiamentos de imóveis e veículos.',
      includes: ['Análise de rating interno', 'Correção de cadastros', 'Blindagem de CPF', 'Dicas de manutenção'],
      cta: 'Aumentar meu Score'
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-32">
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
            <Typewriter words={["Soluções Corporativas.", "Inteligência em Crédito.", "Sua Segunda Chance."]} />
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
            Metodologia exclusiva para resolver problemas complexos de endividamento e restrições financeiras.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-slate-100 rounded-[50px] p-10 md:p-16 shadow-2xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all group border-b-8 border-b-transparent hover:border-b-blue-600">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[40px] bg-slate-50 flex items-center justify-center text-4xl md:text-5xl text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-slate-900 mb-6">{service.title}</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed text-lg font-medium">{service.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-500 text-sm font-bold">
                        <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-[10px]">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-blue-600 text-white font-black px-10 py-5 rounded-2xl w-full sm:w-auto transition-all shadow-xl active:scale-95"
                  >
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                    {service.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
