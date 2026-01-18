
import React from 'react';
// Fix: Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: 'fa-award',
      title: 'Reabilitação de Crédito',
      desc: 'Um serviço 360º para quem precisa voltar ao mercado. Resolvemos desde restrições internas em bancos até apontamentos públicos.',
      includes: ['Análise de Rating Bancário', 'Blindagem de CPF/CNPJ', 'Negociação de Dívidas Ativas', 'Consultoria de Reciclagem Financeira'],
      cta: 'Iniciar Agora'
    },
    {
      id: 2,
      icon: 'fa-shield-check',
      title: 'Limpa Nome Definitivo',
      desc: 'Atuamos legalmente para que seu nome saia dos cadastros de inadimplentes, permitindo que você recupere sua paz.',
      includes: ['Baixa em Cartórios', 'Exclusão de SPC/Serasa', 'Protocolo de Limpeza Legal', 'Certidões de Nada Consta'],
      cta: 'Limpar Nome'
    },
    {
      id: 3,
      icon: 'fa-landmark',
      title: 'Regularização Bacen (SCR)',
      desc: 'Corrigimos as "listas negras" do Banco Central que impedem financiamentos mesmo com o nome limpo.',
      includes: ['Correção de Prejuízos SCR', 'Análise de Registrato', 'Tratativas Administrativas', 'Relatórios de Evolução'],
      cta: 'Regularizar SCR'
    },
    {
      id: 4,
      icon: 'fa-chart-line-up',
      title: 'Turbo Score & Rating',
      desc: 'Elevamos sua pontuação através de técnicas de comportamento financeiro e correção de dados cadastrais.',
      includes: ['Ativação de Cadastro Positivo', 'Remoção de Consultas Excessivas', 'Rating de Aprovação Bancária', 'Guia de Manutenção de Score'],
      cta: 'Subir Score'
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-32 bg-white">
      {/* Dynamic Header */}
      <section className="bg-slate-950 py-32 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-[10px] font-black tracking-widest uppercase mb-8">Nossas Soluções</div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter">
            Estratégias de <span className="text-blue-500">Elite</span> para o seu crédito.
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
            Não fazemos promessas vazias. Aplicamos a lei e a técnica para garantir que você tenha as chaves da sua vida financeira novamente.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-slate-100 rounded-[60px] p-10 md:p-16 shadow-2xl shadow-slate-200/40 hover:shadow-blue-600/20 transition-all duration-500 group">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[40px] bg-slate-50 flex items-center justify-center text-5xl text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed text-lg font-medium">{service.desc}</p>

                  <div className="grid grid-cols-1 gap-4 mb-12">
                    {service.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-slate-500 font-bold text-sm">
                        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="inline-flex items-center justify-center gap-4 bg-slate-900 hover:bg-blue-600 text-white font-black px-12 py-5 rounded-2xl w-full sm:w-auto transition-all shadow-xl active:scale-95"
                  >
                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                    {service.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Trust Section */}
      <section className="py-32 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-[60px] p-12 md:p-24 border border-blue-100">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">Ficou com alguma dúvida?</h2>
          <p className="text-slate-600 text-xl mb-12 font-medium">Cada caso é único. Nossos especialistas estão prontos para analisar sua situação gratuitamente.</p>
          <Link to="/contato" className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white font-black px-12 py-5 rounded-2xl transition-all shadow-xl inline-block">Falar com Consultor</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
