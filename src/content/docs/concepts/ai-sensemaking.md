---
title: AI sensemaking
description: When tens of thousands of people weigh in, no human can read it all. AI sensemaking clusters mass civic input, summarises it, and surfaces where people agree and split — in minutes, not months.
---

Open a public consultation to a whole city and you hit a wall: tens of thousands of comments, far more than any team can read, let alone synthesise fairly. **AI sensemaking** is the method that has grown up to meet that wall — using large language models to take a mass of civic input and turn it into something legible: the themes people raised, where they converge, and where they split. It is the machine-led counterpart to the human, small-group craft of [civic listening](/concepts/civic-listening/), and increasingly the back end of large [participation platforms](/toolkit/decide-together/).

## The pattern

However the input arrives — votes on statements, free-text survey answers, transcripts of many small conversations — the method runs through the same four moves:

1. **Cluster** the raw input into a manageable set of topics or opinion groups.
2. **File** every individual statement or vote under the themes it belongs to, so nothing is silently dropped.
3. **Summarise** each theme in plain language, with the summaries **grounded in citations** back to the original statements, so a reader can check the machine's claim against what people actually said.
4. **Surface** the shape of the conversation: the points of broad **consensus**, and the places of genuine **division** — not averaging disagreement away but making it visible.

The pay-off is speed and scale: what once took weeks of manual coding can run in minutes, which is what makes consultations of hundreds of thousands of people tractable at all.

## Where it shows up

- **[Jigsaw](/ecosystem/overview/)'s Sensemaker** (open-source, 2024) takes the statements and votes from a [Polis](/toolkit/decide-together/)-style conversation and uses Google's Gemini to find the topics, file every statement, and write cited summaries flagging agreement and disagreement. It was the engine behind Bowling Green, Kentucky's [25-year planning consultation](/run-reports/bowling-green-what-could-bg-be/), turning more than a million votes into twelve themes.
- **Polis** itself does a lighter, statistical version: its opinion-group maps already surface the statements that win support *across* clusters — the [uncommon ground](/concepts/uncommon-ground/) — before any LLM is involved.
- Open tools in the same family (such as Talk to the City) apply the pattern to free-text and interview transcripts rather than vote matrices.

## The catch

AI sensemaking buys scale at the cost of the small-group, story-first *texture* that [civic listening](/concepts/civic-listening/) preserves, and it inherits every weakness of the model doing the summarising: it can flatten nuance, miss a minority framing, or assert a consensus that isn't there. That is why even Sensemaker's designers keep a [human in the loop](/concepts/ai-and-deliberation/) to check and correct the output before it travels, and why grounding every summary in citations matters: it lets people audit the machine rather than trust it. Treated that way — as scaffolding for human judgement, not a replacement for it — it is one of the few realistic answers to [hearing a whole community at once](/concepts/scaling-deliberation/). The risk to watch is [synthetic participation](/concepts/synthetic-participation/): summarising real input is sensemaking; *generating* opinions people never held is not.

## Sources

- "Making sense of large-scale online conversations" — Jigsaw (Google, 2024): [medium.com/jigsaw](https://medium.com/jigsaw/making-sense-of-large-scale-online-conversations-b153340bda55)
- The Computational Democracy Project, on [Polis](https://pol.is/) and its opinion-mapping method
