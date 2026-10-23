// Built integration assertions: npm run build && npm test.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
const read = path => readFileSync(path, 'utf8');
const home = () => read('dist/index.html');
const article = () => read('dist/concepts/sortition/index.html');

test('the compiled site retains its article subject, framework navigation and search', () => {
  const html = article();
  assert.match(home(), /Citizen Infrastructure/);
  assert.match(html, /Citizen Infra Wiki/);
  assert.match(html, /Sortition \(representation by lot\)/);
  for (const feature of ['starlight__sidebar', 'starlight-theme-select', 'site-search', 'data-open-modal', 'data-cibc-theme', 'data-theme']) {
    if (feature === 'data-cibc-theme') assert.match(html, /dataset\.cibcTheme/);
    else assert.ok(html.includes(feature), feature);
  }
  assert.match(html, /id="why-choose-people-at-random"/);
  assert.match(html, /href="#why-choose-people-at-random"/);
});

test('Pagefind remains built and no generated internal design brief reaches the site', () => {
  assert.ok(existsSync('dist/pagefind/pagefind.js'));
  for (const html of [home(), article()]) {
    assert.doesNotMatch(html, /Direction contract|OWN-WORLD|FINISH:|seed:618a|impeccable\/review/);
    assert.doesNotMatch(html, /fonts\.(googleapis|gstatic)\.com/);
    assert.ok(!html.includes('href="/favicon.svg"'), 'do not publish an unresolved default icon URL');
  }
});

test('curated sidebar slugs still build to their existing routes', () => {
  const config = read('astro.config.mjs');
  const slugs = [...config.matchAll(/\{\s*slug:\s*'([^']+)'/g)].map(match => match[1]);
  assert.ok(slugs.length > 100);
  for (const slug of slugs) assert.ok(existsSync(`dist/${slug}/index.html`), slug);
});

test('tables are labelled keyboard-scrollable regions while retaining native table markup', () => {
  const html = read('dist/concepts/running-a-citizens-assembly/index.html');
  assert.match(html, /class="wiki-table-scroll" role="region" tabindex="0" aria-label="[^"]+scrollable table"/);
  assert.match(html, /<table>/);
  assert.match(html, /What you need/);
  assert.match(html, /Printed start page/);
});

test('default framework footer features and font-licence access remain present', () => {
  const html = article();
  assert.match(html, /Edit page/);
  assert.match(html, /Last updated/);
  assert.ok(html.includes('rel="prev"') && html.includes('rel="next"'), 'native previous/next navigation remains present');
  assert.match(read('src/components/FoundationFooter.astro'), /import DefaultFooter from '@astrojs\/starlight\/components\/Footer\.astro'/);
  assert.match(html, /href="\/fonts\/OFL-Public-Sans\.txt"/);
});

test('compiled styling includes the canonical large type and contextual inverse focus roles', () => {
  const css = readdirSync('dist/_astro').filter(name => name.endsWith('.css')).map(name => read(`dist/_astro/${name}`)).join('\n');
  for (const role of ['--cibc-text-body', '--cibc-text-caption', '--cibc-color-focus-inverse', '--cibc-color-on-surface-strong', '--sl-color-bg-sidebar']) assert.ok(css.includes(role), role);
  assert.match(css, /focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /forced-colors/);
});
