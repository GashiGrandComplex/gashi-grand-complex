import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ApartmentsSection } from '@/components/ApartmentsSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { AmenitiesSection } from '@/components/AmenitiesSection';
import { StatsSection } from '@/components/StatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ApartmentsSection />
      <WhyChooseUsSection />
      <AmenitiesSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
