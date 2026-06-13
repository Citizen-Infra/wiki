# Source ingestion queue

Sources (videos, talks, articles) to process into the wiki, in order. Each is
processed via the `/process-source` flow → wiki pages + a per-source
`content-backlog` GitHub issue. The per-session log lives in `process-notes.md`;
the full ingestion history is in memory (`project_cibc_wiki.md`).

**How to use:** add a line under **Queue** — the URL plus an optional note. I work
top to bottom, and when one is done I move it to **Processed** with its date and
issue number. (This file is committed, so the queue survives across sessions.)

## Queue

<!-- Add sources below, one per line. Example:
- [ ] https://www.youtube.com/watch?v=XXXX  — Bollier follow-up on local currencies
-->

_(empty — add sources here)_

## Processed

- [x] #12 — Relational Technology Project (Metagov seminar) · `HbH_cYgUCWA` · 2026-06-11
- [x] #11 — The Planetary Compendium (Berggruen × Dark Matter Labs) · `hhTyUhc8Rm8` · 2026-06-11
- [x] #10 — American Conversation Project / Cortico (civic listening) · `Zm3w5PkbVPo` · 2026-06-10
- [x] #9 — Children & young people's assemblies (DemocracyNext) · `G48qf6qvU20` · 2026-06-10
- [x] #8 — David Bollier on the commons (Team Human) · `5NrkkC8tQGQ` · 2026-06-10
- [x] #7 — Landemore, "Politics Without Politicians" (DemocracyNext) · `sgFUtZCgAqI` · 2026-06-10
- [x] #6 — Brandon Nørgaard / OpenCivics · `Umpu1AmTuy8` · 2026-06-10
- [x] #5 — Stempeck, Civic Tech Field Guide & why projects succeed/fail · `jQ-PZUNkNfg` · 2026-06-10
- [x] #4 — Nathan Schneider, online governance · `jlyfhmUWX04` · 2026-06-10
- [x] #3 — Hélène Landemore, deliberative democracy · `QizItYVPA1E` · 2026-06-10
- [x] #2 — Commoning Standard (Cécile Green & Seth Frey) · `0ekd-5YuHHE` · 2026-06-10
- [x] #1 — Metagov "Civic AI" (Matt Stempeck, CTFG) · `SonfdR0_h2w` · 2026-06-09
