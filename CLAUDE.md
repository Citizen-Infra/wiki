# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public **Citizen Infrastructure** wiki — a free, plain-language resource **for citizens** about citizen infrastructure (deliberation, civic tech, the commons, real-world run reports). Built with **Astro 6 + Starlight**, deployed to **citizen-infra.netlify.app**.

The audience is the **citizen**, not a CIBC member. CIBC is the *steward/publisher*, not the subject — anything about membership, governance, or joining the collective lives in Notion (cibc.notion.site) and is only linked from here, never described as the wiki's topic. The reader-facing positioning is on the `about` page.

## Commands

```bash
npm run dev       # local dev server (astro dev) — http://localhost:4321
npm run build     # production build → dist/ (also builds the Pagefind search index)
npm run preview   # serve the built dist/ locally
```

Node **≥22.12** (Netlify pins `NODE_VERSION=22`). Always `npm run build` before deploying — a clean build is the gate. The **`starlight-links-validator`** plugin fails the build on any broken internal link or heading anchor (so dead `[x](/section/slug/)` links can no longer ship silently), and Starlight errors on sidebar `slug`s that have no page. The one gap it does *not* catch: a page that exists but was never wired into the sidebar still builds silently (the orphan case — tracked in issue #31).

## Deploy

Deploys are **automatic** — Netlify is git-connected and builds every push to `main`, so **merge = live** at citizen-infra.netlify.app. Don't run a manual `netlify deploy`; just merge a green PR. `netlify.toml` sets the build command (`npm run build`), publish dir (`dist`), and Node 22. A clean `npm run build` is still the local gate before you push.

`main` is protected: a PR needs a green `build` check **and one approving review** from a [`wiki-editors`](https://github.com/orgs/Citizen-Infra/teams/wiki-editors) maintainer before it can merge; owners can still push directly for maintenance. See **`GOVERNANCE.md`** for roles and the review model and **`CONTRIBUTING.md`** for the branch → PR flow.

## Architecture

A standard Starlight docs site with one critical convention:

- **All content is Markdown in `src/content/docs/<section>/*.md`.** Each top-level folder is a sidebar group: `start/`, `idea/`, `concepts/`, `toolkit/`, `run-reports/`, `stories/`, `ecosystem/`, `library/`, plus `about.md` and the `index.mdx` homepage.
- **The sidebar is hand-curated in `astro.config.mjs`.** Adding a `.md` file does **not** make it appear in navigation — you must add its `{ slug: '<section>/<name>' }` to the `sidebar` array. Forgetting this is the most common mistake; the page builds but is unreachable. **Concepts and Run Reports are split into collapsible theme sub-groups** (nested `{ label, collapsed: true, items: [...] }`) that mirror the H2/H3 groups on each section's overview page — add a new page to the matching sub-group in *both* the sidebar and that overview page, keeping the two in sync.
- **Page conventions:** frontmatter `title` + `description`; plain language; internal links as `/section/slug/`; most concept/run-report pages end with a `## Sources` section. Cross-link generously between Concepts ↔ Run Reports/Stories ↔ Toolkit ↔ Ecosystem.
- **Theme is intentionally vanilla** — no custom CSS or logo (branding is mid-flight). Don't add visual chrome; this is a content site.

## How content is produced

Pages are written by **decomposing external sources** (talks, podcasts, papers) across the wiki. When processing a source, route each extracted item to its container, and **create a new page/section (and wire it into the sidebar) when nothing fits** rather than force-fitting:

| Item | Goes to |
|------|---------|
| A usable tool | `toolkit/` (grouped by what a citizen is trying to do) |
| An organisation / community / network | `ecosystem/overview.md` |
| A specific, dated deliberation | `run-reports/` |
| A method, idea, or thinker's argument | `concepts/` |
| A grassroots, non-deliberation case | `stories/` |
| A book / paper / talk / article | `library/reading-and-sources.md` |

Per-source backlog (items not yet written) is tracked as **GitHub Issues labelled `content-backlog`** on this repo, one issue per source.

## Editorial discipline (load-bearing)

- **Verify names and figures against primary sources before publishing.** Auto-transcribed talks garble names (e.g. an interviewee's org or a platform). Cite every figure to a public source; mark unknowns or ongoing processes as pending; omit anything you can't verify rather than guess.
- **Cite, don't republish, semi-private sources.** When a source was shared in a group thread or as a link-shared doc (HackMD, Google Drive), attribute the ideas in the page's `## Sources` by title/author **without** a hyperlink. Only genuinely-public URLs (published articles, product sites, videos) go in the Library.
- **No AI-generated brand assets and no AI attribution** in published content or commit trailers on this public repo. Match the existing clean, imperative commit style.

## Local-only directories (gitignored — do not publish their contents)

- `docs/research/` — `/process-source` extractions: full working notes a page is written *from*, never published as-is. May contain sensitive material.
- `docs/superpowers/` — brainstorming specs/plans that name collaborators and internal recordings.
- `docs/process-notes.md` — per-session process log.
