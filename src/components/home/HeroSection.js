import Button from '@/components/UI/Button';
import Reveal from '@/components/UI/Reveal';
import { whatsappUrl } from '@/data/homeData';
import styles from '@/app/page.module.css';

export function CommandCenterMockup() {
  return (
    <div className={styles.commandShell} aria-label="Mockup command center landing page UMKM">
      <div className={styles.commandTop}>
        <span></span>
        <span></span>
        <span></span>
        <strong>UMKM Growth OS</strong>
      </div>
      <div className={styles.commandGrid}>
        <div className={styles.websitePreview}>
          <div className={styles.previewNav}>
            <span>Brand UMKM</span>
            <small>Landing page live</small>
          </div>
          <div className={styles.previewHero}>
            <p>Paket nasi box premium Pekanbaru</p>
            <h3>Pesanan kantor lebih mudah, cepat, dan rapi.</h3>
            <div className={styles.previewButton}>Pesan via WhatsApp</div>
          </div>
          <div className={styles.previewCards}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.signalStack}>
          <div className={styles.signalCard}>
            <small>Lead masuk</small>
            <strong>38</strong>
            <span>+19% minggu ini</span>
          </div>
          <div className={styles.chatCard}>
            <small>WhatsApp inquiry</small>
            <p>Halo, produk best seller yang ready hari ini apa saja?</p>
          </div>
          <div className={styles.mapCard}>
            <span>Pekanbaru</span>
            <div className={styles.mapPulse}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <Reveal>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Jasa landing page premium untuk UMKM Pekanbaru</p>
            <h1>Ubah usaha lokal Anda jadi brand yang dipercaya.</h1>
            <p className={styles.heroLead}>
              PekanWeb Studio membuat landing page mewah, cepat, dan fokus menjual. Satu link profesional untuk profil bisnis, katalog, lokasi, bukti kerja, chat WhatsApp, dan opsi AI chatbot.
            </p>
            <div className={styles.heroCta}>
              <Button as="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
                Konsultasi via WhatsApp
              </Button>
              <Button as="a" href="#demo" variant="secondary" size="lg">
                Lihat Demo
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <CommandCenterMockup />
        </Reveal>
      </div>
    </section>
  );
}
