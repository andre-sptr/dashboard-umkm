import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

const sourceFiles = (dir) => {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      files.push(...sourceFiles(path));
    } else if (/\.(css|js|mjs|json)$/.test(entry)) {
      files.push(path);
    }
  }

  return files;
};

test('font loading is consolidated on next/font Plus Jakarta Sans', () => {
  const layout = read('src/app/layout.js');
  const globals = read('src/app/globals.css');
  const packageJson = JSON.parse(read('package.json'));
  const sources = sourceFiles('src');

  assert.match(layout, /Plus_Jakarta_Sans/);
  assert.match(layout, /variable:\s*["']--font-plus-jakarta-sans["']/);
  assert.doesNotMatch(layout, /fontshare/i);
  assert.doesNotMatch(layout, /api\.fontshare\.com/i);

  assert.equal(packageJson.dependencies?.['@fontsource/inter'], undefined);
  assert.doesNotMatch(read('package-lock.json'), /@fontsource\/inter/);

  assert.match(globals, /--font-display:\s*var\(--font-plus-jakarta-sans\), system-ui, -apple-system, sans-serif;/);
  assert.doesNotMatch(globals, /--font-heading\s*:/);
  assert.doesNotMatch(globals, /--font-body\s*:/);

  for (const path of sources) {
    const source = read(path);
    assert.doesNotMatch(source, /--font-heading|--font-body/, `${path} uses canonical --font-display`);
  }
});
