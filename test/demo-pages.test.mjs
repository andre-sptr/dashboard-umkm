import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

const themeNames = ['rendang', 'batik', 'cleaning'];

test('demo pages use shared primitives instead of local eyebrow and button chrome', () => {
  const page = read('src/app/client/[slug]/page.js');
  const css = read('src/app/client/[slug]/client.module.css');

  assert.match(page, /import Eyebrow from '@\/components\/UI\/Eyebrow'/);
  assert.match(page, /import Button from '@\/components\/UI\/Button'/);
  assert.match(page, /<Eyebrow/);
  assert.match(page, /<Button/);
  assert.match(page, /CulinaryDemo/);
  assert.match(page, /LookbookDemo/);
  assert.match(page, /ServiceDemo/);
  assert.doesNotMatch(page, /styles\.brandLine/);
  assert.doesNotMatch(css, /\.brandLine\b|\.primaryButton\b|\.secondaryButton\b/);
});

test('demo theme accents are wired once per theme through root tokens', () => {
  const css = read('src/app/client/[slug]/client.module.css');

  for (const theme of themeNames) {
    const block = css.match(new RegExp(`\\.${theme}\\s*\\{(?<body>[^}]*)\\}`))?.groups?.body ?? '';

    assert.match(block, new RegExp(`--demo-accent:\\s*var\\(--demo-accent-${theme}\\)`), `${theme} references its accent token`);
    assert.equal((block.match(/--demo-accent:/g) ?? []).length, 1, `${theme} declares --demo-accent once`);
    assert.doesNotMatch(block, /--demo-accent-strong|--demo-accent-soft|--demo-line/, `${theme} does not duplicate derived accent variants`);
  }

  assert.doesNotMatch(css, /#[0-9a-f]{3,8}/i, 'demo CSS has no hardcoded hex colors');
  assert.match(css, /color-mix\(in srgb,\s*var\(--demo-accent\)\s+12%,\s*white\)/);
});

test('demo page CSS is rewritten to light surfaces without hardcoded section padding', () => {
  const css = read('src/app/client/[slug]/client.module.css');

  assert.doesNotMatch(css, /LiteLLM-inspired/);
  assert.doesNotMatch(css, /120px 0 80px/);
  assert.doesNotMatch(css, /rgba\(0,\s*0,\s*0,\s*0\.2\)|rgba\(255,\s*255,\s*255,\s*0\.05\)/);
  assert.match(css, /background(?:-color)?:\s*var\(--white\)/);
  assert.match(css, /--demo-soft:\s*var\(--gray-50\)/);
  assert.match(css, /color:\s*var\(--gray-900\)/);
});
