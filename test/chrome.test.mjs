import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

test('navbar chrome exposes a complete mobile menu contract', () => {
  assert.ok(existsSync('src/components/layout/MobileMenu.js'));
  assert.ok(existsSync('src/components/layout/MobileMenu.module.css'));

  const navbar = read('src/components/layout/Navbar.js');
  const mobileMenu = read('src/components/layout/MobileMenu.js');
  const mobileMenuCss = read('src/components/layout/MobileMenu.module.css');

  assert.match(navbar, /MobileMenu/);
  assert.doesNotMatch(navbar, /style=\{\{/);

  for (const href of ['/', '/proses', '/portofolio', '/harga', '/kontak']) {
    assert.match(mobileMenu, new RegExp(`href: ['"]${href.replace('/', '\\/')}['"]`));
  }

  assert.match(mobileMenu, /Konsultasi/);
  assert.match(mobileMenu, /usePathname/);
  assert.match(mobileMenu, /const isActive = pathname === link\.href/);
  assert.match(mobileMenu, /styles\.navLinkActive/);
  assert.match(mobileMenu, /aria-current=\{isActive \? 'page' : undefined\}/);
  assert.match(mobileMenu, /Escape/);
  assert.match(mobileMenu, /document\.body\.style\.overflow/);
  assert.match(mobileMenu, /const firstFocusable = menuTabbables\[0\] \?\? focusable\[0\]/);
  assert.match(mobileMenu, /lastFocusable/);
  assert.match(mobileMenuCss, /@media \(max-width: 820px\)/);
  assert.match(mobileMenuCss, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(mobileMenuCss, /min-height:\s*44px/);
  assert.match(mobileMenuCss, /\.navLinkActive/);
  assert.match(mobileMenuCss, /color:\s*var\(--blue-700\)/);
});

test('mobile menu focuses nav items before chrome controls', () => {
  const mobileMenu = read('src/components/layout/MobileMenu.js');
  const navSelectorIndex = mobileMenu.indexOf("'[data-mobile-menu-nav-link]'");
  const ctaSelectorIndex = mobileMenu.indexOf("'[data-mobile-menu-cta]'");
  const closeSelectorIndex = mobileMenu.indexOf("'[data-mobile-menu-close]'");

  assert.notEqual(navSelectorIndex, -1);
  assert.notEqual(ctaSelectorIndex, -1);
  assert.notEqual(closeSelectorIndex, -1);
  assert.ok(navSelectorIndex < ctaSelectorIndex);
  assert.ok(ctaSelectorIndex < closeSelectorIndex);
  assert.match(mobileMenu, /const menuTabbables = panel \? \[\.\.\.panel\.querySelectorAll\(menuTabbableSelector\)\] : \[\]/);
  assert.match(mobileMenu, /data-mobile-menu-nav-link/);
  assert.match(mobileMenu, /data-mobile-menu-close/);
});

test('mobile menu closes when viewport crosses above the mobile breakpoint', () => {
  const mobileMenu = read('src/components/layout/MobileMenu.js');

  assert.match(mobileMenu, /window\.matchMedia\('\(max-width: 820px\)'\)/);
  assert.match(mobileMenu, /mobileViewport\.addEventListener\('change', handleViewportChange\)/);
  assert.match(mobileMenu, /if \(!event\.matches\) \{\s*setIsOpen\(false\);\s*\}/);
  assert.match(mobileMenu, /mobileViewport\.removeEventListener\('change', handleViewportChange\)/);
  assert.match(mobileMenu, /document\.body\.style\.overflow = previousOverflow/);
});

test('root layout has a skip link targeting the main content', () => {
  const layout = read('src/app/layout.js');

  assert.match(layout, /href="#main"/);
  assert.match(layout, /Lewati ke konten utama/);
  assert.match(layout, /<main[^>]*id="main"/);
  assert.doesNotMatch(layout, /<main[^>]*style=\{\{/);
});

test('footer uses a light surface without dark leftovers', () => {
  const footerCss = read('src/components/layout/Footer.module.css');

  assert.doesNotMatch(footerCss, /rgba\(255,\s*255,\s*255/);
  assert.doesNotMatch(footerCss, /linear-gradient/);
  assert.doesNotMatch(footerCss, /--navy-deep/);
  assert.match(footerCss, /background(?:-color)?:\s*var\(--white\)/);
});
