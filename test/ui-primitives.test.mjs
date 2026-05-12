import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');
const require = createRequire(import.meta.url);
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { transformSync } = require('next/dist/build/swc');

const projectRoot = resolve('.');
const originalJsLoader = require.extensions['.js'];

require.extensions['.css'] = (module) => {
  module.exports = new Proxy({}, {
    get(_target, prop) {
      return prop === '__esModule' ? false : String(prop);
    },
  });
};

require.extensions['.js'] = (module, filename) => {
  const normalized = resolve(filename);

  if (normalized.startsWith(`${projectRoot}${sep}src${sep}`)) {
    const source = readFileSync(normalized, 'utf8');
    const output = transformSync(source, {
      filename: normalized,
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
      module: {
        type: 'commonjs',
      },
    });

    module._compile(output.code, normalized);
    return;
  }

  originalJsLoader(module, filename);
};

const importProjectModule = (path) => require(resolve(path));

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
  assert.match(component, /Wrapper = isLinked \? Link : 'article'/);
  assert.match(component, /'aria-label': `Lihat demo \$\{demo\.title\}`/);
  assert.match(component, /ctaLabel/);
  assert.doesNotMatch(component, /style=\{\{/);

  for (const className of ['demoContent', 'demoSections', 'demoStats', 'demoVisual', 'demoBadge', 'placeholderCard']) {
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

test('chatbot widget uses CSS module light surfaces and explicit demo disclosure', () => {
  assert.ok(existsSync('src/components/UI/ChatbotWidget.module.css'));

  const component = read('src/components/UI/ChatbotWidget.js');
  const css = read('src/components/UI/ChatbotWidget.module.css');
  const combined = `${component}\n${css}`;
  const missingTokenPattern = /--primary|--surface-container-[\w-]+|--on-primary|--outline-variant|--surface\b|--shadow-medium|--foreground/;

  assert.match(component, /import styles from '\.\/ChatbotWidget\.module\.css'/);
  assert.doesNotMatch(component, /style=\{\{/);
  assert.match(component, /Halo! Ini contoh AI assistant yang bisa Anda miliki di website UMKM Anda\. Coba tanya tentang harga atau waktu pengerjaan\./);
  assert.match(component, />Demo</);
  assert.match(component, /onKeyDown=\{handleKeyDown\}/);
  assert.match(component, /e\.key === 'Escape'/);

  for (const className of ['toggle', 'window', 'header', 'demoBadge', 'messages', 'botBubble', 'userBubble', 'inputBar', 'sendButton']) {
    assert.match(component, new RegExp(`styles\\.${className}`));
    assert.match(css, new RegExp(`\\.${className}\\s*\\{`));
  }

  assert.match(css, /\.toggle\s*\{[^}]*width:\s*60px[^}]*height:\s*60px/s);
  assert.match(css, /\.toggle\s*\{[^}]*background:\s*var\(--white\)[^}]*border:\s*1px solid var\(--gray-200\)[^}]*box-shadow:\s*var\(--shadow-lg\)/s);
  assert.match(css, /\.toggle:focus-visible\s*\{[^}]*outline:\s*2px solid var\(--focus-ring\)/s);
  assert.match(css, /\.window\s*\{[^}]*background:\s*var\(--white\)[^}]*border:\s*1px solid var\(--gray-200\)/s);
  assert.match(css, /\.botBubble\s*\{[^}]*background:\s*var\(--gray-100\)/s);
  assert.match(css, /\.userBubble\s*\{[^}]*background:\s*var\(--blue-700\)/s);
  assert.doesNotMatch(combined, missingTokenPattern);
});

test('UI primitives import and render standalone with representative props', () => {
  const Eyebrow = importProjectModule('src/components/UI/Eyebrow.js').default;
  const Button = importProjectModule('src/components/UI/Button.js').default;
  const PortfolioCard = importProjectModule('src/components/UI/PortfolioCard.js').default;
  const WhatsAppButton = importProjectModule('src/components/UI/WhatsAppButton.js').default;
  const ChatbotWidget = importProjectModule('src/components/UI/ChatbotWidget.js').default;
  const { demoProjects } = importProjectModule('src/data/homeData.js');

  const eyebrow = renderToStaticMarkup(React.createElement(Eyebrow, null, 'Demo UMKM'));
  const button = renderToStaticMarkup(React.createElement(Button, { as: 'a', href: '/kontak' }, 'Konsultasi'));
  const card = renderToStaticMarkup(React.createElement(PortfolioCard, { demo: demoProjects[0] }));
  const whatsapp = renderToStaticMarkup(React.createElement(WhatsAppButton, {
    phoneNumber: '628123456789',
    message: 'Halo',
  }));
  const chatbot = renderToStaticMarkup(React.createElement(ChatbotWidget));

  assert.match(eyebrow, /Demo UMKM/);
  assert.match(button, /href="\/kontak"/);
  assert.match(button, /Konsultasi/);
  assert.match(card, /href="\/demo\/dapur-rendang-riau"/);
  assert.match(card, /Dapur Rendang Riau/);
  assert.match(card, /Lihat Detail Demo/);
  assert.match(whatsapp, /href="https:\/\/wa\.me\/628123456789\?text=Halo"/);
  assert.match(whatsapp, /Chat PekanWeb/);
  assert.match(chatbot, /AI Assistant/);
  assert.match(chatbot, /Demo/);
});

test('portfolio card renders linked and placeholder modes without fake hrefs', () => {
  const PortfolioCard = importProjectModule('src/components/UI/PortfolioCard.js').default;
  const { demoProjects } = importProjectModule('src/data/homeData.js');
  const linked = renderToStaticMarkup(React.createElement(PortfolioCard, { demo: demoProjects[1] }));
  const placeholderDemo = {
    ...demoProjects[2],
    title: 'Coming Soon UMKM',
    href: undefined,
    isPlaceholder: true,
  };
  const placeholder = renderToStaticMarkup(React.createElement(PortfolioCard, {
    demo: placeholderDemo,
    ctaLabel: 'Coming soon',
  }));

  assert.match(linked, /<a /);
  assert.match(linked, /href="\/demo\/loka-batik-pekanbaru"/);
  assert.match(linked, /Lihat Detail Demo/);
  assert.match(placeholder, /<article /);
  assert.match(placeholder, /Coming Soon UMKM/);
  assert.match(placeholder, /Coming soon/);
  assert.match(placeholder, /aria-disabled="true"/);
  assert.doesNotMatch(placeholder, /<a /);
  assert.doesNotMatch(placeholder, /href="#"/);
});
