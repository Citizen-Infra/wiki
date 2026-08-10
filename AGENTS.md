# AGENTS.md

Repo conventions, build gates and editorial rules live in **[CLAUDE.md](CLAUDE.md)**.
Read it before changing anything.

The procedure for turning an external source into wiki pages is
**[docs/processing-sources.md](docs/processing-sources.md)**, and the worklist it
draws from is **[docs/source-queue.md](docs/source-queue.md)**.

Three things worth knowing before your first edit:

- A new page in `src/content/docs/` is unreachable until its `{ slug: '...' }` is added to the `sidebar` array in `astro.config.mjs`. This is the most common mistake here.
- `npm run build` is the gate for published content and catches broken links, missing pages and orphan pages. Do not push published-content changes without a clean build. Queue-only additions to `docs/source-queue.md` are the documented exception.
- `main` is protected and deploys on merge. For published pages and source-processing work, work on a branch and open a PR. The exception is an approved digest handoff that only appends to `docs/source-queue.md`: after deduplication and user approval, commit that queue-only maintenance directly to `main` with a plain imperative message. Do not use this exception for research extractions, backlog issues, page edits, sidebar changes, or other published content.
