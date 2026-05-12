import Button from '@/components/UI/Button';
import Eyebrow from '@/components/UI/Eyebrow';
import Reveal from '@/components/UI/Reveal';
import { whatsappUrl } from '@/data/homeData';
import styles from '@/app/page.module.css';

export function CommandCenterMockup() {
  return (
    <div className={styles.commandShell} aria-label="Mockup landing page UMKM">
      <div className={styles.commandTop}>
        <span className={styles.browserBar}></span>
        <strong>Preview landing page</strong>
      </div>
      <div className={styles.productPreview}>
        <div className={styles.previewNav}>
          <span>Dapur Rendang Riau</span>
          <small>Landing page live</small>
        </div>
        <div className={styles.previewHero}>
          <p>Paket nasi box premium Pekanbaru</p>
          <h3>Pesanan kantor lebih mudah, cepat, dan rapi.</h3>
          <div className={styles.previewButton}>Pesan via WhatsApp</div>
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
      <div className={`container ${styles.heroContainer}`}>
        <Reveal>
          <div className={styles.heroContent}>
            <Eyebrow>Jasa landing page premium untuk UMKM Pekanbaru</Eyebrow>
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
            <div className={styles.trustBar} aria-label="Sinyal layanan PekanWeb Studio">
              <span>Pekanbaru</span>
              <span>Mulai 7 hari</span>
              <span>Bergaransi revisi</span>
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
