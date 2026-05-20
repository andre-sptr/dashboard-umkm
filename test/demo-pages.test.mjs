import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(path, 'utf8');

test('client demo route and data have been removed', () => {
  assert.equal(existsSync('src/app/client'), false);
  assert.equal(existsSync('src/data/clientDemos.js'), false);
  assert.equal(existsSync('public/demo'), false);
});

test('demo page no longer renders showcase copy or demo cards', () => {
  const page = read('src/app/demo/page.js');
  const css = read('src/app/demo/demo.module.css');
  const homeData = read('src/data/homeData.js');

  assert.doesNotMatch(page, /Showcase \/ 15 directions/);
  assert.doesNotMatch(page, /demoProjects|PortfolioCard|\/client\//);
  assert.doesNotMatch(css, /\.portfolioSection|\.grid|\.hero\b/);
  assert.doesNotMatch(homeData, /demoProjects|\/client\//);
});
