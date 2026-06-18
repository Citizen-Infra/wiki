---
title: AI reflectors
description: Can an AI compute what a community "really wants"? A critique of the idea that the collective will is a hidden quantity waiting to be calculated, and a humbler role for AI as a mirror.
---

As AI gets better at processing free-form text, it's tempting to point it at a population and ask it to output *what the people want*. Manon Revel (now at Google DeepMind) and political philosopher Philippe Pénigaud argue that this temptation rests on a flawed assumption, and propose a more modest and more useful role: the **AI reflector**.

## Three stages of inferring the collective will

Their starting point is that today's AI methods are the latest in a century-long lineage of trying to compute the collective will:

1. **Polling** — from Gallup's stratified sampling onward. Cheap and scalable, but it forces people into constrained multiple-choice questions, and "humans don't think in tick-boxes."
2. **Latent methods** — "collective response systems" like [Polis](/toolkit/decide-together/) and Remesh, where people write free-form statements and others vote agree/disagree, building an interaction (or "will") matrix. [Bridging](/concepts/bridging-and-pro-social-media/) aggregation then surfaces statements that span opposed groups.
3. **LLM methods** — the [Habermas Machine](/concepts/habermas-machine/) and generative social choice, which use language models to turn raw opinions into representative statements (usually still reconstructing a "will matrix" in the middle, to keep some interpretability).

## The flaw: the calculability hypothesis

Underneath all three sits what Revel and Pénigaud call the **calculability hypothesis**: the belief that preferences exist as standalone, pre-given quantities, and the only question is how best to *compute* them. They argue the collective will is instead **indeterminate** at three levels:

- **Empirically** — preferences are unstable; they shift with framing, context, and mood.
- **Aggregatively** — even with identical inputs, different aggregation methods yield different "winners" (the classic social-choice problem).
- **Normatively** — there is no people's will floating in the world waiting to be found. It is *co-created* through the process of deliberating, opting in, and feeling heard (a point they draw from the historian Pierre Rosanvallon).

Because of this, they're wary of using AI to make **binding** decisions. In Habermas's terms, AI doesn't belong in the *context of justification* (where opinion becomes binding law) — the legitimacy cost is too high. Its proper home is the *context of discovery*.

## AI as a mirror, not an oracle

So they reframe these tools as **AI reflectors**: a mirror that helps a community understand itself, rather than an oracle that hands down an answer. Two functions:

- **Reflective elicitation** — you write open-ended thoughts privately, and the AI offers counterpoints, testimonies, or contradictory facts *on request*, so you reconsider your view in light of others before any group decision (the introspective "deliberation within" moment).
- **Synthesis** — generating an inclusive picture of where the group actually stands, without burying the individual reasons underneath.

This is the same instinct as the [complementary-vs-competitive test](/concepts/ai-and-deliberation/): build tools that strengthen collective sense-making, and keep the binding decisions human. See also [synthetic participation](/concepts/synthetic-participation/) for the failure mode of skipping the humans entirely.

## Sources

- Manon Revel & Philippe Pénigaud, "AI-Facilitated Collective Judgements" / "AI-Enhanced Deliberative Democracy and the Future of Collective Will," 2025: [arxiv.org/abs/2503.05830](https://arxiv.org/abs/2503.05830)
- Manon Revel, talk to the Cooperative AI seminar series, 2025: [youtube.com/watch?v=u_azC4tgpRU](https://www.youtube.com/watch?v=u_azC4tgpRU)
