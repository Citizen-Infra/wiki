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

- **[Jigsaw](/ecosystem/overview/)'s Sensemaker** takes the statements and votes from a [Polis](/toolkit/decide-together/)-style conversation and uses Google's Gemini to find the topics, file every statement, and write cited summaries flagging agreement and disagreement. It was the engine behind Bowling Green, Kentucky's [25-year planning consultation](/run-reports/bowling-green-what-could-bg-be/), turning more than a million votes into twelve themes, and Jigsaw has since run it at state level (a 1,000-resident statewide survey in Oklahoma) and nationally (the *We the People* deliberation, which by Jigsaw's account distilled 2,400 Americans across all 435 congressional districts into 26 summary statements). In 2026 Jigsaw open-sourced the full developer library — its categorisation, predictive-agreement, quote-ranking, and recursive-summarisation pipelines — so civil-society groups can run the method on their own infrastructure.
- **[Convoca](/toolkit/decide-together/)** adds an accountability layer to the same pattern: human-led AI sensemaking wired to tools that **close the loop** — making traceable who was heard, who wasn't, and what changed — so a synthesis leads somewhere a resident can check rather than vanishing between planning cycles. Built by an MIT Media Lab team and used by New York City's planners.
- **Polis** itself does a lighter, statistical version: its opinion-group maps already surface the statements that win support *across* clusters — the [uncommon ground](/concepts/uncommon-ground/) — before any LLM is involved.
- Open tools in the same family (such as Talk to the City) apply the pattern to free-text and interview transcripts rather than vote matrices.

## The catch

AI sensemaking buys scale at the cost of the small-group, story-first *texture* that [civic listening](/concepts/civic-listening/) preserves, and it inherits every weakness of the model doing the summarising: it can flatten nuance, miss a minority framing, or assert a consensus that isn't there. That is why even Sensemaker's designers keep a [human in the loop](/concepts/ai-and-deliberation/) to check and correct the output before it travels, and why grounding every summary in citations matters: it lets people audit the machine rather than trust it. Treated that way — as scaffolding for human judgement, not a replacement for it — it is one of the few realistic answers to [hearing a whole community at once](/concepts/scaling-deliberation/).

:::caution[The line not to cross]
The risk to watch is [synthetic participation](/concepts/synthetic-participation/): summarising real input is sensemaking; *generating* opinions people never held is not.
:::

## Five tests for a public summary

Beth Simone Noveck calls this **democracy's compression problem**: institutions need to reduce a mass of contributions to something people can use, and that reduction decides what remains visible. A short, accurate summary can still lose an unusual experience or a disagreement that matters. She proposes five qualities for the whole listening process:

| Quality | What to check |
|---|---|
| Fidelity | Does the account represent contributors, rather than themes imposed by the model or prompt? |
| Plurality | Do minority experiences, unusual observations, useful knowledge and meaningful disagreement survive? Frequency alone does not establish importance. |
| Traceability | Can a decision-maker follow a theme back to the contributions and evidence behind it? |
| Contestability | Can affected people question exclusions, categories or an account of what they said? |
| Consequence | Is there a receiver with authority to act on what was learned? |

The last test connects sensemaking to [binding or advisory participation](/concepts/binding-vs-advisory/). Say what influence people can exercise and who will respond before inviting them to contribute. A well-supported synthesis can inform a decision while leaving a conflict of values unresolved; see [productive uncertainty](/concepts/productive-uncertainty/).

Noveck's standards cover the people who frame the question, recruit participants, choose categories, check outputs and make decisions, as well as the model. She argues for institutions retaining the ability to inspect, compare and change their listening systems. Different sources of knowledge—resident accounts, frontline experience, administrative records and representative deliberation—can illuminate different problems. They need not end in one authoritative summary.

## Sources

- Beth Simone Noveck, [*Democracy's Compression Problem*](https://informationaldemocracy.substack.com/p/democracys-compression-problem), Informational Democracy (25 August 2026), with her [opening provocation](https://informationaldemocracy.substack.com/p/provocation-noveck).
- "Making sense of large-scale online conversations" — Jigsaw (Google, 2024): [medium.com/jigsaw](https://medium.com/jigsaw/making-sense-of-large-scale-online-conversations-b153340bda55)
- "One year on: the momentum behind Jigsaw's Sensemaking AI" — Jigsaw (Google, 2026), on open-sourcing the library and the Oklahoma and *We the People* deployments: [medium.com/jigsaw](https://medium.com/jigsaw/one-year-on-the-momentum-behind-jigsaws-sensemaking-ai-b340e89ed516)
- [Convoca](https://convoca.org/) — community-listening and sensemaking infrastructure, from an MIT Media Lab team
- The Computational Democracy Project, on [Polis](https://pol.is/) and its opinion-mapping method
