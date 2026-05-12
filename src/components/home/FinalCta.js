import Button from '@/components/UI/Button';
import Eyebrow from '@/components/UI/Eyebrow';
import Reveal from '@/components/UI/Reveal';
import { whatsappUrl } from '@/data/homeData';
import styles from '@/app/page.module.css';

export default function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <Reveal>
        <div className={`container ${styles.finalCtaBox}`}>
          <Eyebrow>Siap terlihat lebih profesional?</Eyebrow>
          <h2>Bangun landing page yang membuat calon pelanggan yakin sebelum chat pertama.</h2>
          <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Mulai Konsultasi Gratis
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
