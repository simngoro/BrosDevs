import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import GetDirectionsSection from '../components/GetDirectionsSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OurProductsSection from '../components/OurProductsSection';
import PortfolioShowcase from '../components/PortfolioShowcase';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcf8f3] text-gray-900">
      <Header />
      <HeroSection />
      <GetDirectionsSection />
      <ProcessSection />
      <div id="testimonios">
        <TestimonialsSection />
      </div>
      <OurProductsSection />
      <div id="proyectos">
        <PortfolioShowcase />
      </div>
      <div id="contacto">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
