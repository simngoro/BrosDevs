import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioShowcase from '../components/PortfolioShowcase';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <AboutSection />
      <PortfolioShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}
