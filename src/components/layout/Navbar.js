'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import MagneticButton from '../fx/MagneticButton';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/proses', label: 'Proses' },
  { href: '/demo', label: 'Demo' },
  { href: '/harga', label: 'Harga' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} aria-label="PekanWeb Studio - Beranda">
          <span className={styles.logoMark} aria-hidden="true">
            <span className={styles.logoOrb} />
          </span>
          <span className={styles.logoCopy}>
            <span className={styles.logoText}>PekanWeb</span>
            <span className={styles.logoAccent}>/studio</span>
          </span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <MagneticButton as={Link} href="/kontak" size="sm" variant="primary">
            Konsultasi
          </MagneticButton>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
