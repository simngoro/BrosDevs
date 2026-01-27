import dynamic from 'next/dynamic';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

// Lazy load heavy components below the fold
const GetDirectionsSection = dynamic(() => import('../components/GetDirectionsSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const ProcessSection = dynamic(() => import('../components/ProcessSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const OurProductsSection = dynamic(() => import('../components/OurProductsSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const PortfolioShowcase = dynamic(() => import('../components/PortfolioShowcase'), {
  loading: () => <div className="min-h-[400px]" />,
});
const ContactSection = dynamic(() => import('../components/ContactSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
});

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
