import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Procedure from './components/Procedure';
import PriceList from './components/PriceList';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-text-primary bg-bg">
      <Helmet>
        <title>窩心清潔 | 專業地毯清洗服務</title>
        <meta name="description" content="窩心清潔是一間位於香港的專業清潔服務公司，主打地毯清洗服務。透過專業設備、環保清潔理念及自設訓練系統，為住宅與商業客戶提供可靠、透明、有效的深層清潔方案。" />
        <meta property="og:title" content="窩心清潔 | 專業地毯清洗服務" />
        <meta property="og:description" content="專業地毯清洗，還原潔淨舒適空間。立即WhatsApp查詢報價。" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Procedure />
        <PriceList />
        <Testimonials />
        <Locations />
        <FAQ />
        <Terms />
        <Contact />
        <About />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
