import styles from './page.module.css';

import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import PricingSection from '@/components/home/PricingSection';
import ProcessSection from '@/components/home/ProcessSection';
import FaqSection from '@/components/home/FaqSection';
import FinalCta from '@/components/home/FinalCta';

export const metadata = {
  title: 'Jasa Landing Page UMKM Pekanbaru | PekanWeb Studio',
  description: 'Jasa pembuatan landing page premium untuk UMKM Pekanbaru dengan opsi AI chatbot dan WA chatbot produk untuk membantu calon pelanggan.',
};

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PortfolioSection />
      <PricingSection />
      <ProcessSection />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
