import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

test('home hero mockup is a single light-surface product preview with trust signals', () => {
  const hero = read('src/components/home/HeroSection.js');
  const css = read('src/app/page.module.css');

  assert.match(hero, /Eyebrow/);
  assert.match(hero, /productPreview/);
  assert.match(hero, /Pekanbaru/);
  assert.match(hero, /Mulai 7 hari/);
  assert.match(hero, /Bergaransi revisi/);
  assert.doesNotMatch(hero, /signalCard|chatCard|mapCard|mapPulse|Lead masuk|WhatsApp inquiry/);

  assert.match(css, /\.productPreview\s*\{/);
  assert.match(css, /\.browserBar\s*\{/);
  assert.doesNotMatch(css, /\.signalCard|\.chatCard|\.mapCard|\.mapPulse/);
});

test('all home sections consume the shared Eyebrow primitive', () => {
  const sections = [
    'HeroSection',
    'ProblemSection',
    'SolutionSection',
    'PortfolioSection',
    'PricingSection',
    'ProcessSection',
    'FaqSection',
    'FinalCta',
  ];

  for (const section of sections) {
    const source = read(`src/components/home/${section}.js`);
    assert.match(source, /Eyebrow/, `${section} imports or renders Eyebrow`);
    assert.match(source, /<Eyebrow>/, `${section} renders Eyebrow`);
    assert.doesNotMatch(source, /styles\.eyebrow|styles\.eyebrowDark|styles\.kicker|styles\.brandLine/);
  }

  const css = read('src/app/page.module.css');
  assert.doesNotMatch(css, /\.eyebrow\b|\.eyebrowDark\b|\.kicker\b|\.brandLine\b/);
});

test('solution section uses an asymmetric feature layout instead of a symmetric four-card grid', () => {
  const solution = read('src/components/home/SolutionSection.js');
  const css = read('src/app/page.module.css');

  assert.match(solution, /featuredValue/);
  assert.match(solution, /supportingValues/);
  assert.match(css, /\.valueGrid\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1\.15fr\) minmax\(0,\s*0\.85fr\)/s);
  assert.match(css, /\.featuredValue\s*\{/);
  assert.match(css, /\.supportingValues\s*\{/);
});

test('pricing section has tokenized addon controls without inline styling or orange leftovers', () => {
  const pricing = read('src/components/home/PricingSection.js');
  const css = read('src/app/page.module.css');

  assert.doesNotMatch(pricing, /style=\{\{/);
  assert.doesNotMatch(pricing, /onMouseOver|onMouseOut|#f0b955/i);
  for (const className of ['addonList', 'addonTitle', 'addonOption', 'addonCheckbox', 'addonMeta', 'addonPrice', 'priceValue']) {
    assert.match(pricing, new RegExp(`styles\\.${className}`));
    assert.match(css, new RegExp(`\\.${className}\\s*\\{`));
  }
  assert.match(css, /accent-color:\s*var\(--accent-warm\)/);
});

test('portfolio section renders demo projects through the PortfolioCard primitive', () => {
  const portfolio = read('src/components/home/PortfolioSection.js');

  assert.match(portfolio, /PortfolioCard/);
  assert.match(portfolio, /<PortfolioCard demo=\{demo\}/);
  assert.doesNotMatch(portfolio, /style=\{\{/);
  assert.doesNotMatch(portfolio, /styles\.demoContent|styles\.demoSections|styles\.demoStats/);
});

test('home page has alternating light section surfaces', () => {
  const css = read('src/app/page.module.css');

  assert.match(css, /\.problemSection,[^}]*background-color:\s*var\(--white\)/s);
  assert.match(css, /\.solutionSection,[^}]*background-color:\s*var\(--gray-50\)/s);
  assert.match(css, /\.finalCtaBox\s*\{[^}]*background:\s*var\(--white\)/s);
  assert.doesNotMatch(css, /rgba\(255,\s*255,\s*255,\s*0\.05\)|rgba\(0,\s*0,\s*0,\s*0\.2\)/);
}
);
