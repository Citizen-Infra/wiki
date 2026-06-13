---
description: Process an external source (YouTube/article) into the wiki, end to end.
argument-hint: <url>
---

You are processing a source into the Citizen Infrastructure wiki. Follow this
exactly; the repo's `CLAUDE.md` holds the content-model routing table and the
load-bearing editorial discipline — re-read its "How content is produced" and
"Editorial discipline" sections first.

Source: $ARGUMENTS

## 1. Claim
Confirm there's an open `processing` issue for this source assigned to you (open
one if not: `Process: <title>`, label `processing`). Don't process a source
someone else has claimed.

## 2. Fetch the transcript (YouTube)
```bash
python -m yt_dlp --write-auto-sub --sub-lang en --skip-download --sub-format vtt -o "docs/research/<id>.%(ext)s" "<url>"
```
Then dedupe the VTT into plain text. Save the full extraction to
`docs/research/YYYY-MM-DD-<slug>.md` (gitignored — never published as-is).

## 3. Extract + classify
List every concrete item (methods, orgs, tools, deliberations, cases, sources).
Route each via the `CLAUDE.md` map: tool→toolkit, org→ecosystem, dated
deliberation→run-reports, method/argument→concepts, grassroots case→stories,
book/talk→library. Propose a new page/section when nothing fits.

## 4. Verify (load-bearing)
Verify every load-bearing name and figure against a **primary/public source**
(web search / your own Firecrawl key — maintainers' keys are not shared).
Correct transcript garble. Omit anything you can't verify. Cite semi-private
docs by title/author **without** a hyperlink.

## 5. Ask scope, then write
Confirm scope with the user (how many concepts/stories, depth). Write pages from
`docs/templates/`. **Wire each new page into `astro.config.mjs` AND its section
overview page.** Quote any frontmatter `title`/`description` containing `": "`.

## 6. Build gate
```bash
npm run build
```
Must pass (catches frontmatter, sidebar slugs, dead internal links). Fix until green.

## 7. Ship (no manual deploy — git-connected)
```bash
git checkout -b <slug>
git add -A && git commit -m "Add <topic> (source: <title>)"
git push -u origin <slug>
gh pr create --fill
```
When the `build` check is green, **self-merge** (squash). Netlify auto-deploys.

## 8. Record
- Edit the source's issue: add the unwritten-items checklist, swap label
  `processing` → `content-backlog`.
- Move the source's line in `docs/source-queue.md` to `## Processed`.
- Append a short entry to `docs/process-notes.md` (gitignored).
