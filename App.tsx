
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Watermark from './components/Watermark';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-blue-600 selection:text-white relative">
        <Watermark />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/servicos" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/sobre" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/depoimentos" element={<PageWrapper><Testimonials /></PageWrapper>} />
              <Route path="/contato" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </Router>
  );
};

export default App;
