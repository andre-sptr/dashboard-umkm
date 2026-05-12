import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const legacyTokenPattern = /--(?:pure-white|navy-deep|almost-black|deep-indigo|charcoal|medium-gray|purple-muted|dark-gray|purple-glow|lavender-light|electric-blue|sky-blue|primary-accent|shadow-raised|shadow-lifted|shadow-floating|font-heading|font-body)\b/;
const spacingAliasPattern = /--space-next-\d+\b/;

const collectSources = (dir) => {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      files.push(...collectSources(path));
    } else if (/\.(css|js|mjs|json)$/.test(entry)) {
      files.push(path);
    }
  }

  return files;
};

test('temporary token aliases are removed from source styles', () => {
  const files = collectSources('src');

  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    assert.doesNotMatch(source, legacyTokenPattern, `${file} still references a legacy token alias`);
    assert.doesNotMatch(source, spacingAliasPattern, `${file} still references a temporary spacing alias`);
  }
});

test('globals.css no longer carries migration scaffolding', () => {
  const globals = readFileSync('src/app/globals.css', 'utf8');

  assert.doesNotMatch(globals, /Temporary alias block/);
  assert.doesNotMatch(globals, /TOKEN MIGRATION CHECKLIST/);
});
