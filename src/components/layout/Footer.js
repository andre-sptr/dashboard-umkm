import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <span className={styles.logoText}>PekanWeb</span>
            <span className={styles.logoAccent}>Studio</span>
          </div>
          <p className={styles.description}>
            Partner transformasi digital terpercaya untuk UMKM di Pekanbaru. Kami membantu bisnis lokal tumbuh lebih cepat dengan website modern.
          </p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.linkGroup}>
            <h4>Layanan</h4>
            <ul>
              <li><Link href="/">Website Company Profile</Link></li>
              <li><Link href="/">E-commerce UMKM</Link></li>
              <li><Link href="/">Landing Page Produk</Link></li>
            </ul>
          </div>
          
          <div className={styles.linkGroup}>
            <h4>Perusahaan</h4>
            <ul>
              <li><Link href="/proses">Proses Kerja</Link></li>
              <li><Link href="/portofolio">Portofolio</Link></li>
              <li><Link href="/harga">Harga Paket</Link></li>
            </ul>
          </div>
          
          <div className={styles.linkGroup}>
            <h4>Kontak</h4>
            <ul>
              <li>Pekanbaru, Riau</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} PekanWeb Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
