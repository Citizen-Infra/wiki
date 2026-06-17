---
title: "AI mediation & the Habermas Machine"
description: Can an AI help a divided group write a statement they can all live with? A DeepMind experiment found its AI-drafted consensus statements were preferred to those of human mediators.
---

Group deliberation works, but it's expensive and hard to scale — and good human mediators are scarce. So a DeepMind team (Michael Henry Tessler, Michiel Bakker and colleagues) asked a sharp question: can an AI play the mediator, helping a divided group find a statement they can all live with? Their system, published in *Science* in October 2024, is the **Habermas Machine** — named after Jürgen Habermas, a founding thinker of [deliberative democracy](/concepts/open-democracy/).

## How it works: caucus mediation

The design is deliberately modest. A small group (in the study, 3–5 people) each answers a question — say, *should the government provide universal free childcare?* — by **writing their opinion privately**; they don't see each other's. The AI then:

1. **Generates** many candidate "group statements" from those opinions.
2. **Ranks** each candidate for *each participant*, using a model that predicts how much a person holding a given opinion would endorse a given statement.
3. **Aggregates** those personal rankings with a [social-choice](/concepts/plural-mechanisms/) (voting) rule, and picks the statement that wins — like running a tiny virtual election.

Participants can then **critique** the draft, and the machine revises it. Because the whole thing is a ranking, it's auditable: you could in principle see where any statement sat in your own preference order. This is "caucus mediation" — people interact with the mediator, not directly with each other.

## What they found

- **Preferred over humans.** Against paid, trained, financially-incentivised human mediators, the AI's statements were chosen *more often* — judged clearer, more informative, and fairer in how they aggregated views.
- **Less division.** Groups measurably converged: agreement rose after deliberation, and the effect came from the AI's consensus statement, not merely from seeing others' opinions.
- **Minorities kept.** The statement weighted minority opinions roughly in proportion to their share (≈30% of opinions → ≈30% of the statement), and critique *increased* that without alienating the majority — a guard against [majority tyranny](/concepts/epistemic-democracy/).
- **A real assembly.** With the **Sortition Foundation**, 200 representative UK citizens ran a virtual [citizens' assembly](/concepts/citizens-assembly/) over nine divisive questions and showed the convergence Habermas himself predicted.

## The honest limits

The authors call it **"minimally deliberative."** People don't talk directly, there's no fact-checking or learning phase, rounds are short (15–20 minutes), and it was only tested in groups up to five. On *calcified* questions (Brexit) it moved nothing, and average belief shifts were small. Critics at the launch pressed two worries worth keeping: aggregating opinions isn't the same as people *reasoning together* (real deliberation), and a group finding "common ground" can also drift toward a *more extreme* shared position. The fair reading: this is one **component** — assistive [civic AI](/concepts/civic-ai/), in the [eyeglasses-not-replacement](/concepts/ai-and-deliberation/) sense — that could slot into a larger deliberative process, not a replacement for it.

## Sources

- "The Peacemaking Machine" — Michael Henry Tessler & Michiel Bakker (DeepMind/MIT), hosted by Beth Noveck, Northeastern GovLab (2025): [youtube.com/watch?v=-cCguFRH7f4](https://www.youtube.com/watch?v=-cCguFRH7f4).
- "AI can help humans find common ground in democratic deliberation" — Tessler et al., *Science* (Oct 2024): [science.org/doi/10.1126/science.adq2852](https://www.science.org/doi/10.1126/science.adq2852).
