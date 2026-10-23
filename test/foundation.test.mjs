import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';

const revision = '6df5682711d11d1dde20453d0e06a78aca48b34f';
const spec = `git+https://github.com/Citizen-Infra/design-system.git#${revision}`;
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
const foundation = new URL('./', import.meta.resolve('@citizen-infra/design-system/tokens.css'));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

test('the foundation is installed from one immutable full HTTPS revision', () => {
  assert.equal(pkg.dependencies['@citizen-infra/design-system'], spec);
  assert.equal(lock.packages[''].dependencies['@citizen-infra/design-system'], spec);
  assert.equal(lock.packages['node_modules/@citizen-infra/design-system'].resolved, spec);
  assert.equal(JSON.parse(readFileSync(new URL('package.json', foundation), 'utf8')).version, '0.2.0-draft.1');
});

test('the adapter consumes canonical tokens and font CSS, with no independent palette or fixed root size', () => {
  const css = readFileSync('src/styles/open-index.css', 'utf8');
  assert.match(css, /@import '@citizen-infra\/design-system\/tokens\.css'/);
  assert.match(css, /@import '@citizen-infra\/design-system\/fonts\.css'/);
  assert.doesNotMatch(css, /#[\da-f]{3,8}\b|fonts\.googleapis|fonts\.gstatic/i);
  assert.doesNotMatch(css, /font-size:\s*\d+(?:\.\d+)?px/);
  assert.match(css, /body\s*\{[^}]*font-size: var\(--cibc-text-body\)/);
  for (const role of ['--sl-text-2xs', '--sl-text-sm', '--sl-text-body', '--sl-text-h1', '--sl-color-text', '--sl-color-bg-nav', '--sl-color-bg-sidebar']) assert.ok(css.includes(role));
});

test('the theme bridge mirrors resolved Starlight state without owning preferences', () => {
  const bridge = readFileSync('src/components/FoundationHead.astro', 'utf8');
  assert.match(bridge, /DefaultHead/);
  assert.match(bridge, /dataset\.cibcTheme/);
  assert.match(bridge, /attributeFilter: \['data-theme'\]/);
  assert.doesNotMatch(bridge, /localStorage|sessionStorage|matchMedia|setItem/);
});

test('framework accessibility and layout adapters do not replace interaction owners', () => {
  const head = readFileSync('src/components/FoundationHead.astro', 'utf8');
  assert.match(head, /ResizeObserver/);
  assert.match(head, /--sl-nav-height/);
  assert.match(head, /--sl-mobile-toc-height/);
  assert.match(head, /mobile-starlight-toc summary/);
  assert.match(head, /input\.pagefind-ui__search-input/);
  assert.match(head, /aria-label/);
  assert.match(head, /attributeFilter: \['aria-expanded'\]/);
  assert.doesNotMatch(head, /addEventListener\(['"](?:click|keydown)|fetch\(/);
  assert.match(head, /<noscript set:html=/);
});

test('responsive chrome and Pagefind feedback use intrinsic space rather than clipped text', () => {
  const css = readFileSync('src/styles/open-index.css', 'utf8');
  assert.match(css, /^:root\s*\{/m);
  assert.doesNotMatch(css, /^:root\[data-theme=/m);
  assert.match(css, /\.title-wrapper\s*\{\s*grid-column: 1 \/ -1/);
  assert.match(css, /mobile-starlight-toc summary\s*\{\s*height: auto/);
  assert.match(css, /\.pagefind-ui__message\s*\{[^}]*height: auto/);
  assert.match(css, /@container wiki-contents/);
});

test('mobile reading density is distinct from the desktop display scale', () => {
  const css = readFileSync('src/styles/open-index.css', 'utf8');
  const mobile = css.slice(css.indexOf('@media (max-width: 49.999rem)'));
  for (const [role, value] of Object.entries({
    '--cibc-text-body': '1.125rem', '--cibc-text-ui': '1rem',
    '--cibc-text-caption': '0.875rem', '--cibc-text-page': '1.875rem',
    '--cibc-control-height': '2.75rem',
  })) assert.ok(mobile.includes(`${role}: ${value};`), role);
  assert.match(mobile, /@container wiki-masthead/);
  assert.match(css, /hyphens: none/);
  assert.match(css.slice(0, css.indexOf('@media (max-width: 49.999rem)')), /--sl-text-body: var\(--cibc-text-body\)/);
});

test('page titles wrap whole words without automatic hyphenation', () => {
  const css = readFileSync('src/styles/open-index.css', 'utf8');
  assert.doesNotMatch(css, /hyphens:\s*auto/);
  assert.match(css, /:is\(h1,h2,h3,h4,h5,h6\), h1\s*\{[^}]*hyphens: none;[^}]*word-break: normal;[^}]*overflow-wrap: break-word;/);
});

test('contents has a bounded independent width and the article takes remaining space', () => {
  const css = readFileSync('src/styles/open-index.css', 'utf8');
  assert.match(css, /--wiki-contents-width: clamp\(10rem, 16vw, 14rem\)/);
  assert.match(css, /\[data-has-toc\] \.main-pane\s*\{[^}]*flex: 1 1 0;[^}]*min-width: 0;/);
  assert.match(css, /\.right-sidebar-container\s*\{[^}]*flex: 0 0 var\(--wiki-contents-width\)/);
  assert.match(css, /\.right-sidebar\s*\{[^}]*position: sticky;[^}]*width: 100%;/);
  assert.match(css, /\.right-sidebar-panel \.sl-container\s*\{ width: 100%; max-width: none;/);
  assert.match(css, /--sl-content-width: var\(--cibc-measure-reading\)/);
  assert.match(css, /\.right-sidebar-panel a\s*\{[^}]*font-size: 1rem;[^}]*hyphens: none;/);
});

test('the OFL serving copy and bundled fonts match the pinned source byte-for-byte', () => {
  assert.equal(hash(readFileSync('public/fonts/OFL-Public-Sans.txt')), hash(readFileSync(new URL('fonts/OFL-Public-Sans.txt', foundation))));
  assert.equal(hash(readFileSync('dist/fonts/OFL-Public-Sans.txt')), hash(readFileSync(new URL('fonts/OFL-Public-Sans.txt', foundation))));
  const assets = readdirSync('dist/_astro').filter(name => name.endsWith('.woff2'));
  for (const name of ['public-sans-latin-normal.woff2', 'public-sans-latin-italic.woff2']) {
    const expected = hash(readFileSync(new URL(`fonts/${name}`, foundation)));
    assert.ok(assets.some(asset => hash(readFileSync(`dist/_astro/${asset}`)) === expected), `${name} must be bundled locally without alteration`);
  }
});

test('the shared MIT notice is included unchanged in the distributable', () => {
  const expected = hash(readFileSync(new URL('LICENSE', foundation)));
  assert.equal(hash(readFileSync('public/licenses/cibc-design-system-MIT.txt')), expected);
  assert.equal(hash(readFileSync('dist/licenses/cibc-design-system-MIT.txt')), expected);
});

test('the asset helper copies notices only and does not create forbidden brand imagery', () => {
  const helper = readFileSync('scripts/sync-foundation-assets.mjs', 'utf8');
  assert.match(helper, /OFL-Public-Sans\.txt/);
  assert.match(helper, /cibc-design-system-MIT\.txt/);
  assert.doesNotMatch(helper, /\.png|\.svg|chromium|playwright|createServer|fetch\(/);
});
