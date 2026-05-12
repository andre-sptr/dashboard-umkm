import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

const minHeightFor = (css, selector) => {
  const match = css.match(new RegExp(`${selector}\\s*\\{[^}]*min-height:\\s*(\\d+)px`, 's'));
  assert.ok(match, `${selector} declares min-height`);
  return Number(match[1]);
};

test('eyebrow primitive exposes the canonical tokenized treatment', () => {
  assert.ok(existsSync('src/components/UI/Eyebrow.js'));
  assert.ok(existsSync('src/components/UI/Eyebrow.module.css'));

  const component = read('src/components/UI/Eyebrow.js');
  const css = read('src/components/UI/Eyebrow.module.css');

  assert.match(component, /children/);
  assert.match(component, /styles\.eyebrow/);
  assert.match(css, /text-transform:\s*uppercase/);
  assert.match(css, /letter-spacing:\s*0\.08em/);
  assert.match(css, /color:\s*var\(--blue-700\)/);
  assert.match(css, /width:\s*34px/);
});

test('button primitive uses display font, 44px touch targets, and focus-visible ring', () => {
  const css = read('src/components/UI/Button.module.css');

  assert.match(css, /font-family:\s*var\(--font-display\)/);
  assert.match(css, /font-size:\s*14px/);
  assert.match(css, /\.button\s*\{[^}]*min-height:\s*44px/s);
  assert.match(css, /\.sm\s*\{[^}]*min-height:\s*44px/s);
  assert.match(css, /\.lg\s*\{[^}]*min-height:\s*48px/s);
  assert.match(css, /\.button:focus-visible\s*\{[^}]*outline:\s*2px solid var\(--focus-ring\)/s);
});

test('portfolio card primitive reifies demo content classes without inline styles', () => {
  assert.ok(existsSync('src/components/UI/PortfolioCard.js'));
  assert.ok(existsSync('src/components/UI/PortfolioCard.module.css'));

  const component = read('src/components/UI/PortfolioCard.js');
  const css = read('src/components/UI/PortfolioCard.module.css');

  assert.match(component, /demo\s*=\s*\{\}/);
  assert.match(component, /demo\.sections/);
  assert.match(component, /demo\.stats/);
  assert.match(component, /aria-label=\{`Lihat demo \$\{demo\.title\}`\}/);
  assert.doesNotMatch(component, /style=\{\{/);

  for (const className of ['demoContent', 'demoSections', 'demoStats', 'demoVisual', 'demoBadge']) {
    assert.match(component, new RegExp(`styles\\.${className}`));
    assert.match(css, new RegExp(`\\.${className}\\s*\\{`));
  }

  assert.match(css, /background:\s*var\(--white\)/);
  assert.match(css, /@media \(max-width:\s*640px\)/);
  assert.doesNotMatch(css, /--border|--text-muted|--surface-container-low/);
});

test('whatsapp button is a light-surface green affordance with no orange leftovers', () => {
  const css = read('src/components/UI/WhatsAppButton.module.css');

  assert.match(css, /#25D366/i);
  assert.match(css, /background:\s*var\(--white\)/);
  assert.ok(minHeightFor(css, '\\.button') >= 44);
  assert.match(css, /transition:[^;]*var\(--duration-base\)[^;]*var\(--ease-out\)/s);
  assert.doesNotMatch(css, /#f0b955/i);
  assert.doesNotMatch(css, /linear-gradient/);
  assert.doesNotMatch(css, /--navy-deep/);
});
