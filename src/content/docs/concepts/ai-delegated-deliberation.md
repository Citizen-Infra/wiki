---
title: AI-delegated deliberation
description: A third path between AI mediating a real conversation and faking citizens outright — your own AI agent argues on your behalf when you can't be in the room. Promising, and quietly risky.
---

Deliberation has a bandwidth problem: it works beautifully in a small room and strains as the group grows. AI has been offered as the fix in two very different ways. One keeps real people at the centre and uses AI to *synthesise what they wrote* — the [Habermas Machine](/concepts/habermas-machine/) approach. The other removes people entirely and generates a crowd of stand-ins — the danger named under [synthetic participation](/concepts/synthetic-participation/). A 2026 paper by Joseph Low, Michiel Bakker, Lewis Hammond and colleagues proposes a **third path, "AI-delegated deliberation":** you author your own starting views, then an AI agent argues *on your behalf* — including in discussions you never attend — while you keep the right to inspect and correct whatever it said for you.

## How it works

The authors built a live platform, Habermolt, to try it. Each person gets a persistent agent that holds their views, joins conversations either on a schedule or when its human shows up, proposes a new statement when it judges a position is missing, and helps rank the pool of statements down to a single consensus text. In principle it is the best of both worlds: the reach of automation with a human still authoring, and accountable for, the input.

## What the experiment found

In practice the results are a caution. Across 140 deliberations, agents left to run **autonomously produced markedly less diverse contributions** than when their humans directed them — in one discussion, 36 of 54 agent-written opinions opened with the *identical* phrase, "Technical safety governance is...". No method of combining views came out ahead on both fairness and usefulness; it remains a frontier, not a solved problem. And the safeguard the whole idea rests on — the human correction channel — went **almost entirely unused**: of the people who ever submitted an opinion, only 8 of 91 ever revised one.

:::caution[The quiet distortion]
"An agent writing a statement is at once trying to express what its user believes and trying to win against everyone else's statements, and the second pull might quietly distort the first."
:::

## Why the risk lands on legitimacy

The authors are careful about *who* gets hurt. When an agent drifts from what its user actually thinks, the damage "is to the legitimacy of democratic processes rather than to individual users, and may be invisible to the people it affects." A process can look like broad participation while most of the real activity happens with no human in the room. That is what separates this from the [Habermas Machine](/concepts/habermas-machine/), which only ever reshuffles statements real people wrote, and what pulls it dangerously close to [synthetic participation](/concepts/synthetic-participation/): the line held is that a human authors and can correct the agent — but the platform's own data shows almost nobody does. Treated as a tool to *extend* a person's reasoning it is promising; treated as a way to *skip* their presence it hollows out the very thing deliberation is for.

## Sources

- [Delegating Deliberation to AI Representatives](https://arxiv.org/abs/2605.24413) — Joseph Low, Oscar Duys, Claude Formanek, Michiel Bakker & Lewis Hammond, arXiv (2026), on the Habermolt platform. Open access (CC BY). Bakker co-authored the original [Habermas Machine](/concepts/habermas-machine/) study.
