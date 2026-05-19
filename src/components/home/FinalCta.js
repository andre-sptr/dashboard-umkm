import Eyebrow from '@/components/UI/Eyebrow';
import MagneticButton from '@/components/fx/MagneticButton';
import ScrollReveal from '@/components/fx/ScrollReveal';
import SplitHeading from '@/components/fx/SplitHeading';
import { whatsappUrl } from '@/data/homeData';
import styles from '@/app/page.module.css';

export default function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <div className={styles.finalCtaBox}>
          <Eyebrow>Ready to ship?</Eyebrow>
          <SplitHeading as="h2">
            Bangun landing page yang membuat calon pelanggan yakin sebelum chat pertama.
          </SplitHeading>
          <ScrollReveal>
            <MagneticButton as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
              Mulai Konsultasi Gratis →
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
