
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: 'fa-duotone fa-solid fa-file-invoice-dollar',
      title: 'Reabilitação de Crédito',
      problem: 'Frustrado por ter as portas fechadas pelo passado?',
      benefit: 'Nossa inteligência jurídica remove as travas ocultas que os bancos usam para te negar crédito, mesmo com o nome limpo.',
      items: ['Remoção de Gravames', 'Auditoria de Histórico', 'Poder de Compra Restaurado'],
      color: 'blue'
    },
    {
      id: 2,
      icon: 'fa-duotone fa-solid fa-user-shield',
      title: 'Limpa Nome Premium',
      problem: 'As ligações de cobrança não te deixam dormir?',
      benefit: 'Regularizamos sua situação de forma definitiva através de meios administrativos e judiciais, garantindo que seu CPF fique impecável.',
      items: ['Baixa em até 72h*', 'Negociação Estratégica', 'Certidão de Nada Consta'],
      color: 'green'
    },
    {
      id: 3,
      icon: 'fa-duotone fa-solid fa-building-columns',
      title: 'Solução Bacen (SCR)',
      problem: 'Nome limpo mas o banco recusa o financiamento?',
      benefit: 'Limpamos seu histórico de "Prejuízo" no Banco Central (SCR), a "lista negra" que ninguém te conta que existe.',
      items: ['Remoção de Prejuízo SCR', 'Correção de Registrato', 'Limpeza Interna Bancária'],
      color: 'slate'
    },
    {
      id: 4,
      icon: 'fa-duotone fa-solid fa-chart-line-up',
      title: 'Turbo Score 2025',
      problem: 'Seu score está estagnado e você não entende o porquê?',
      benefit: 'Usamos engenharia financeira para atualizar seu cadastro positivo e remover consultas excessivas que derrubam sua nota.',
      items: ['Elevação Acelerada', 'Remoção de Consultas', 'Rating AA Garantido*'],
      color: 'blue'
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-32 bg-white">
      {/* Header com Foco em Resultados */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/15 blur-[160px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
              A ciência por trás do seu <span className="text-blue-500">Crédito Aprovado.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-3xl font-medium leading-relaxed max-w-2xl border-l-4 border-blue-600 pl-8">
              Não é sorte, é <span className="text-white italic">estratégia</span>. Entregamos a chave que abre as portas de financiamentos e investimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Serviços com Design de Alta Conversão */}
      <section className="container mx-auto px-6 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-slate-100 hover:shadow-blue-500/10 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <i className={`${service.icon} text-[18rem]`}></i>
              </div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center text-4xl text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <i className={service.icon}></i>
                </div>
                
                <h3 className="text-4xl font-black text-slate-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-extrabold mb-8 italic text-lg tracking-tight">{service.problem}</p>
                <p className="text-slate-500 text-xl leading-relaxed mb-12 font-medium">{service.benefit}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-800 font-black text-sm uppercase tracking-wide">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Quero%20falar%20sobre%20${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center gap-6 bg-slate-900 hover:bg-blue-600 text-white font-black px-14 py-7 rounded-[2rem] w-full sm:w-auto transition-all shadow-xl hover:shadow-blue-600/40 transform active:scale-95"
                >
                  <i className="fa-brands fa-whatsapp text-3xl"></i>
                  Quero Começar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promessa de Segurança */}
      <section className="py-40 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex justify-center gap-1 text-yellow-500 text-3xl mb-4">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
            Honestidade acima de tudo.
          </h2>
          <p className="text-slate-500 text-xl md:text-3xl font-medium max-w-3xl mx-auto leading-relaxed">
            Se não pudermos resolver o seu caso, seremos os primeiros a te dizer. Nosso compromisso é com a sua <span className="text-blue-600 font-black">liberdade</span>, não apenas com o contrato.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/contato" className="bg-blue-600 text-white font-black px-16 py-8 rounded-[2.5rem] text-2xl shadow-2xl hover:bg-blue-700 transition-all hover:-translate-y-2">Falar com Consultor</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
