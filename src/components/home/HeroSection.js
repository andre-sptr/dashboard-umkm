'use client';

import Eyebrow from '@/components/UI/Eyebrow';
import MagneticButton from '@/components/fx/MagneticButton';
import SplitHeading from '@/components/fx/SplitHeading';
import ScrollReveal from '@/components/fx/ScrollReveal';
import { whatsappUrl } from '@/data/homeData';
import styles from '@/app/page.module.css';

export function CommandCenterMockup() {
  return (
    <div className={styles.commandShell} aria-label="Mockup landing page UMKM">
      <div className={styles.commandTop}>
        <span className={styles.browserBar}></span>
        <strong>pekanweb / live preview</strong>
      </div>
      <div className={styles.productPreview}>
        <div className={styles.previewNav}>
          <span>UMKM Pekanbaru</span>
          <small>online · WA ready</small>
        </div>
        <div className={styles.previewHero}>
          <p>Paket nasi box premium Pekanbaru</p>
          <h3>Pesanan kantor lebih mudah, cepat, dan rapi.</h3>
          <div className={styles.previewButton}>Pesan via WhatsApp →</div>
        </div>
        <div className={styles.previewSections}>
          <span>Menu favorit</span>
          <span>Testimoni</span>
          <span>Order WA</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroAura} aria-hidden="true" />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <Eyebrow>PekanWeb · Studio Interaktif</Eyebrow>
          <SplitHeading as="h1">
            Ubah usaha lokal Anda jadi brand yang dipercaya.
          </SplitHeading>
          <ScrollReveal>
            <p className={styles.heroLead}>
              Landing page mewah, cepat, dan fokus menjual. Satu link profesional untuk profil bisnis, katalog, lokasi, bukti kerja, chat WhatsApp, dan opsi AI chatbot — dirancang dengan motion modern dan presisi engineering.
            </p>
            <div className={styles.heroCta}>
              <MagneticButton as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
                Konsultasi via WhatsApp →
              </MagneticButton>
            </div>
            <div className={styles.trustBar} aria-label="Sinyal layanan PekanWeb Studio">
              <span>Pekanbaru</span>
              <span>Mulai 7 hari</span>
              <span>Bergaransi revisi</span>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <CommandCenterMockup />
        </ScrollReveal>
      </div>
    </section>
  );
}
