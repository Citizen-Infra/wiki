# Processing the source queue

How an external source (talk, podcast, paper, article) becomes wiki pages. This
is the working guide for whoever — or whatever — is doing the ingesting. It
assumes nothing beyond a clone of this repo.

`CLAUDE.md` carries the repo's conventions and is the authority where the two
disagree. This file is the procedure.

---

## Setup

```bash
git clone https://github.com/Citizen-Infra/wiki.git
cd wiki
npm install
npm run build      # must pass before you touch anything — it's the gate
```

Node **≥22.12**. Netlify pins `NODE_VERSION=22`.

### What you need access to

| Need | For | Notes |
|---|---|---|
| A GitHub token | pushing branches, opening PRs, managing `content-backlog` issues | scope it to this repo only |
| A Firecrawl API key | fetching articles and web pages | ask the maintainer; never commit it |
| `yt-dlp` | YouTube transcripts | `pip install yt-dlp`. No key. |

Nothing else. **Deploys need no credentials** — Netlify is git-connected and
builds every push to `main`, so a merged PR is a deploy. Never run
`netlify deploy` by hand.

---

## The loop

One source at a time, start to finish.

### 1. Pick from the queue

`docs/source-queue.md` is the worklist, grouped by tier. Work top-down within a
tier; skip anything freely.

**Tier 4 is "cite-don't-ingest" and is not for processing.** Its entries exist so
a future page can cite them, not so they become pages. Ignore that section unless
told otherwise.

### 2. Check it isn't already done — before fetching anything

Re-processing duplicates work and creates duplicate pages. The dedup key is cheap
to derive without a download: for YouTube it's the **video ID** (`v=` value or the
path after `youtu.be/`), never the full URL, because one video has many URL forms.
For anything else it's the canonical URL with tracking parameters stripped.

```bash
grep -rin "<VIDEO_ID or URL>" docs/source-queue.md docs/research/ src/content/docs/
```

A hit in the Processed list, an extraction file, or a published page means
**stop** and ask. Do not silently re-run.

### 3. Fetch the full source

- **YouTube** — `python -m yt_dlp --write-auto-sub --sub-lang en --skip-download -o "%(title)s" "<URL>"`. Do **not** pipe yt-dlp through `head` or any truncating filter: the early pipe close kills each download mid-fragment and leaves 0-byte `.vtt.part` files. Check file sizes afterwards.
  - **Dedupe the `.vtt` before you read it.** Auto-captions scroll, so most lines repeat two or three times; stripping timestamps, tags and consecutive duplicates typically cuts the file by ~90% (374 KB to 41 KB on a 47-minute talk). Reading the raw file wastes most of your context on the same sentences.
  - Also worth pulling `--print "%(description)s"`: the publisher's own description usually names the speakers and their organisations, which is the cheapest check available against the garbled forms in the captions.
- **Articles and pages** — Firecrawl.
- **Paywalled or Cloudflare-blocked papers** — don't fight the wall. Resolve the DOI through the OpenAlex API for an open-access location (usually arXiv or a repository) and fetch that instead.
- **Comment threads are part of the source.** On Substack, HN, LessWrong and GitHub discussions the sharpest material is often below the article, because that's where practitioners say what they actually built. Extract comments as named items with attribution.

No captions available is a legitimate outcome. Mark the queue entry `[~]` with the
reason rather than guessing at content from a description.

### 4. Extract, don't summarise

Enumerate every concrete item: each tool, organisation, deliberation, method,
argument, book, figure. Capture enough that someone could write a page from your
notes without re-watching. A summary is not an extraction.

Write the full extraction to `docs/research/YYYY-MM-DD-<source>.md`. That
directory is **gitignored on purpose** — see "Never published" below.

Three things belong in every extraction, because a reviewer needs them and
because they are how a page gets written honestly:

**A name table.** Auto-transcripts mangle every proper noun. Put the garbled
form, the verified form, and the evidence side by side, so a reader can see
what was checked rather than trusting that it was:

```
| Transcript garble | Verified | Evidence |
|---|---|---|
| "Zara" / "Yara" | Yara Dowani, Rawa | video description; rawa.ps |
```

**A mark on every claim** saying whether it is corroborated by a public source
or appears only in the source itself. A talk-only figure is publishable when
attributed to the talk and misleading when stated flat; you cannot make that
call later if the extraction did not record which it was.

**An omissions list** — everything you could not verify and therefore left out,
with the reason. This is the part a reviewer reads first.

#### The extraction is the reviewer's evidence, not only your notes

If you cite a page as proof of a name or a figure, **the saved copy of that page
must actually contain the passage**. Quote the sentence into the extraction, or
save the scrape that holds it.

This is not pedantry about filing. A verification nobody else can re-run is
indistinguishable from a verification that never happened, and the two need to
be distinguishable — because one of them is a fabricated citation, and that is
the single worst thing this wiki could publish.

It has already happened once here, benignly: an extraction resolved a
moderator's surname correctly, citing an organisation's own staff page against
a conflicting video description. The reasoning was right and the answer was
right, but the scrape saved alongside it contained neither spelling, so the
claim could not be confirmed without fetching the page again. On a name nobody
thought to re-check, that gap is exactly where a wrong one would survive.

