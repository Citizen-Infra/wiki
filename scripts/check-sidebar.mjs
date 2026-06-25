// Orphan-page guard.
//
// Every content page must be wired into the hand-curated `sidebar` in
// astro.config.mjs — a page that exists but isn't wired builds fine yet is
// unreachable (the wiki's #1 recurring mistake). Starlight already errors on
// the reverse case (a sidebar slug with no page), so this only checks for
// orphans: pages with no sidebar entry.
//
// Runs as `prebuild`, so it gates every `npm run build` (and every Netlify deploy).

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(repo, 'src', 'content', 'docs');

// Pages reachable without a sidebar entry, by design.
const ALLOWED = new Set(['index']); // the splash homepage (root)

// Content slugs: every .md/.mdx under docs, minus extension, POSIX-style.
const contentSlugs = readdirSync(docsDir, { recursive: true })
  .map((f) => String(f).replaceAll(path.sep, '/'))
  .filter((f) => /\.(md|mdx)$/.test(f))
  .map((f) => f.replace(/\.(md|mdx)$/, ''))
  .filter((slug) => !ALLOWED.has(slug));

// Sidebar slugs: every `slug: '...'` in the config.
const config = readFileSync(path.join(repo, 'astro.config.mjs'), 'utf8');
const sidebarSlugs = new Set(
  [...config.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]),
);

const orphans = contentSlugs.filter((slug) => !sidebarSlugs.has(slug)).sort();

if (orphans.length > 0) {
  console.error(
    `\n✗ check-sidebar: ${orphans.length} page(s) exist but are not wired into the astro.config.mjs sidebar:\n`,
  );
  for (const slug of orphans) console.error(`    src/content/docs/${slug}.md`);
  console.error(
    '\n  Add each { slug: \'<section>/<name>\' } to the sidebar array (and the matching\n' +
      '  section overview page), or the page builds but stays unreachable.\n',
  );
  process.exit(1);
}

console.log(`✓ check-sidebar: all ${contentSlugs.length} content pages are wired into the sidebar.`);
