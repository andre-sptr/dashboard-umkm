import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

const innerPages = [
  ['proses', 'src/app/proses/page.js', 'src/app/proses/proses.module.css'],
  ['demo', 'src/app/demo/page.js', 'src/app/demo/demo.module.css'],
  ['harga', 'src/app/harga/page.js', 'src/app/harga/harga.module.css'],
  ['kontak', 'src/app/kontak/page.js', 'src/app/kontak/kontak.module.css'],
];

test('inner pages use the shared Eyebrow primitive without local eyebrow classes', () => {
  for (const [route, pagePath, cssPath] of innerPages) {
    const page = read(pagePath);
    const css = read(cssPath);

    assert.match(page, /Eyebrow/, `${route} imports or renders Eyebrow`);
    assert.match(page, /<Eyebrow>/, `${route} renders Eyebrow`);
    assert.doesNotMatch(page, /styles\.(eyebrow|eyebrowDark|kicker|brandLine|formBadge)/, `${route} has no local eyebrow style usage`);
    assert.doesNotMatch(css, /\.(eyebrow|eyebrowDark|kicker|brandLine|formBadge)\b/, `${route} has no local eyebrow class definitions`);
  }
});

test('inner page styles use light surfaces without dark rgba panel leftovers', () => {
  for (const [route, _pagePath, cssPath] of innerPages) {
    const css = read(cssPath);

    assert.match(css, /background-color:\s*var\(--gray-50\)/, `${route} hero/main has a gray-50 light surface`);
    assert.doesNotMatch(css, /rgba\(0,\s*0,\s*0,\s*0\.2\)/, `${route} removes dark translucent panels`);
    assert.doesNotMatch(css, /rgba\(255,\s*255,\s*255,\s*0\.05\)/, `${route} removes dark white-glass panels`);
  }
});

test('demo page reuses live demo projects without placeholder cards', () => {
  const page = read('src/app/demo/page.js');
  const css = read('src/app/demo/demo.module.css');

  assert.match(page, /demoProjects/);
  assert.match(page, /PortfolioCard/);
  assert.match(page, /Demo dashboard/);
  assert.match(page, /demoProjects\.map/);
  assert.doesNotMatch(page, /comingSoon|isPlaceholder:\s*true/);
  assert.doesNotMatch(page, /Warung Kopi Nuri|Batik Riau Abadi|Klinik Cantik Pekanbaru|Jasa Servis AC Lancang|Pekanbaru Tour Guide|Agro Riau Mandiri/);
  assert.doesNotMatch(css, /\.projectCard|\.projectImage|\.mockTop|\.mockBody|\.category/);
});

test('kontak page states the WhatsApp handoff honestly', () => {
  const page = read('src/app/kontak/page.js');

  assert.match(page, /Isi brief singkat di bawah, lalu kami terima percakapannya di WhatsApp\./);
  assert.match(page, /Kirim brief via WhatsApp/);
  assert.doesNotMatch(page, /Chat via WhatsApp/);
});
