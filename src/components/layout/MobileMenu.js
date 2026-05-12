'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '../UI/Button';
import styles from './MobileMenu.module.css';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/proses', label: 'Proses' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/harga', label: 'Harga' },
  { href: '/kontak', label: 'Kontak' },
];

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const focusable = panel ? [...panel.querySelectorAll(focusableSelector)] : [];
    const firstFocusable = focusable[0];
    firstFocusable?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) {
        return;
      }

      const lastFocusable = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.mobileMenu}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {isOpen ? (
        <div className={styles.portal}>
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Tutup menu navigasi"
            onClick={closeMenu}
          />
          <aside
            ref={panelRef}
            id="mobile-navigation"
            className={styles.panel}
            aria-label="Navigasi utama"
          >
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Menu</span>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Tutup menu navigasi"
                onClick={closeMenu}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <nav className={styles.navLinks} aria-label="Navigasi mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button
              as={Link}
              href="/kontak"
              size="lg"
              fullWidth
              className={styles.cta}
              onClick={closeMenu}
            >
              Konsultasi Gratis
            </Button>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
