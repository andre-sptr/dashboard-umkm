import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

const collectModuleCss = (dir) => {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);

    if (statSync(path).isDirectory()) {
      files.push(...collectModuleCss(path));
      continue;
    }

    if (path.endsWith('.module.css')) {
      files.push(path);
    }
  }

  return files;
};

test('Reveal respects reduced motion before attaching IntersectionObserver', () => {
  const source = read('src/components/UI/Reveal.js');
  const matchMediaIndex = source.indexOf("window.matchMedia('(prefers-reduced-motion: reduce)').matches");
  const initialStateIndex = source.indexOf('useState(prefersReducedMotion)');
  const reducedMotionGuardIndex = source.indexOf('if (prefersReducedMotion())');
  const observerIndex = source.indexOf('new IntersectionObserver');

  assert.notEqual(matchMediaIndex, -1);
  assert.ok(initialStateIndex > matchMediaIndex);
  assert.ok(reducedMotionGuardIndex > initialStateIndex);
  assert.ok(observerIndex > reducedMotionGuardIndex);
});

test('global styles expose focus-visible and reduced-motion reveal guards', () => {
  const css = read('src/app/globals.css');

  assert.match(css, /a:focus-visible,\s*button:focus-visible,\s*input:focus-visible,\s*textarea:focus-visible,\s*select:focus-visible,\s*\[role="button"\]:focus-visible,\s*\[tabindex\]:not\(\[tabindex="-1"\]\):focus-visible\s*\{[^}]*outline:\s*2px solid var\(--focus-ring\)[^}]*outline-offset:\s*2px/s);
  assert.match(css, /\.reveal-wrapper\s*\{[^}]*transform:\s*translateY\(var\(--reveal-distance\)\)[^}]*opacity var\(--duration-slow\) var\(--ease-out\)[^}]*transform var\(--duration-slow\) var\(--ease-out\)/s);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)\s*\{\s*\.reveal-wrapper\s*\{[^}]*opacity:\s*1[^}]*transform:\s*none[^}]*transition:\s*none/s);
});

test('CSS modules avoid transition all and hardcoded transition durations', () => {
  const moduleFiles = collectModuleCss('src');
  assert.ok(moduleFiles.length > 0);

  for (const file of moduleFiles) {
    const css = read(file);

    assert.doesNotMatch(css, /transition:\s*all\b/i, `${file} must not use transition: all`);
    assert.doesNotMatch(css, /transition:[^;]*(?:\d+(?:\.\d+)?s|\d+ms)/i, `${file} transition timing must use tokens`);
  }
});
