import Link from 'next/link';
import Button from '../UI/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>PW</span>
          <span className={styles.logoCopy}>
            <span className={styles.logoText}>PekanWeb</span>
            <span className={styles.logoAccent}>Studio</span>
          </span>
        </Link>
        
        <ul className={styles.links}>
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/proses">Proses</Link></li>
          <li><Link href="/portofolio">Portofolio</Link></li>
          <li><Link href="/harga">Harga</Link></li>
          <li><Link href="/kontak">Kontak</Link></li>
        </ul>
        
        <div className={styles.cta} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button as={Link} href="/kontak" size="sm">Konsultasi Gratis</Button>
        </div>
      </div>
    </nav>
  );
}
