---
title: Synthetic participation
description: The risk of replacing real citizens with AI-generated stand-ins — and why a person-owned "digital twin" is a different thing.
---

**Synthetic participation** is the idea that citizens' input could be artificially generated — a model of the populace standing in for the people themselves. Instead of consulting real residents (which is messy and expensive), an institution could just "ask" an AI trained to imitate them. It's worth naming clearly, because it's a tempting shortcut and a dangerous one.

## Why it's risky

Faking public input isn't new — long before ChatGPT, "astroturf" campaigns flooded official channels with manufactured comments (the US FCC's net-neutrality comment period is a notorious case). AI makes convincing fakes vastly easier. If policymakers start treating a model of the electorate as a substitute for the electorate, it can **erode the legitimacy** of the very channels meant to give people a say. Opinion polling is a mild, analog version of this; AI could accelerate it into something corrosive.

## The line: who owns the twin

There's a meaningful distinction. A **person-owned, person-controlled digital twin** — one you tune to argue for *your* views, that you send into the world and remain responsible for — is a different proposition from an institution modelling a whole constituency without anyone's consent. The first keeps a human accountable for what they "hit submit" on; the second replaces people with a guess about them.

:::tip[The principle to hold]
Use AI to **support** participation, not to simulate the public. Where AI helps people express and understand one another, it strengthens democracy; where it manufactures a synthetic public, it hollows it out.
:::

## A harder case: agents built from real positions

Between the two poles sits a subtler use. Tools like [Gemot](/toolkit/decide-together/) build synthetic agents from people's *own published positions* — each grounded in direct quotes — and have those agents deliberate to surface the cruxes that divide a debate, with anti-sycophancy checks that reject a revision when it drifts from what the source actually said. That is more honest than modelling a whole constituency from thin air: it stays anchored to real, attributable views and can be audited against them. But it is still a **map of a debate, not a substitute for the people in it**. The safe use is the same as any [argument map](/concepts/argument-mapping/) — to understand the shape of a disagreement before real people deliberate, never to let the agents' "agreement" stand in for a public that was never asked.

There is also a technical reason agents can't stand in for people. A 2025 benchmark, *HugAgent*, found that models recover a person's stated beliefs reasonably well but "struggle to predict belief updates under intervention": they can repeat what someone thinks, not how that person would respond to an argument they haven't met. Responding to new arguments is the whole point of deliberation. See [recursive representation](/concepts/recursive-representation/).

## Simulation as rehearsal, not representation

John Rountree and John Gastil make the strongest case for a bounded use. In the *Journal of Deliberative Democracy* (2026) they argue that **generative-AI deliberation simulations**, hypothetical discussions run "with or on behalf of" people, can "support rather than replace human judgment." Their worked example used GPT-4o to generate personas (a school counsellor, a student advocate and others) and simulate small-group talk about mental health in K-12 schools.

The uses they propose are mostly *around* real deliberation rather than instead of it:

- **Training facilitators**, who step into a simulated discussion as it unfolds, see how the simulated participants react, and get feedback on their interventions.
- **Time-sensitive consultation**, such as a draft discussion of trade-offs that an official can put in front of real communities within days of a crisis, as a starting point for their input.
- **Research and teaching**: cheaper deliberation experiments, and classroom deliberation without heavy organising.

They are explicit about the limits. Models carry the biases of their training data, including language bias and a skew toward better-off, Western voices, and the companies behind them are not transparent about that data. Simulated "absent perspectives" are acceptable only in low-stakes settings and never instead of reaching marginalised people, which "risks further marginalizing the perspectives that are simulated." Giving AI the power to decide policy or advise policymakers in an inscrutable way, they write, would undermine the role of citizen voices. That is the same line this page draws: rehearse with simulations, but never let them stand in for the public.

## Sources

- OECD and Bertelsmann Stiftung, [“Replacing citizen participation with simulations”](https://www.oecd.org/en/publications/artificial-intelligence-and-the-future-of-citizen-participation_a1ee2e0a-en/full-report/mapping-the-risks-and-challenges-of-using-ai-for-citizen-participation_f3ffbba1.html#section-d1e8126-961b2d1764), in *Artificial Intelligence and the Future of Citizen Participation* (2026).
- Matt Stempeck, with audience discussion (including the person-owned-twin counterpoint), "Civic AI" — Metagov seminar, 2025: [youtube.com/watch?v=SonfdR0_h2w](https://www.youtube.com/watch?v=SonfdR0_h2w)
- [Gemot](https://gemot.dev/) — an open-source multi-agent deliberation tool that builds agents from published positions and surfaces cruxes rather than summaries
- John Rountree and John Gastil, ["The Case for Using Generative AI to Run Deliberation Simulations"](https://delibdemjournal.org/article/id/1625), *Journal of Deliberative Democracy* (2026), doi:10.16997/jdd.1625.
