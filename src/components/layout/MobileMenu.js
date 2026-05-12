'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

const menuTabbableSelector = [
  '[data-mobile-menu-nav-link]',
  '[data-mobile-menu-cta]',
  '[data-mobile-menu-close]',
].join(',');

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const mobileViewport = window.matchMedia('(max-width: 820px)');
    const handleViewportChange = (event) => {
      if (!event.matches) {
        setIsOpen(false);
      }
    };

    mobileViewport.addEventListener('change', handleViewportChange);

    const panel = panelRef.current;
    const menuTabbables = panel ? [...panel.querySelectorAll(menuTabbableSelector)] : [];
    const focusable = menuTabbables.length
      ? menuTabbables
      : panel
        ? [...panel.querySelectorAll(focusableSelector)]
        : [];
    const firstFocusable = menuTabbables[0] ?? focusable[0];
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
      mobileViewport.removeEventListener('change', handleViewportChange);
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
                data-mobile-menu-close
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <nav className={styles.navLinks} aria-label="Navigasi mobile">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={closeMenu}
                    data-mobile-menu-nav-link
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Button
              as={Link}
              href="/kontak"
              size="lg"
              fullWidth
              className={styles.cta}
              onClick={closeMenu}
              data-mobile-menu-cta
            >
              Konsultasi Gratis
            </Button>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