### 5. Route each item to its container

One source feeds many pages. Decompose it across the wiki rather than making a
single page about the source.

| Item | Goes to |
|---|---|
| A usable tool | `toolkit/` (grouped by what a citizen is trying to do) |
| An organisation, community or network | `ecosystem/overview.md` |
| A specific, dated deliberation | `run-reports/` |
| A method, idea, or a thinker's argument | `concepts/` |
| A grassroots, non-deliberation case | `stories/` |
| A book, paper, talk or article | `library/reading-and-sources.md` |

There is deliberately **no People section** — route a thinker's argument to
Concepts, their organisation to Ecosystem, their works to Library.

**When an item has no container, stop and propose a new page or section** — with
its sidebar placement — before writing. Do not force-fit it into the nearest
existing page, and do not silently drop it. A relevant item with no home is a
signal the structure is missing something, and that has been right more than once.

**Sweep wider than the minimum.** While sourcing, look for adjacent
organisations, directories and examples that belong in the wiki. Err toward
including relevant citizen infrastructure rather than stopping at the one claim
you set out to corroborate.

### 6. Write the pages

Conventions live in `CLAUDE.md`. The short version: frontmatter `title` +
`description`, plain language, internal links as `/section/slug/`, a `## Sources`
section on most concept and run-report pages, and generous cross-linking between
Concepts, Run Reports, Stories, Toolkit and Ecosystem.

Avoid `": "` inside an unquoted frontmatter `title` or `description` — it's a YAML
colon-space and breaks the build. Quote the string if you need a colon.

Use asides (`:::note`, `:::caution`) sparingly — at most one per page, and only to
promote a genuine standout warning, never to box-ify ordinary prose.

### 7. Wire every new page into the sidebar

Adding a `.md` does **not** put it in navigation. Add its
`{ slug: '<section>/<name>' }` to the `sidebar` array in `astro.config.mjs`.

Concepts and Run Reports are split into collapsible theme sub-groups. A new page
goes into the matching sub-group in **both** the sidebar and that section's
overview page, so the two stay in sync.

This is the repo's most common mistake. It is now build-gated, but fix it at
write time rather than at build time.

### 8. Build

```bash
npm run build
```

Three failure modes are caught here, all of them fatal rather than silent:

- **Broken internal link or heading anchor** — `starlight-links-validator`. It is **pinned to 0.24.0**; 0.24.1 has a regression that false-flags inbound links to non-root `.mdx` pages. Do not bump it.
- **A sidebar slug with no page** — Starlight errors.
- **A page with no sidebar entry** — `scripts/check-sidebar.mjs`, run automatically as `prebuild`.

A clean build is the gate. Do not push without one.

### 9. Open a PR

`main` is protected. A PR needs a green `build` check **and one approving review**
from a `wiki-editors` maintainer. See `CONTRIBUTING.md` for the branch flow and
`GOVERNANCE.md` for roles.

Match the existing commit style: clean and imperative. **No AI attribution** in
commit trailers or in published content on this repo.

### 10. Record the backlog and update the queue

Open (or update) a **per-source GitHub issue labelled `content-backlog`** listing
everything the source yielded that you did not write, as checkboxes. Check them
off as they get written; close the issue when the source is exhausted.

Then move the queue entry to **Processed** in `docs/source-queue.md` with its date
and issue number, and note which pages it produced.

---

## Editorial discipline

This is the part that matters most, and the part no build check can catch.

**Verify names and figures against primary sources before publishing.**
Auto-transcription garbles names constantly — real corrections from this repo's
history include "Zara Zidi" → Zehra Zaidi, "Connected Tissue / Presler" →
Connective Tissue / Sam Pressler, and "Adam Kronite" → Cronkright. Assume every
proper noun in a transcript is wrong until checked.

**Cite every figure to a public source.** Where a speaker's number and the public
record disagree, publish the public one — a platform was cited here at 1.4M users
from its own published figure rather than the 1.6M stated in a talk.

**Omit what you cannot verify.** Not "reportedly", not hedged — omit it. Several
tools and organisations named in sources were left out for exactly this reason.

**Mark ongoing processes as pending** rather than describing them as concluded.

**Cite, don't republish, semi-private sources.** When something was shared in a
group thread or as a link-shared document (HackMD, a Drive deck), attribute it in
`## Sources` by title and author **without a hyperlink**. Only genuinely public
URLs go in the Library.

**No internal opinions.** The wiki describes; it does not editorialise about the
organisations it lists.

The audience is a citizen, not a member and not a specialist. CIBC is the
steward and publisher, not the subject — membership, governance and joining live
elsewhere and are only ever linked, never described as the wiki's topic.

---

## Never published

These are gitignored, and that is deliberate. They are working material, some of
it sensitive.

- `docs/research/` — extractions. Pages are written *from* these; the files themselves are never published, quoted at length, or pasted into an issue or PR body.
- `docs/superpowers/` — planning artifacts naming collaborators and internal recordings.
- `docs/process-notes.md` — the per-session log.

If you are unsure whether something in an extraction is publishable, it is not.
Ask.
