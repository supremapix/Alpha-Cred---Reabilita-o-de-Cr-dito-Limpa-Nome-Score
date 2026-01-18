
import React, { useState } from 'react';
import Typewriter from '../components/Typewriter';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8">
            <Typewriter words={["Estamos prontos para te ajudar agora", "Fale com um de nossos especialistas"]} />
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
            Tire suas dúvidas ou agende sua análise gratuita. Escolha a forma de contato mais confortável para você.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-8">Canais de Atendimento</h2>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="bg-green-50 p-8 rounded-[30px] border border-green-100 flex items-start gap-6">
                    <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-900 mb-2">WhatsApp Comercial</h4>
                      <p className="text-green-700 mb-4">{CONTACT_INFO.phone}</p>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                      >
                        Iniciar conversa agora
                      </a>
                    </div>
                  </div>

                  {/* Phone & Hours */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-8 rounded-[30px] border border-blue-100">
                      <div className="text-blue-600 text-2xl mb-4"><i className="fa-solid fa-phone"></i></div>
                      <h4 className="font-bold mb-2">Telefone</h4>
                      <p className="text-gray-600 text-sm">{CONTACT_INFO.phone}</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-[30px] border border-gray-100">
                      <div className="text-gray-600 text-2xl mb-4"><i className="fa-solid fa-clock"></i></div>
                      <h4 className="font-bold mb-2">Atendimento</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {CONTACT_INFO.hours.week}<br />
                        {CONTACT_INFO.hours.saturday}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-purple-50 p-8 rounded-[30px] border border-purple-100">
                    <div className="text-purple-600 text-2xl mb-4"><i className="fa-solid fa-envelope"></i></div>
                    <h4 className="font-bold mb-2">E-mail</h4>
                    <p className="text-gray-600 text-sm">{CONTACT_INFO.email}</p>
                    <p className="text-xs text-purple-400 mt-2">Resposta em até 24h</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-6">Nosso Escritório</h3>
                <p className="text-gray-600 mb-6 flex items-start gap-2">
                  <i className="fa-solid fa-location-dot text-blue-500 mt-1"></i>
                  {CONTACT_INFO.address}
                </p>
                <div className="w-full h-64 bg-gray-200 rounded-[30px] overflow-hidden">
                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAyLjAiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1sen!2sbr!4v1620000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-gray-50">
              <h2 className="text-3xl font-black mb-8 text-gray-900">Mande sua Mensagem</h2>

              {submitted ? (
                <div className="bg-green-100 text-green-800 p-8 rounded-2xl flex flex-col items-center text-center">
                  <i className="fa-solid fa-circle-check text-5xl mb-4"></i>
                  <h3 className="text-xl font-black mb-2">Enviado com Sucesso!</h3>
                  <p>Recebemos sua mensagem. Um especialista entrará em contato em breve através do WhatsApp informado.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-2">Nome Completo *</label>
                      <input
                        required
                        type="text"
                        placeholder="Ex: João da Silva"
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-2">WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">E-mail *</label>
                    <input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Assunto *</label>
                    <select
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="reabilitacao">Reabilitação de Crédito</option>
                      <option value="limpa-nome">Limpa Nome</option>
                      <option value="bacen">Bacen</option>
                      <option value="score">Score & Rating</option>
                      <option value="outro">Outros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Mensagem *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva brevemente sua situação..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 ml-2">
                    <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="privacy" className="text-sm text-gray-500 cursor-pointer">
                      Aceito receber contato da Alpha Cred conforme as políticas de privacidade.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl text-lg shadow-xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1"
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Não deixe seu nome sujo atrapalhar seus sonhos</h2>
            <p className="text-gray-600 text-lg mb-12">Estamos aguardando seu contato para te ajudar a dar o primeiro passo.</p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-black px-16 py-6 rounded-2xl text-2xl shadow-2xl transition-all animate-pulse"
            >
              Quero recuperar meu crédito agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
