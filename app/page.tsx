import dynamic from 'next/dynamic';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const DiagnosticSection = dynamic(() => import('../components/DiagnosticSection'), {
  loading: () => <div className="min-h-[400px] bg-[#0a0a0a]" />,
});
const StickyHorizontalScroll = dynamic(
  () => import('../components/StickyHorizontalScroll'),
  {
    loading: () => <div className="min-h-screen bg-[#0a0a0a]" />,
  }
);
const ComparisonSection = dynamic(() => import('../components/ComparisonSection'), {
  loading: () => <div className="min-h-[400px] bg-[#fcf8f3]" />,
});
const HowItWorksSection = dynamic(() => import('../components/HowItWorksSection'), {
  loading: () => <div className="min-h-[400px] bg-[#fcf8f3]" />,
});
const ValuePropositionSection = dynamic(
  () => import('../components/ValuePropositionSection'),
  {
    loading: () => <div className="min-h-[400px] bg-[#fcf8f3]" />,
  }
);
const IndustriesSection = dynamic(() => import('../components/IndustriesSection'), {
  loading: () => <div className="min-h-[400px] bg-[#0a0a0a]" />,
});
const TestimonialsSection = dynamic(
  () => import('../components/TestimonialsSection'),
  {
    loading: () => <div className="min-h-[400px] bg-[#0a0a0a]" />,
  }
);
const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => <div className="min-h-[400px] bg-[#fcf8f3]" />,
});
const FAQSection = dynamic(() => import('../components/FAQSection'), {
  loading: () => <div className="min-h-[400px] bg-[#0a0a0a]" />,
});
const FinalCTASection = dynamic(() => import('../components/FinalCTASection'), {
  loading: () => <div className="min-h-[400px] bg-[#0a0a0a]" />,
});
const ContactSection = dynamic(() => import('../components/ContactSection'), {
  loading: () => <div className="min-h-[400px] bg-[#fcf8f3]" />,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="min-h-[200px] bg-[#0a0a0a]" />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <HeroSection />
      <DiagnosticSection />
      <StickyHorizontalScroll />
      <ComparisonSection />
      <HowItWorksSection />
      <ValuePropositionSection />
      <div id="industrias">
        <IndustriesSection />
      </div>
      <TestimonialsSection />
      <PricingSection />
      <div id="faq">
        <FAQSection />
      </div>
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
