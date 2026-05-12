import Link from 'next/link';
import Button from '../UI/Button';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/proses', label: 'Proses' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/harga', label: 'Harga' },
  { href: '/kontak', label: 'Kontak' },
];

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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        
        <div className={styles.cta}>
          <Button as={Link} href="/kontak" size="sm">Konsultasi Gratis</Button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
