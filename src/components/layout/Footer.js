import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoOrb} aria-hidden="true" />
              <div>
                <div className={styles.logoText}>PekanWeb<span>/studio</span></div>
                <div className={styles.tagline}>Digital partner for Pekanbaru UMKM</div>
              </div>
            </div>
            <p className={styles.description}>
              Kami merancang landing page premium yang membuat usaha lokal terlihat profesional, dipercaya, dan siap dijual lewat WhatsApp.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Layanan</h4>
              <ul>
                <li><Link href="/demo">Landing Page UMKM</Link></li>
                <li><Link href="/demo">Profile 5 Halaman</Link></li>
                <li><Link href="/harga">AI Chatbot</Link></li>
                <li><Link href="/harga">WA Chatbot Produk</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Studio</h4>
              <ul>
                <li><Link href="/proses">Proses Kerja</Link></li>
                <li><Link href="/demo">Showcase</Link></li>
                <li><Link href="/harga">Harga & Paket</Link></li>
                <li><Link href="/kontak">Kontak</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Kontak</h4>
              <ul>
                <li>Pekanbaru, Riau</li>
                <li>WhatsApp +62 823 8702 5429</li>
                <li><a href="mailto:hello@pekanweb.studio">hello@pekanweb.studio</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>© {new Date().getFullYear()} PekanWeb Studio</span>
          <span className={styles.note}>Built with GSAP &times; Three.js</span>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.note}>Made in Pekanbaru</span>
        </div>
      </div>
      <div className={styles.bigType} aria-hidden="true">PEKANWEB</div>
    </footer>
  );
}
