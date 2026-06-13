# Contributing to the Citizen Infrastructure wiki

Thanks for helping build this! Anyone with repo access can add and edit pages.
Publishing is automatic: a merged PR goes live at citizen-infra.netlify.app.

## Setup

```bash
git clone https://github.com/Citizen-Infra/wiki && cd wiki
nvm use            # Node 22 (see .nvmrc)
npm install
npm run dev        # http://localhost:4321
```

## How content works

We write pages by **decomposing external sources** (talks, podcasts, papers)
across the wiki. The routing map (what goes where) and the load-bearing
**editorial discipline** live in [`CLAUDE.md`](./CLAUDE.md) — read the
"How content is produced" and "Editorial discipline" sections before writing.
The short version:

- **Verify** every name and figure against a primary source; omit what you can't verify.
- **Cite, don't republish** semi-private sources (no hyperlink for group-shared docs).
- **No AI attribution** in pages or commit trailers; **no raw SVG / AI-made brand assets**.
- Start a new page/section (and wire the sidebar) when nothing fits — don't force-fit.

Page skeletons are in [`docs/templates/`](./docs/templates/). The hand-curated
sidebar is in `astro.config.mjs` — **adding a `.md` does not add it to nav**;
you must add its `{ slug }` and (for Concepts/Run Reports) the matching line on
the section overview page.

## Curation: pick a source

The prioritized backlog is [`docs/source-queue.md`](./docs/source-queue.md). To
add or re-rank sources, just PR an edit. To **claim** a source for processing
(so two people don't do the same one):

1. Open an issue titled `Process: <source title>`, label it **`processing`**, and assign yourself.
2. When you ship, edit that same issue — add the unwritten-items checklist and swap the label to **`content-backlog`**. Move the queue line to the `## Processed` section in your PR.

New here? Look for issues labelled **`good first source`** — short, high-fit starters.

## Process a source

**Claude Code users:** run the repo command `/process-source <url>` (in
`.claude/commands/`) — it walks the whole flow. Bring your own web-search /
Firecrawl key for the verification step (maintainers' keys are not shared).

**Any tool / by hand:** follow the same sequence — fetch the transcript, verify
names/figures, route each item via the `CLAUDE.md` map, write pages from
`docs/templates/`, wire the sidebar + overview, run `npm run build`.

## Ship it

```bash
git checkout -b <short-topic>
# ...add/edit pages...
npm run build                      # must pass — this is the gate
git add -A && git commit -m "Add <topic> (source: <title>)"
git push -u origin <short-topic>
gh pr create --fill
```

When the **build** check is green, **merge your own PR** (squash). Netlify
deploys `main` automatically. Match the existing clean, imperative commit style.
