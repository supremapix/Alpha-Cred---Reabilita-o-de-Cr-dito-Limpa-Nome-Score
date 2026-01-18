
import React from 'react';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Maria Silva',
      age: '42 anos',
      text: 'Voltei a ter crédito depois de anos negativada. A Alpha Cred foi a luz no fim do túnel. Hoje consigo comprar parcelado e até consegui um empréstimo para reformar minha casa. Gratidão eterna!',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Empresário',
      text: 'Minha empresa estava sem acesso a crédito. A Alpha Cred regularizou tudo em 60 dias. Hoje voltei a crescer e a contratar. Profissionalismo nota 10!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      age: '35 anos',
      text: 'Achei que nunca mais teria crédito. Me explicaram tudo com paciência, sem enrolação. Hoje meu score subiu 300 pontos! Recomendo demais!',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      text: 'Atendimento humano, sem robôs, sem respostas prontas. Senti que realmente se importavam com meu caso. Resultado em menos de 90 dias!',
      rating: 5
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-8">
            <Typewriter words={["Vidas transformadas, sonhos realizados", "A voz de quem recuperou a liberdade"]} />
          </h1>
          <div className="flex justify-center gap-1 text-yellow-400 text-2xl mb-6">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p className="text-green-100 text-xl max-w-2xl mx-auto font-medium">
            Confira o depoimento de alguns dos mais de 500 clientes que já transformaram sua vida financeira conosco.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <i key={idx} className="fa-solid fa-star text-sm"></i>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-8">"{r.text}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">{r.name}</h4>
                    <p className="text-gray-500 text-sm">{r.role || r.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-gray-400 text-xs">
            *Depoimentos reais de clientes. Resultados podem variar de acordo com cada situação.
          </div>

          {/* Statistics */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Clientes Atendidos', val: '+500' },
              { label: 'Taxa de Sucesso', val: '95%' },
              { label: 'Tempo Médio', val: '60 Dias' },
              { label: 'Avaliações Positivas', val: '100%' }
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white p-10 rounded-[30px] border border-gray-100 shadow-sm">
                <div className="text-4xl font-black text-blue-600 mb-2">{stat.val}</div>
                <div className="text-gray-500 font-bold uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-5 rounded-2xl shadow-xl transition-all text-xl"
            >
              Seja o próximo caso de sucesso
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
