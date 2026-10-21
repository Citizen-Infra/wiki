# Source ingestion queue

Sources to process into the wiki, grouped by priority tier (see notes below).
Each is processed via the `/process-source` flow -> wiki pages + a per-source
`content-backlog` GitHub issue. Per-session log: `process-notes.md`; full
ingestion history in memory (`project_cibc_wiki.md`).

**How to use:** work top-down (Tier 1 first); skip any freely. When one is done,
move it to **Processed** with its date and issue number.

**Queue status (2026-10-18):** 124 unchecked source entries: **100 ingestion
candidates** and **24 Tier 4 citation-only references**. Tier 4 is not ingestion
work. These are entry counts, not a deduplicated count of sources or a count of
pages to write.

**Earlier progress (July 2026):** **Tier 1 essentially cleared** (Connecticut deferred until its assembly concludes Sep 2026). Done 2026-07-20: Tang/plurality + Civic-AI clusters + CA-cluster waves A–D; Tier-1 waves 3–4 papers/essays + Go Vocal/Decidim vendor webinars folded per #26; civic-AI sensemaking wave (Jigsaw One-Year-On, 6-Pack of Care, Gemot, Convoca, Cortico webinar); civic-AI papers wave (EU JRC four-futures, FAccT connective-tissue, Habermolt, Schirch/Goldberg); European civic-tech-hub wave (mySociety report, hub launch panel, SPOON, Beyond-websites, Participation Playbook — TVNWBE4XwTw skipped); final Tier-1 wave (Rewiring Democracy, Reboot, OECD Ukraine, Pogrebinschi/Latin America). Done 2026-07-24: People Powered × FIDE × GloCAN "1,000 Citizens' Assemblies Later" webinar (Milosh impact taxonomy + Victoria-Saanich case) → 2 new concept/run-report pages, 6 enrichments, ecosystem +2 (FIDE North America, GloCAN).

## Queue


### Tier 1 — core fit (process first)

**Citizens' assemblies, sortition & deliberation** — IN PROGRESS (2026-06-23): waves A–D done (15 processed, 2 skipped); Latin America book launch done 2026-07-20; People Powered × FIDE × GloCAN 1,000-CAs webinar done 2026-07-24

- [x] https://www.peoplepowered.org/events-content/1000-citizens-assemblies-later-whats-changed — People Powered × FIDE × GloCAN, "1,000 Citizens' Assemblies Later, What's Changed?" webinar (63m) — Maria Milosh (U. Chicago), Ryan Gem (People Powered), Miles Brackenbury (FIDE North America), Melisa Ross (GloCAN), plus a Lexington participant. Fireflies transcript 01KXZNEXRY1EZ6WK7EVM6TPH37 (semi-private, cited without hyperlink). → concepts/citizens-assembly-impact-taxonomy (NEW; Milosh 3-level taxonomy, 66-study brief), run-reports/victoria-saanich-citizens-assembly (NEW; concierge-service facilitation, neighbour-effect), enrichments (citizens-assembly + FIDE-7 section, sortition self-selection ceiling, running-a-CA icebreaker + between-session care, binding-vs-advisory referendum-rejection gap, lexington-civic-assembly participant testimonial), ecosystem +2 (FIDE North America, GloCAN), library. [Tier 1] (2026-07-24)

- [~] https://www.youtube.com/watch?v=ttAFeJM-3x8 — Hélène Landemore (Yale): Politics without Politicians (63m) → SKIPPED: no captions available (theme already covered by sgFUtZCgAqI)
- [x] https://www.youtube.com/watch?v=XCBEuSp_heI — Michael McCarthy, The Master's Tools: An interview with Claudia Chwalisz (57m) → concepts/democratising-finance, library
- [~] https://www.youtube.com/watch?v=BYYvIckMVak — Citizens' Assemblies: A Democratic Response to Authoritarianism in Central & Eastern Europe (61m) → SKIPPED: no captions available (genuine gap — revisit if transcript appears)
- [x] https://www.youtube.com/watch?v=2D4gHP5nsgk — Spaces for deliberation: Eight spatial qualities for designing deliberative assemblies (74m) → concepts/spaces-for-deliberation, ecosystem (MASS LBP, MosaicLab, DemoLab), library
- [x] https://www.youtube.com/watch?v=POLwnybqUrY — Stories from behind the scenes of the UK’s first citizens’ assembly in a museum (86m) → run-reports/birmingham-museums-jury, ecosystem (Shared Future)
- [x] https://www.youtube.com/watch?v=_J4WxRRY2RQ — Scaling democratic innovations: Features of effective catalyst organisations and future frontiers (90m) → concepts/scaling-catalysts, run-reports/deschutes-youth-homelessness, ecosystem (Involve, Healthy Democracy, Central Oregon CAP)
- [x] https://www.youtube.com/watch?v=dBHUCdoTMKE — An interview with Josh Burgess, co-founder of Central Oregon Civic Action Project (19m) → folded into run-reports/deschutes-youth-homelessness
- [x] https://www.youtube.com/watch?v=dLq2vr3j-nM — Learning Call on The Norwegian Future Panel | KNOCA (84m) → run-reports/norway-future-panel
- [x] https://www.youtube.com/watch?v=SbIz83NRBVY — Learning Call on the Austrian Climate Assembly | KNOCA (85m) → run-reports/austrian-climate-assembly
- [x] https://www.youtube.com/watch?v=ZN1XDn-tVbc — Book Launch: Innovating Democracy? The Means and Ends of Citizen Participation in Latin America (66m) — Thamy Pogrebinschi (WZB Berlin) + Mark Warren (UBC) → concepts/participation-as-means-not-end (NEW; LATINNO frame, means × ends grid, Latin America's post-2015 fragility) + library [Tier 1] (2026-07-20)
- [x] https://www.youtube.com/watch?v=tEhpNXYXxZo — Paper Discussion: Putting Back the Action into the Deliberative System Debate (59m) → concepts/institutionalising-deliberation
- [x] https://www.youtube.com/watch?v=cd0eJqV_XPk — The Role of Sortition in Organizations (64m) → concepts/sortition-in-organisations, ecosystem (INSA, Democracy Without Elections)
- [x] https://www.youtube.com/watch?v=3CTJXS9WA1E — Deliberative Polling: Changing the Tides of Democracy | Alice Siu | TEDxStanford (16m) → concepts/deliberative-polling, run-reports/america-in-one-room
- [x] https://www.youtube.com/watch?v=RtgvyXRttw4 — Nordic Deliberation Learning Call: Paths towards institutionalization in local governments (38m) → concepts/institutionalising-deliberation (municipal), ecosystem (Nordic Deliberation Network)
- [x] https://www.youtube.com/watch?v=aofZqy8y8RA — Webinar | Deliberative Democracy for Breaking the Gridlock: Exploring insights from HDR 2023/24 (86m) → concepts/breaking-the-gridlock, institutionalising-deliberation (Curato 5 ways), run-reports/malawi-cdf-citizens-juries, ecosystem (UNDEF, newDemocracy, Delibera Brasil), library
- [x] https://www.youtube.com/watch?v=eAkcea8rO7E — The Citizen’s White Paper and the Civil Service: Participatory policy making in action (90m) → concepts/participatory-policymaking, run-reports/nhs-10-year-plan, ecosystem (Demos, UK Policy Lab), library
- [x] https://www.youtube.com/watch?v=cmHHZ1_cyeY — Tiago Peixoto about the role of collective action in reforming democratic systems (66m) → concepts/movements-not-arguments, library
- [x] https://www.youtube.com/watch?v=7ZZ3xmEwkos — Deep Democracy   Light The Fire And Build Trust With Leen Schelfhout (57m) → concepts/deep-democracy, ecosystem (Lewis Deep Democracy), library
- [x] https://www.youtube.com/watch?v=j7i72bJSBZE — How citizens can take back power (91m) → concepts/peoples-branch, institutionalising-deliberation, ecosystem (Iswe, Nesta), library (Wolf)

**Civic-tech platforms & participation practice**

- [x] https://www.youtube.com/watch?v=HNpd5Fa-ze8 — Supporting Participation: Building an effective European civic tech hub (59m) → folded with the mySociety report into concepts/growing-the-civic-tech-field (NEW) — the launch panel added the government-side view (leadership gap, control fears) [Tier 1] (2026-07-20)
- [x] https://www.youtube.com/watch?v=M3H-w4Osajk — TICTeC 25: Liset Hamming (SPOON, Netherlands) (25m) → ecosystem (SPOON, Dutch FOI/Alaveteli transparency non-profit) [Tier 1] (2026-07-20)
- [x] https://www.youtube.com/watch?v=kvJVCgBprwY — Beyond websites: How pro-democracy projects reach their audiences (47m) → concepts/the-distribution-problem (NEW; Georgia/Nigeria/Uganda reach cases) + library [Tier 1] (2026-07-20)
- [x] https://www.youtube.com/watch?v=Wm_nuJ2xEoE — TICTeC 25: Putting the humans back in - Manchester People’s Panel for AI (18m) → run-reports/manchester-peoples-panel-ai
- [~] https://www.youtube.com/watch?v=ucKz_EmO-c0 — Go Vocal webinar | Building a culture of engagement (55m) → FOLDED into Go Vocal toolkit entry (vendor webinar)
- [~] https://www.youtube.com/watch?v=_OVZJtw-xkA — Go Vocal Webinar | Rethinking public engagement – Designing a methods mix that works (45m) → FOLDED into Go Vocal toolkit entry
- [~] https://www.youtube.com/watch?v=jlOnf8wmhYc — Go Vocal Webinar | How Allen, TX engaged more residents and shaped a better Comprehensive Plan (46m) → FOLDED into Go Vocal toolkit entry
- [~] https://www.youtube.com/watch?v=R-JVbHzQa5I — Go Vocal Webinar | Growing impact and engagement culture through digital engagement (48m) → FOLDED into Go Vocal toolkit entry
- [~] https://www.youtube.com/watch?v=N3MOfLBnYBI — Go Vocal Webinar | Implementing proposals successfully: Insights from practitioners (62m) → FOLDED into Go Vocal toolkit entry
- [~] https://www.youtube.com/watch?v=YmBwy6OYIVo — How Copenhagen used bottom-up proposals to engage 12,000 residents in just 4 months – Episode 7 (42m) → FOLDED into Go Vocal toolkit entry
- [~] https://www.youtube.com/watch?v=GJrkdf-Aytc — Partnering with residents on budget priorities in St Louis, with Yusuf Daneshyar – Episode 8 (31m) → FOLDED into Go Vocal toolkit entry
- [~] https://www.youtube.com/watch?v=y9Jna4svs90 — #DecidimFest23. Decidim Stories: Use Cases Beyond Cities (EN) (88m) → FOLDED into Decidim toolkit entry (DecidimFest)
- [~] https://www.youtube.com/watch?v=-WS15nbBG0M — #DecidimFest23. Artificial Intelligence for Citizen Participation (EN) (77m) → FOLDED into Decidim toolkit entry (DecidimFest)
- [x] https://www.youtube.com/watch?v=YRQLybWlPJk — The Participation Playbook launch: An Interactive guide for participatory program planning! (58m) → library + concepts/participatory-policymaking (enriched; People Powered planning guide) [Tier 1] (2026-07-20)
- [~] https://www.youtube.com/watch?v=TVNWBE4XwTw — How can collective intelligence empower our democracy? (51m) → SKIPPED: Antiparties/Bella Roberts production (user's standing skip) + confirmatory (SAFE framework / meditation+deliberation already covered by civic-listening, plurality, ai-and-deliberation). Novel-but-tangential: an Electoral Commission LLM chatbot pilot — not ingested. (2026-07-20)
- [x] https://www.youtube.com/watch?v=1qLhm7iRyGY — Translating Community Voices into Actionable Insights with AI (53m) → concepts/civic-listening (Cortico's AI code-suggestion workflow + ~70% human-accept), library. **Boston Blue Hill Ave case NOT written**: the webinar's "$40M community-driven redesign" failed verification (real cost ~$44M city / $80M federal; the project is contested, with residents saying they were not heard) — folded only the generic method per editorial discipline.

**Civic AI & deliberation-at-scale** — CLUSTER COMPLETE (2026-06-18)

- [x] https://www.youtube.com/watch?v=bIGWZY-fCk0 — Mozilla Foundation Panel: AI for Democracy, or Democracy for AI? (51m) → concepts/does-ai-weaken-institutions, ecosystem (Mozilla, Ushahidi)
- [x] https://www.youtube.com/watch?v=u_azC4tgpRU — AI-Enhanced Deliberative Democracy and the Future of the Collective Will (55m) → concepts/ai-reflectors, ecosystem (Cooperative AI Foundation)
- [x] https://www.youtube.com/watch?v=qKTS0mfXRCk — From Division to Dialogue—How AI Can Save Democracy | Deb Roy (Ep. 16) (44m) → concepts/civic-listening (dialogue networks), library
- [x] https://www.youtube.com/watch?v=mOfvIfg2XlE — Five dimensions of scaling democratic deliberation: With and beyond AI - paper launch (87m) → concepts/scaling-deliberation, ecosystem (Arantzazulab, We Do Democracy)
- [x] https://www.youtube.com/watch?v=-cCguFRH7f4 — The Peacemaking Machine with MIT and Deepmind's Michael Henry Tessler and Michiel A. Bakker (66m) → concepts/habermas-machine, library
- [x] https://www.youtube.com/watch?v=T7Ilbu-24Bo — Democracy in the Age of AI Panel Discussion at the MIT Museum (95m) → concepts/pre-bunking (DebunkBot), ecosystem (Sortition Foundation) [mostly confirmatory]
- [x] https://www.youtube.com/watch?v=admufe52j0I — Integrating AI into Citizens’ Assemblies: Benefits, Concerns and Future Pathways (65m) → concepts/ai-and-deliberation (McKinney evaluation framework)
- [x] https://www.youtube.com/watch?v=m_EkUpH5L4Y — Hélène Landemore: Can AI Bring Deliberation to the Masses? (60m) → run-reports/french-great-national-debate, concepts/ai-and-deliberation (mass-deliberation models)
- [x] https://www.youtube.com/watch?v=OQxMGMB5kL8 — Launch Webinar: A Roadmap to Democratic AI (55m) → concepts/public-ai, democratising-ai, ecosystem (CIP, AI Now, Karya)
- [x] https://www.youtube.com/watch?v=HzxW3a9jAxE — Is This the End of Human Politicians? | Jamie Joyce (103m) → concepts/argument-mapping, ecosystem (Society Library, Internet Archive)
- [x] https://www.youtube.com/watch?v=vgFB9opxRKs — Q&A publicai.co & Apertus (74m) → concepts/public-ai, ecosystem (Swiss AI Initiative, Public AI Inference Utility)
- [x] https://www.youtube.com/watch?v=1yW1omYoxYw — Scottish Data & Public Participation Then, Now, Beyond - Dr Tom Wilkinson (60m) → ecosystem (Sortition Foundation); participation-tool angle already covered by Metagov entry


### Tier 2 — strong fit, more conceptual

**Audrey Tang, plurality & network societies**

- [x] https://www.youtube.com/watch?v=S0cmxZzu5wA — From Taiwan to Germany:How Radical Participation Leapfrogs Public Trust (Tang, Bruhn) | DLD26 (20m) → run-reports/taiwan-alignment-assemblies, library
- [x] https://www.youtube.com/watch?v=RbvrMnv5g6w — Audrey Tang: On Becoming a "Good Enough Ancestor" (90m) → concepts/plurality, conversation-networks, uncommon-ground
- [x] https://www.youtube.com/watch?v=aXgne-9F7uU — How Pro-Social Technology Is Saving Democracy from ‘Big Tech’ with Audrey Tang | TGS 169 (84m) → plurality cluster + run-reports
- [x] https://www.youtube.com/watch?v=snnk_8q1w_4 — Salon IV: Plurality in Practice - 2024 Protocol Symposium (62m) → concepts/plural-mechanisms, library
- [x] https://www.youtube.com/watch?v=CjwyCt9LZvI — Design for Plurality (Panel) - Tokyo 2024 (36m) → concepts/plurality (three futures), library
- [x] https://www.youtube.com/watch?v=9UYjLiKvx68 — Collective Decision Making with Matt Prewitt | Green Pill #25 (66m) → concepts/plural-mechanisms, relational-property
- [x] https://www.youtube.com/watch?v=B9RQlwyeYCY — Network Societies, Civic Tech & Democracy - Glen Weyl & Timour Kosters | Edge City Austin (81m) → concepts/network-societies, run-reports/anno-tokyo-2024
- [x] https://www.youtube.com/watch?v=-5Lq2uaOgBw — Nathan Schneider: Contributions to a Glossary of Protocol (70m) → concepts/protocol (enriched), library

**The commons, P2P & cosmolocalism**

- [ ] https://www.youtube.com/watch?v=pBoDmyv8eqU — Transforming GOVERNANCE with Michel Bauwens (60m)
- [ ] https://www.youtube.com/watch?v=zrhxeZfRz9A — #1 - What is Governance? - Yip Thy-Diep Ta, Weaver Weinbaum, Michel Bauwens, Marta Lenartowicz (57m)
- [ ] https://www.youtube.com/watch?v=kQyOyPo-pwA — #3 - Defining De Governance - Michel Bauwens, Yip Thy Diep Ta, Weaver Weinbaum (59m)
- [ ] https://www.youtube.com/watch?v=fqDyGfjJZJI — #6- Distributed/Decentralized/Polycentric - Primavera De Filippi, Michel Bauwens, Weaver Weinbaum (60m)
- [ ] https://www.youtube.com/watch?v=vqOsCgSs0e8 — P2P Ecosystems Where they’ve been, and where they're going with Michel Bauwens (72m)
- [ ] https://www.youtube.com/watch?v=zQLWBnQYd4M — Commoning as a Constructive Disruption of the Climate Impasse with Dr. David Bollier (65m)
- [x] https://www.youtube.com/watch?v=8OS0knZwh28 — Participatory Grantmaking During Polycrisis (47m) — Nino Ugrekhelidze (Dalan Fund), Yara Dowani (Rawa), Ruby Johnson (Global Resilience Fund), moderated by Coco Jervis (Mama Cash) → concepts/participatory-grantmaking (NEW), ecosystem +8 (Rawa, Dalan Fund, Global Resilience Fund, Purposeful, Women Win, MADRE, Mama Cash, PGM Community), library. Backlog = issue #37. [Tier 2] (2026-08-07)
- [ ] https://www.youtube.com/watch?v=xSFCmLOBG9g — Civic Community Fund and Ecosystem, Korea & Japan (Fireside Chat) - Tokyo 2024 (20m)
- [ ] https://www.youtube.com/watch?v=kURvQJQpt8M — Tackling East Asia’s Population Decline Issues with Local Coop’s Subsystem - Tokyo 2024 (24m)

**Rights of nature / neighbourhood power / bioregional**

- [ ] https://www.youtube.com/watch?v=G5O7BozdFtI — How to Save Democracy: Giving Nature a Voice (79m)
- [ ] https://www.youtube.com/watch?v=lRg___84eJQ — How to Save Democracy: Neighbourhood Power (74m)
- [ ] https://www.youtube.com/watch?v=oyYsTyLBBpc — How to Save Democracy: Meet the Pioneers (66m)
- [ ] https://www.youtube.com/watch?v=9q0EsXY4TS0 — Adventures In Democracy: Everyone A Citizen (69m)
- [ ] https://www.youtube.com/watch?v=NBGYgUdphuk — Adventures in Democracy with Baratunde Thurston (69m)
- [ ] https://www.youtube.com/watch?v=UC-fkuyvSVY — Mapping Your Local Food System Part 1 (36m)
- [ ] https://www.youtube.com/watch?v=KFZ4OdW7Mg8 — From Neighbor Networks to Bioregional Food Systems: Part 2 (39m)

**Indy Johar / Dark Matter Labs (extends #11/#12)**

- [ ] https://www.youtube.com/watch?v=mx4gQptRdXk — "Democracy is No Longer Expanding Agency"—Planetary Civics in the AI Age - Indy Johar | #59 (58m)
- [ ] https://www.youtube.com/watch?v=Ol37-FfWKck — Many-to-Many System - Sharing Session (74m)
- [ ] https://www.youtube.com/watch?v=lKkvITqB8Zw — Kate Raworth & Indy Johar Talk Retrofit | 15.11.25 (47m)


### Tier 3 — the bigger picture (long; a couple cover the theme)

**Metacrisis, sensemaking, Game B, regenerative economics**

- [ ] https://www.youtube.com/watch?v=-6V0qmDZ2gg — The Psychological Drivers of the Metacrisis: John Vervaeke Iain McGilchrist Daniel Schmachtenberger (201m)
- [ ] https://www.youtube.com/watch?v=U0YJ0C81n4s — Daniel Schmachtenberger – Existential Risk and Phase Shifting to a New World System (89m)
- [ ] https://www.youtube.com/watch?v=KCSsKV5F4xc — Moloch, AI & Capitalism: The System Eating Itself | Daniel Schmachtenberger & Liv Boeree (91m)
- [ ] https://www.youtube.com/watch?v=q5vsCia1QBU — Making Sense of Global Chaos: A New Civilization is Emerging (And Why It Matters) (67m)
- [ ] https://www.youtube.com/watch?v=hZpKdfbrd6o — Rebuilding Society on Meaning (Improved version) (92m)
- [ ] https://www.youtube.com/watch?v=SbUViuFITTI — Democracy in the Next Cycle of History | Jonathan Haidt (57m)
- [ ] https://www.youtube.com/watch?v=Wseyp_JvNYQ — On Democracy | Martha Minow, Melody Barnes, and Andrew Heyward | MIT CCC (56m)
- [ ] https://www.youtube.com/watch?v=yXBAtdyBto0 — The Civium Project 01: Civium vs  City (loud audio version) (18m)
- [ ] https://www.youtube.com/watch?v=rf1nXskea9Q — Building a Better Civilization with Tech Pioneer Jordan Hall | Win-Win with Liv Boeree (109m)
- [ ] https://www.youtube.com/watch?v=hJsWRNurV9g — Jordan Hall – Global Politics and Civilizational Redesign (90m)
- [ ] https://www.youtube.com/watch?v=7h6X7WBANKY — Kate Raworth: "The Superorganism V. The Doughnut" | The Great Simplification #77 (102m)
- [ ] https://www.youtube.com/watch?v=GycOcQn3EvI — Towards a More Regenerative Future with John Fullerton | TGS 149 (88m)
- [ ] https://www.youtube.com/watch?v=KbKymchp-54 — David Sloan Wilson: "Chickens, Cooperation and a Pro-social World" | The Great Simplification #56 (82m)


### Tier 4 — low value here / cite-don't-ingest

**Short explainers (one channel — better to cite the underlying books)**

- [ ] https://www.youtube.com/watch?v=wLxWrTXn7z0 — Rank Choice Voting: How It Works (8m)
- [ ] https://www.youtube.com/watch?v=Vdgh1asfrqM — Rank Choice Voting: Advantages and Disadvantages (10m)
- [ ] https://www.youtube.com/watch?v=ElBSUQyC_ak — The Constitution of Knowledge | A Book Summary (16m)
- [ ] https://www.youtube.com/watch?v=xMDoE6fIAXE — Sortition Governance: Advantages & Disadvantages (12m)
- [ ] https://www.youtube.com/watch?v=yg5ihasHAek — Tim Urban's Ladder, Haidt & Kahneman | “What's Our Problem?” Book Review Part 1 of 3 (16m)
- [ ] https://www.youtube.com/watch?v=RW7aoRfrw84 — Tim Urban's Emergence & Collective Intelligence | What's Our Problem Book Review Part 2 of 3 (9m)
- [ ] https://www.youtube.com/watch?v=4l02748Zs_0 — Critique of book “What's Our Problem” by Tim Urban | Book Review Part 3 of 3 (23m)
- [ ] https://www.youtube.com/watch?v=VBeTDk_A8Yg — Bubble Cluster Governance: Electing Sensemaking Groups (10m)
- [ ] https://www.youtube.com/watch?v=Oa_dRBN4zdA — Sociocracy: Could Corporate-Style Governance Work in Broader Society? (13m)

**Foundational thinkers / classics (Library candidates)**

- [ ] https://www.youtube.com/watch?v=N8CXgBSQhcA — Big Think Interview With Elinor  | Big Think (15m)
- [ ] https://www.youtube.com/watch?v=RNkkEU7EoOk — James Scott on the topic of "The Art of Not Being Governed" (94m)
- [ ] https://www.youtube.com/watch?v=leWAxhreI6E — Episode 17: Wayne Price on Peter Kropotkin (59m)
- [ ] https://www.youtube.com/watch?v=S-3ESBzGg4Q — Indigenous Thinking for Troubled Times, Tyson Yunkaporta (44m)
- [ ] https://www.youtube.com/watch?v=n08jFDe8g6c — Lessons that Organizations and Institutions Can Learn From Nature  — Eric Berlow at The Interval (21m)
- [ ] https://www.youtube.com/watch?v=nvL3vqMzznY — Nadia Asparouhova — Tech elites, democracy, open source, & philanthropy (82m)

**Misc one-offs**

- [ ] https://www.youtube.com/watch?v=FHpcdHiyCXw — Future Building Starts with Coordination: Agree or Disagree? - Yuting Jiang (9m)
- [ ] https://www.youtube.com/watch?v=sgFq4ty8wSI — How to Be an Active Citizen and Spark Change | Gabriel Marmentini | TED (10m)
- [ ] https://www.youtube.com/watch?v=pca6kIiAPe8 — Matteo Menapace & Guests - Do Games have Political utility? (78m)
- [ ] https://www.youtube.com/watch?v=3jNaLhEhgYc — Facilitating for Emergence: A Conversation with Adam Kahane (59m)
- [ ] https://www.youtube.com/watch?v=ogtpxA6brGo — The Cynefin Framework - A Leader's Framework for Decision Making and Action. (12m)
- [ ] https://www.youtube.com/watch?v=Bhz1LIEku7M — Place based Philanthropy and Civic Health (62m)
- [ ] https://www.youtube.com/watch?v=ib8I9WqM93M — ACTIVATED CITIZENSHIP | A Busboys and Poets Books Presentation (70m)
- [ ] https://www.youtube.com/watch?v=dnIOrPYgszk — Small City Governance with Bartek Starodaj (50m)
- [ ] https://www.youtube.com/watch?v=HRO4JGUYnt8 — Metagov Seminar - Understanding Early Large-Scale Collectives (55m)


### From past digests

Substantive sources surfaced in past @citizen_infra link digests (articles/reports/books, not the talks above). Re-tier or process freely; Tier hints are a starting point.

- [x] https://carnegieuk.org/publication/blueprints-for-democratic-wellbeing/ — Carnegie UK (Escobar & Elstub): four blueprints to embed citizens' mini-publics in parliaments → concepts/institutionalising-deliberation + library [Tier 1]
- [x] https://demos.co.uk/research/everyday-democracy-a-new-democratic-operating-model-to-rebuild-trust-between-state-and-citizen/ — Demos (Miriam Levin): "Everyday Democracy" — continuous participation to rebuild state–citizen trust → concepts/institutionalising-deliberation + library [Tier 1]
- [x] https://democracywithoutpoliticians.org/ — Terry Bouricius (book, Routledge 2026): the case for sortition over elections + the multi-body design → concepts/multi-body-sortition + library [Tier 1] (processed from epub)
- [x] https://mitpress.mit.edu/9780262049948/rewiring-democracy/ — Schneier & Sanders (MIT Press, book): "Rewiring Democracy" — AI across the democratic process → library + concepts/civic-ai (enriched) [Tier 1, civic-AI] (2026-07-20)
- [x] https://research.mysociety.org/html/supporting-participation/ — mySociety (for Sitra): 14 recommendations for a European civic-tech hub (grow demand / strengthen supply / fix procurement) → concepts/growing-the-civic-tech-field (NEW, anchor) + library [Tier 1] (2026-07-20)
- [x] https://www.sitra.fi/en/publication/european-civic-technology-and-citizen-participation-in-the-age-of-ai/ — Sitra: European civic technology & citizen participation in the age of AI (report) → why-civic-tech-fails + library [Tier 1]
- [x] https://www.sitra.fi/en/blogs/three-changes-needed-to-strengthen-digital-citizen-participation/ — Sitra (Antti Lehtinen): three changes to strengthen digital citizen participation → why-civic-tech-fails + library [Tier 1]
- [x] https://www.cambridge.org/core/journals/american-political-science-review/article/how-deliberation-happens-enabling-deliberative-reason/6558F69855ADA8B15BF2EC2E5D403E71 — APSR (Niemeyer/Veri/Dryzek/Bächtiger): How Deliberation Happens — enabling deliberative reason → epistemic-democracy + civic-love + library [Tier 1]
- [x] https://www.cambridge.org/core/journals/european-political-science/article/democratic-innovations-in-the-uk-reflections-on-historical-trajectories-across-space-and-time/BC977AEAD3BDD9C2D46E601B1555853F — Cambridge/EPS (Elstub & Escobar): democratic innovations in the UK → institutionalising-deliberation + library [Tier 1]
- [ ] https://efi.ed.ac.uk/reviving-the-commons-a-scoping-review-of-urban-and-digital-commoning/ — Edinburgh Futures (Henderson & Escobar): scoping review of urban + digital commoning [Tier 2]
- [ ] https://thinklikeacommoner.com/second-edition/read-it/ — David Bollier (book, 2nd ed): "Think Like a Commoner" — a short introduction to the commons [Tier 2]
- [x] https://knightcolumbia.org/content/ai-as-social-technology — Knight First Amendment Institute (Farrell & Shalizi): AI as Social Technology → concepts/civic-ai + does-ai-weaken-institutions + library [Tier 1, civic-AI]
- [ ] https://open.substack.com/pub/audreyt/p/software-freedom-as-civic-care — Audrey Tang (essay): "Software Freedom as Civic Care" [Tier 2, plurality]
- [ ] https://connectedplaces.online/the-purpose-of-protocols/ — Connected Places (essay): The Purpose of Protocols [Tier 2, protocol]
- [ ] https://open.substack.com/pub/protocolized/p/introducing-the-protocol-institute — Protocolized: Introducing the Protocol Institute (org/essay) [Tier 2, protocol]
- [ ] https://www.jrf.org.uk/neighbourhoods-and-communities/why-social-infrastructure-matters-for-economic-security — JRF (report): why social infrastructure matters for economic security [Tier 2, neighbourhood]
- [ ] https://risk.darkmatterlabs.org/ — Dark Matter Labs: RiskSense — citizen-led infrastructure for systemic risk governance [Tier 2, DML]
- [ ] https://indyjohar.substack.com/p/beyond-dunbar-civilization-was-right — Indy Johar (essay): "Beyond Dunbar" — civilisation beyond the village [Tier 2, DML]
- [ ] https://open.substack.com/pub/cosmosinstitute/p/when-decentralization-fails — Cosmos Institute (essay): When Decentralization Fails [Tier 2]
- [x] https://ssir.org/articles/entry/artificial-intelligence-solidarity-ecosystem — SSIR (Scholz & Esposito): Building a Solidarity Ecosystem for AI → concepts/democratising-ai (solidarity stack) + ecosystem (Platform Cooperativism Consortium) + library [Tier 1, civic-AI]
- [x] https://oneproject.org/how-to-make-ai-serve-the-public/ — One Project (Rosenstein): How to Make AI Serve the Public → concepts/democratising-ai (GAIA) + public-ai + ecosystem (One Project) + library [Tier 1, civic-AI]
- [x] https://rebootdemocracy.ai/blog/zero-click-government-response — RebootDemocracy (Noveck): Zero-Click Government — Omakase or Loss of Agency? → concepts/does-ai-weaken-institutions + ecosystem (The GovLab) + library [Tier 1, civic-AI]
- [x] https://freesystems.substack.com/p/an-army-of-citizens-building-evals — Free Systems (Andy Hall): An army of citizens building evals → concepts/tech-place-is-education + library [Tier 1, civic-AI]
- [x] https://www.radicalxchange.org/updates/blog/the-plural-stack/ — RadicalxChange (essay): The Plural Stack — Europe needs protocols nobody can capture → interoperability-and-standards + library [Tier 1/2, plurality]
- [x] https://healthydemocracy.org/home/projects/losangeles/ — Healthy Democracy: 2026 Los Angeles City Charter Assembly → run-reports/la-city-charter-assembly [Tier 1]
- [x] https://open.substack.com/pub/hughpope/p/of-civic-love-and-the-beauty-of-the — Hugh Pope (essay): Of Civic Love and the Beauty of the Lot (sortition) → civic-love + library [Tier 1]
- [x] https://www.futures4europe.eu/post/the-use-of-digital-tools-and-ai-to-promote-citizenparticipation-in-eu-policymaking-8evld — Futures4Europe (EP STOA): use of digital tools & AI to promote citizen participation in EU policymaking → why-civic-tech-fails + library [Tier 1]
- [x] https://garden3d.substack.com/p/how-we-shaped-12-civic-tech-recommendations — garden3d: How We Shaped 12 Civic Tech Recommendations for Mamdani (100 New Yorkers on Polis) → ecosystem (garden3d) + library [Tier 1]
- [ ] https://nathanschneider.info/2026/02/constitutional-agents-for-online-governance/ — Nathan Schneider (essay): Constitutional Agents for Online Governance [Tier 2, protocol]
- [ ] https://www.weareopus.org/blog/why-we-cant-tackle-sheffields-most-urgent-problems-without-talking-about-neighbourhoods — Opus (essay): why neighbourhoods are central to Sheffield's challenges [Tier 2, neighbourhood]
- [~] https://demnext.substack.com/p/politics-without-politicians-a-conversation — DemocracyNext (Chwalisz × Landemore): Politics Without Politicians → SKIPPED: theme already covered by Landemore cluster (library + civic-love + open-democracy)
- [~] https://www.euractiv.com/opinion/fixing-digital-democracy-from-fragmented-tools-to-a-vibrant-european-civic-tech-hub/ — Euractiv (Sitra op-ed): fixing digital democracy → SKIPPED: overlaps the now-processed Sitra report/blog + mySociety entries
- [ ] https://www.noemamag.com/the-architecture-of-cooperation — Noema: How Reverse Game Theory Could Solve the Housing Shortage [Tier 3 — lower priority]
- [ ] https://www.colorado.edu/lab/medlab/2026/06/10/auzolan-basque-way-collective-work — MEDLab / CU Boulder (essay): Auzolan — the Basque tradition of collective work behind the Mondragón cooperatives, and integrating it into modern governance [Tier 2, commons]
- [x] https://www.oecd.org/en/publications/public-governance-review-of-ukraine_7810f059-en/full-report/citizen-participation-for-a-more-resilient-democracy-and-more-effective-policies-in-ukraine_62a234f8.html — OECD (report): citizen participation for a more resilient democracy in Ukraine — participatory budgeting + the 2024 Law on Public Consultations sustained under martial law → concepts/institutionalising-deliberation (enriched: institutionalising under fire) + run-reports/ukraine-wartime-assemblies (short pointer to 2024 Law + OECD's national-assembly recommendation) + library [Tier 1] (2026-07-20)
- [x] https://publications.jrc.ec.europa.eu/repository/handle/JRC145311 — EU Joint Research Centre (foresight report): Futures of EU democracy — four scenarios (AI-Facilitated Direct Democracy → Big Tech Power Grab) on AI, citizen engagement and democratic quality → concepts/four-futures-for-ai-and-democracy (NEW) + library [Tier 1, civic-AI] (2026-07-20)
- [ ] https://www.oecd.org/en/publications/area-based-initiatives-to-transform-neighbourhoods_d85ef103-en.html — OECD LEED (report): Area-based initiatives to transform neighbourhoods — mapping of 40+ initiatives linking economic, social and physical development [Tier 2, neighbourhood]
- [ ] https://c4.ac.uk/extending-social-infrastructure-for-connected-communities-next-steps-for-research/ — C4 / Centre for Collaboration in Community Connectedness (report): Extending Social Infrastructure for Connected Communities — a research agenda for defining, mapping, valuing and sustaining social infrastructure [Tier 2, neighbourhood]
- [x] https://dl.acm.org/doi/10.1145/3805689.3812416 — ACM FAccT 2026 (paper): Connective Democratic Tissue — "second-order technologies" for civic ecosystems, drawing on Metagov's interoperability cohorts → concepts/interoperability-and-standards (enriched) + library [Tier 1, civic-AI] (2026-07-20). NB: paper names Harmonica as a Metagov grantee.
- [x] https://rebootdemocracy.ai/book — Beth Simone Noveck (book, Yale University Press): Reboot — AI and the Race to Save Democracy → library + concepts/does-ai-weaken-institutions (enriched with the constructive book-length case) [Tier 1, civic-AI] (2026-07-20)
- [ ] https://falseparameters.xyz/ — False Parameters (studio / Michelle Zucker & Joanna Petkiewicz, ex-EIT Climate-KIC): systems-change commissions incl. Trees as Infrastructure + Smart Covenants (both w/ Dark Matter Labs) and the "In the Name of Public Good" interview series deconstructing the "sacred cow" concepts behind how change happens; Zucker co-leads DML's Beyond the Rules Lab / Many-to-Many System [Tier 2, DML]
- [ ] https://cobot.murmurations.network/ — Murmurations (tool): CoBot — searchable directory of 20,000+ co-ops, commons and community organisations across 130+ countries [Tier 2, toolkit]
- [ ] https://www.ideasforchange.org/ — Ideas for Change (tool/platform): residents share and vote on local ideas → community dialogues → proposals to city leaders [Tier 2, toolkit]
- [x] https://medium.com/jigsaw/one-year-on-the-momentum-behind-jigsaws-sensemaking-ai-b340e89ed516 — Jigsaw (Google): One Year On — Jigsaw's Sensemaking AI, now open-sourced, after runs in Kentucky, Oklahoma and Chattanooga → concepts/ai-sensemaking (open-source library + Oklahoma/We-the-People), run-reports/bowling-green (BG2050 outcome update), ecosystem (Jigsaw update + Napolitan Institute), library [Tier 1, civic-AI]
- [x] https://arxiv.org/abs/2605.24413 — Habermolt (Low, Duys, Formanek, Bakker, Hammond; arXiv 2026, cs.CY): "Delegating Deliberation to AI Representatives" — coins "AI-delegated deliberation" (AI agents deliberate on a user's behalf, not just mediate between humans), studied via a public platform along representation / aggregation / revision; Bakker co-authored the Habermas Machine → concepts/ai-delegated-deliberation (NEW) + library [Tier 1, civic-AI] (2026-07-20)
- [x] https://gemot.dev/ — Gemot (Justin Stimatze, Apache-2.0): open-source MCP server for multi-agent deliberation — agents submit positions + vote, it surfaces the cruxes that divide them (qualified −2 to +2, not summaries) with anti-sycophancy checks; builds synthetic agents from real published positions (e.g. 38 AI-policy manifestos → 27 agents) → toolkit/decide-together, concepts/synthetic-participation (agents-from-real-positions nuance), library [Tier 2, civic-AI / toolkit]
- [x] https://civic.ai/ — Civic AI (framework, Audrey Tang & Caroline Green / Oxford Institute for Ethics in AI): the "6-Pack of Care" (attentiveness, responsibility, competence, responsiveness, solidarity, symbiosis) for bounded local AI agents a community can own, inspect, correct and switch off; grounded in Taiwan's Alignment Assemblies → concepts/six-pack-of-care (NEW page), ecosystem (Oxford Institute for Ethics in AI), library [Tier 1, civic-AI]
- [x] https://arxiv.org/abs/2606.24635 — arXiv (paper, Lisa Schirch & Beth Goldberg): Visualizing "We the People" — distribution-focused "opinion landscapes" vs binary us-vs-them graphics to reduce polarisation; case study of the Jigsaw × Napolitan Institute deliberation (2,400+ Americans across all 435 congressional districts) → concepts/how-we-picture-disagreement (NEW) + run-reports/we-the-people (NEW) + library [Tier 1, civic-AI] (2026-07-20)
- [ ] https://maggieappleton.com/gathering-structures — Maggie Appleton (essay): Gathering Structures — practical low-stress formats for hosting community events (Seven Minute Demos, rotating ad-hoc hosts, fishbowls, unconferences) plus the case for selective invitations and starting small [Tier 2, toolkit/neighbourhood]
- [ ] https://bluedemocracy.pl/democratic-fitness-indicator/ — Center for Blue Democracy (method/tool): Democratic Fitness Indicator — scores a country's democracy 0–100% across seven categories (elections, holding politicians accountable, parliamentary legislative initiative, citizen-initiated referenda, citizens' assemblies, safeguards, ability to change the constitution); even Norway and the USA score weak [Tier 2, toolkit]
- [x] https://convoca.org/ — Convoca (tool/org, team ex-MIT Media Lab): source-traceable RAG sensemaking that turns large volumes of community input (sticky notes to recorded dialogue) into recurring themes tied back to what residents said; Mozilla Democracy × AI cohort; co-designed with NYC planners + North Carolina organizers → toolkit/decide-together, concepts/ai-sensemaking (close-the-loop), ecosystem, library [Tier 2, civic-AI / toolkit]
- [ ] https://ct-citizens-assembly.org/ — Connecticut Citizens' Assembly on Property Taxes (deliberation): 100-member assembly mirroring the state's geographic + demographic mix, sessions July–September 2026, recommendations to the state legislature on local public-service funding [Tier 1, run-report — process after it concludes]
- [ ] https://www.bbc.com/future/article/20260618-the-weird-and-wonderful-libraries-of-finland — BBC Future (article, Erika Benke): Finland's libraries as social infrastructure — Helsinki's Oodi lends sewing machines + 3D printers, over half of Finns visit monthly, framed as trusted neutral spaces that help hold a society together [Tier 2, neighbourhood]
- [ ] https://journals.sagepub.com/doi/10.1177/26339137261459441 — Collective Intelligence (Sage; Beth Goldberg, Audrey Tang, Hélène Landemore, Divya Siddarth, Renée DiResta + 22 others): 27-author review sorting AI for digital public squares into four families — collective dialogue systems, bridging systems, community-driven moderation, proof-of-humanity [Tier 1, civic-AI]
- [ ] https://www.beta.nyc/2026/07/08/we-turned-two-decades-of-council-budget-pdfs-into-open-data-now-the-city-should-maintain-the-data/ — BetaNYC (Noel Hidalgo): nineteen years of NYC Council budget PDFs (Schedule C, Terms & Conditions, §254 capital, Transparency Resolutions, FY2009–FY2027) parsed into reconciled open data, plus the ask that the Council publish machine-readable budgets within 24h of a vote; repo https://github.com/BetaNYC/New-York-City-Budget [Tier 1]
- [ ] https://www.beta.nyc/featured-tools/ai-tools-for-nyc-democracy/ — BetaNYC (tools): open MCP connectors over NYC 311, Council legislation (Legistar), procurement and the City Record, for plain-language queries grounded in the underlying records [Tier 2, toolkit]
- [ ] https://www.aipotluck.org/ — AI Potluck / Current AI: 12-month sprint from July 2026 to assemble a public-interest AI product entirely from open-source components; Gap Map v0.1 assessed 24,626 projects (https://www.aipotluck.org/map, data https://github.com/currentai-org/os-ai-map) and Alpha Chat was built in 8 weeks on Apertus (ETH/EPFL-governed); host Current AI has 10 government partners and $400M+ committed [Tier 1, civic-AI]
- [ ] https://flourishingneighborhoods.substack.com/p/what-happens-when-a-city-governs — Flourishing Neighborhoods (Seth Kaplan): Atlanta's place-based public management — investment concentrated in six distressed neighbourhoods across four arenas, with a cross-agency task force run from the mayor's office [Tier 2, neighbourhood]
- [ ] https://stateofopensource.ai/ — The State of Open Source AI V1.0 (report, July 2026; opening letter from CTO Raffi Krikorian): open models lead developer adoption 79% vs 71% closed (Mozilla/SlashData 2026 survey) but only 51% of open-model teams reach production against 63% closed; frames open weights as a sovereignty choice with 70+ national AI strategies live [Tier 2, civic-AI]
- [ ] https://www.noemamag.com/what-humanity-needs-to-flourish-in-the-next-decade/ — Noema (E. Glen Weyl, James Evans, Chris White, with a 23-member Sociotechnical Grand Challenges Coalition): "reverse alignment" — redesigning institutions, skills and governance so societies can absorb AI; names three failure modes of institutional neglect (productivity without prosperity, execution without verification, capacity without constraint) [Tier 1, civic-AI]

### Shared directly (not via digest)

Sources handed in directly (never posted to the @citizen_infra group). Same routing as the rest.

- [x] https://www.coe.int/en/web/kyiv/-/a-historic-milestone-for-deliberative-democracy-ukraine-s-first-ever-citizens-assembly-successfully-launched — Council of Europe: Ukraine's first citizens' assemblies (Zvyahel + Slavutych, wartime) → run-reports/ukraine-wartime-assemblies [Tier 1]
- [x] https://futurepolis.substack.com/p/the-lexington-experiment-part-i — Futurepolis (Gideon Lichfield): The Lexington Experiment, I & II — CivicLex's first Lexington KY civic assembly → run-reports/lexington-civic-assembly [Tier 1]
- [x] https://www.buergerrat.de/en/background/good-examples-of-citizens-assemblies/ — Mehr Demokratie: curated "good examples" of citizens' assemblies + their political impact → library + ecosystem (Mehr Demokratie) [Tier 1] (now redirects to mehr-demokratie.de)
- [x] https://democracyrd.org/annual-report-2/ — Democracy R&D: annual "Year in Deliberation" report (global network of deliberative-democracy orgs; trends + 16 case studies) → ecosystem (Democracy R&D) + library [Tier 1] (via Firecrawl)
- [x] https://report.whatcouldbgbe.com/ — "What Could BG Be?": Bowling Green / Warren County KY 2050 vision; Innovation Engine + Google Jigsaw + Computational Democracy Project, ideas gathered via Polis (Feb–Mar 2025), categorised by Sensemaker/Gemini → run-reports/bowling-green-what-could-bg-be (primary source) [Tier 1]
- [x] https://medium.com/jigsaw/how-one-of-the-fastest-growing-cities-in-kentucky-used-ai-to-plan-for-the-next-25-years-3b70c4fd1412 — Jigsaw (Google): the Bowling Green case told by Jigsaw → run-reports/bowling-green-what-could-bg-be (secondary source) [Tier 1]
- [x] https://medium.com/jigsaw/making-sense-of-large-scale-online-conversations-b153340bda55 — Jigsaw (Google): Sensemaker → concepts/civic-listening ("machine-led variant" section) + library; ecosystem (Jigsaw) line updated [Tier 1, civic-AI]
- [x] https://www.peoplepowered.org/digital-guide-home — People Powered: "Guide to Digital Participation Platforms" → already in library (Civic AI) + ecosystem (People Powered); no new page needed [Tier 1]
- [x] https://www.linkedin.com/posts/adnanjaber_report-on-mapping-llm-tools-for-public-discouse-ugcPost-7390116189798162432-H1L3 — Adnan Jaber: report mapping LLM tools for public discourse (map: https://airtable.com/appdDLNeIEBFUZiQG/shrgEVfEwv7OoiTcJ/tblvpYsR8oOFvepkO) → library/reading-and-sources (Civic AI) [Tier 1, civic-AI]
- [x] https://www.linkedin.com/pulse/sortition-goes-back-further-brussels-than-many-people-hugh-pope-73rmf — Hugh Pope (essay): "Sortition goes back further in Brussels than many people think" → concepts/sortition ("Not only ancient" section) + library [Tier 1]
- [x] https://www.cambridge.org/core/journals/data-and-policy/article/ai-and-citizen-participation-a-political-economy-lens/2A4CC7AAA4F24F5C10CFC9D606EE5E5B — Davies & Devine (*Data & Policy* 8, 2026, e33; CC BY): "AI and citizen participation: a political economy lens" — who builds, funds, and adopts civic-AI tools shapes which ever reach citizens; structural forces favour incumbents (seven builder archetypes / three funding models / four adopters) → concepts/who-builds-civic-ai (NEW page) + library [Tier 1, civic-AI] (2026-07-20)

### From the Telegram digest

- [ ] https://martijndewaal.nl/a/3mrx3d67o5h23-root-systems-towards-a-decentralized-internet-at-dweb-camp — Martijn de Waal, "Root Systems: towards a decentralized internet at DWeb Camp": a report from the Sustaining Infrastructure track on concentration drift, public product organisations, and democratic skill.
- [ ] https://humanistreview.ai/issue-1/tang-ai-democracy-optimization/ — Audrey Tang, "AI and democracy: the right to resist optimization": an essay on institutions rewarding machine-legible behaviour and bounded, interruptible AI as a temporary prosthesis.
- [ ] https://www.researchgate.net/publication/410918872_A_Case_Study_on_AI-Assisted_Scalable_Deliberation — Mark Klein, "A Case Study on AI-Assisted Scalable Deliberation": an AIdeator case study describing a deliberation harness tested with utility-company employees.
- [ ] https://delibdemjournal.org/article/id/1625 — John Rountree and John Gastil, "The Case for Using Generative AI to Run Deliberation Simulations": an argument that AI simulations should support rather than replace human judgment, illustrated by a GPT-4o K-12 mental-health example.
- [ ] https://dl.acm.org/doi/10.1145/3788077 — Hughes et al. (MIT + NYC Dept of City Planning), "Voice to Vision": a CSCW paper on a sociotechnical system linking community input to planning outputs, with a five-month design process and a 24-person field evaluation.
- [ ] https://toda.org/publications/policy-briefs-and-reports/framing-questions-for-dialogue-and-deliberation/ — Catherine Barnes (Toda Peace Institute, Report 312): how to design guiding questions across the dialogue, deliberation, and collaborative decision-making phases.
- [ ] https://identitywoman.net/how-open-protocols-are-a-key-part-of-regenerative-technology/ — Kaliya Young: an argument that regenerative-tech intentions only survive on an open-protocol substrate, responding to the Regenerative Tech Project's three-layer framework.
- [ ] https://beautifultrouble.org/toolbox/bsol — Beautiful Solutions (co-edited by Nathan Schneider), now a free online toolbox of solidarity-economy stories and principles hosted by Beautiful Trouble.
- [ ] https://www.youtube.com/watch?v=F1HPjE6YKGo — Democracy Innovators Podcast (Carlo Michaelis): Ryan Koch of the Civic Tech Chat podcast on civic innovation and effective use of AI.
- [ ] https://www.youtube.com/watch?v=jpUzEpXYDkc — Democracy Innovators Podcast: Simon Horton on negotiation, conflict resolution, and how AI can help end war.
- [ ] https://www.youtube.com/watch?v=4A9zymQfiMo — Democracy Innovators Podcast: Gianluca Misuraca (Inspiring Futures) on AI in the public sector.
- [ ] https://www.youtube.com/watch?v=EOruN8vaVao — Democracy Innovators Podcast: Anthony Zacharzewski (Democratic Society) on democratic infrastructure, participation and power.
- [ ] https://www.youtube.com/watch?v=awAFuA7saXg — Democracy Innovators Podcast: Alvaro Oleart on the instrumentalisation of EU participation processes and the limits of AI for democracy.
- [ ] https://www.youtube.com/watch?v=gfdMqfOcNZw — Democracy Innovators Podcast: Alberto Fernandez Gibaja (International IDEA) on technology and democracy.
- [ ] https://networknations.substack.com/p/network-nations-a-primer — Felix Beer, Primavera De Filippi and Lovisa Björna: translocal self-governance defined against the Network State, through functional sovereignty, commons governance and entanglement.
- [ ] https://fermonge.substack.com/p/we-need-semantic-alignment-on-ai — Simone Maria Parazzoli and Fernando Monge: three dimensions separating "citizen agents" (ownership, autonomy, specialization), with the World Bank-led RADAR benchmark across 166 countries.
- [ ] https://creativebureaucracy.org/creative-bureaucracy-festival-award-2026-audrey-tang-trust-and-democracy — Audrey Tang's Creative Bureaucracy Festival Award transcript: the 111-line text to 200,000 numbers, a 447-person mini-public, and the scam-ad law that followed.
- [ ] https://schemalabs.gr/ — Schema Labs: Greek nonprofit on the citizen/local-government gap, structured as a nonprofit wholly owning a for-profit subsidiary under steward ownership.
- [ ] https://opencouncil.gr/ — OpenCouncil (Schema Labs): transcribes and analyses city council meetings into summaries, short-form video, and per-neighbourhood WhatsApp updates.
- [ ] https://www.youtube.com/watch?v=yiBaevPeuCY — Democracy Innovators Podcast: Olivier Schulbaum (Platoniq) on starting assemblies with those most affected, and GRID, an AI agent carrying a legislative-theatre "joker".
- [ ] https://menders.kinship.works/ — Kinship Works, "Meet the menders": maps 15 civic-renewal disciplines and proposes a network of locally rooted Civic Colleges.
- [ ] https://all-in.now/article/reporting-back-from-the-european-movement-strategy-conference/ — All In: European Movement Strategy Conference report covering movement proposals on digital infrastructure, worker power over technology, and resistance to data centres.
- [ ] https://www.youtube.com/watch?v=E9v_mHQ_yaQ — Democracy Innovators Podcast: Thomas Lorenz on Brief nach Berlin, which uses handwritten letters as a lower-barrier connection between citizens and politicians.
- [ ] https://www.youtube.com/watch?v=eDdUyT8DUYM — Democracy Innovators Podcast: Malik Lakoubay (Dark Matter Labs) on financing civic infrastructure and democratic innovation.
- [ ] https://www.newdemocracy.com.au/2026/09/14/democracy-beyond-elections-a-handbook-on-citizens-assemblies/ — newDemocracy, UNDP, UNDEF, and Democracy R&D: practical handbook on designing and running Citizens' Assemblies.
- [ ] https://www.newlocal.org.uk/publications/putting-the-neighbourhood-back-into-neighbourhood-health/ — Cormac Russell and Lisa McNally: neighbourhood-health provocation with four role-specific guides for community-led health.
- [ ] https://medium.com/jigsaw/helping-civic-leaders-hear-every-voice-5704646900d6 — Jigsaw: Sensemaking AI Partner Program scaling to 30 cities, states, and countries, starting with eight municipalities and five US states while keeping the core code open source.
- [ ] https://www.youtube.com/watch?v=KskMVkG6VJ0 — Democracy Innovators Podcast: Terry Bouricius explains multi-body sortition for democratic lawmaking; potential enrichment for the existing concept page beyond its book source.
- [ ] https://www.noemamag.com/let-the-people-decide-the-pace-of-frontier-ai/ — Hélène Landemore and Audrey Tang, "Let The People Set The Pace Of Frontier AI" (Noema, 23 Sep 2026): a proposal for a standing Global Citizens' Assembly on AI of 1,000 people chosen by lot, with a duty on labs and governments to answer its recommendations in public.
- [ ] https://thedrcenter.org/research/alternatives-to-concentrated-ai — Decentralization Research Center, "Alternatives to Concentrated AI: A Layer-by-Layer Map of What Is Being Built" (Samuel Vance-Law and Kyle Bligen, Oct 2026): a 45-page report from 36 interviews, with case studies by OpenMined, the Ethereum Foundation and Civic AI.
- [ ] https://rebootdemocracy.ai/blog/boston-agentic-middleware — Reboot Democracy, interview with Boston CIO Santiago Garces: the city's Open Context MCP server on its open data portal, as a governed layer between AI agents and public systems.
- [ ] https://ontola.io/blog/publishing-dutch-governmental-meetings-as-linked-data/ — Ontola, "Publishing Dutch governmental meetings as linked data": how council meeting data was standardised with the Open State Foundation and VNG; the live search engine (openbesluitvorming.nl, repo github.com/ontola/openbesluitvorming) holds 5.5 million documents from 308 municipalities, 8 provinces and 13 water boards.
- [ ] https://bonfirenetworks.org/posts/making-community-governance-legible-a-semester-with-bonfire/ — Sohyeon Hwang and Andrés Monroy-Hernández, "Making Community Governance Legible: A Semester with Bonfire": Governance Cards, a structured way for a community to document how it governs itself, prototyped with Bonfire from about 200 fediverse rule sets.
- [ ] https://dl.acm.org/doi/10.1145/3772318.3790855 — Hwang et al., "Governing Together: Toward Infrastructure for Community-Run Social Media" (CHI 2026, seven authors): inter-community governance, from workshops with 24 people, with modularity, forkability and polycentricity as design principles.
- [ ] https://protocol-institute.org/events/protocol-symposium-2026/ — Protocol Institute, Protocol Symposium 2026 (21–25 Sep, recordings with transcripts): Kaliya Young, "Group Brains: Minds Made of People" (a study of the IETF); Kaliya Young and Kevin Triplett, "The Nature of Trust"; Nathan Schneider, "Virtues for a Protocol Society".

## Processed

- [x] #87 — https://medium.com/fito-network/what-does-a-network-know-16aedc3645ed — Brendon Johnson, *What Does a Network Know?* · 2026-10-21 · added Learning across a network (four attributed practices and a tentative learning loop), sidebar/overview, Network Weaving Game toolkit entry, Fito ecosystem and Library references. Linked research/resources, pilot outcomes, comments and evaluation gaps remain on #87.
- [x] #84 — https://dialogue.publicai.ch/ — Swiss National AI Dialogue · 2026-10-21 · added the public-input example and privacy/authority limits on Public AI, a participation-channel toolkit entry, Swiss AI Initiative backlink and Library reference. Public report, documented influence, fuller method/FAQ reading and partner follow-ups remain on #84.
- [x] #82 — https://www.connective-cities.net/en/media-center/ai-based-visualisation-for-sustainable-affordable-housing/ — Connective Cities, *AI-based Visualisation for Sustainable & Affordable Housing* · 2026-10-21 · fuller organiser account supports a bounded workshop example on AI for participation (Huye, Berlin, Nairobi, Hebron), plus Connective Cities ecosystem and Library entries. Not a resident-deliberation run report or evidence of implemented housing; product access and deeper methods/outcomes remain on #82.
- [x] #80 — https://www.ncdd.org/ — National Coalition for Dialogue & Deliberation · 2026-10-21 · added network ecosystem entry, Resource Center and Engagement Streams toolkit links, the four-purpose method-selection distinction on Participatory policymaking and three Library resources. Deeper methods, guides and programme verification remain on #80.
- [x] #78 — https://www.betterpolitics.foundation/democratic-innovation-organizations — Better Politics Foundation, *Pioneering Practitioners* · 2026-10-21 · cross-referenced all 36 directory entries; added 12 primary-verified ecosystem entries, Your Priorities / All Our Ideas / Policy Synth toolkit entries and the directory Library reference. Stale links, remaining verification gaps and deeper resource/case follow-ups remain on #78.
- [x] #16 — Manchester follow-up · 2026-10-20 · council's [16 February 2026 bulletin](https://content.govdelivery.com/accounts/UKMANCHESTER/bulletins/40a102b) confirms January panel sessions; updated report/overview to 2022–2026 and linked existing method/ecosystem coverage. Terms of Reference and documented service effects remain on #16.
- [x] #20 — Los Angeles follow-up · 2026-10-20 · official Council records and November voter pamphlet distinguish assembly recommendations from the measures actually placed on the ballot; current status added. Demographics, detailed dispositions and future election results remain on #20.
- [x] #21 — Ukraine/Lexington follow-up · 2026-10-20 · primary organiser accounts add Slavutych implementation preparations and 2026 Rivne/Obolon/Lviv activity; Lexington's June referral, November ballot proposals and current process figures added, including correction of unanimity. PDF demographics/recommendations, count conflicts, detailed implementation and future results remain on #21.
- [x] #25 — Bowling Green follow-up · 2026-10-20 · county-hosted [30 April 2026 strategic plan](https://www.warrencountyky.gov/wp-content/uploads/2026/04/BG2050-Strategic-Plan-4.30.26.pdf) verifies nine priorities and proposed delivery cycles; removed city/county population conflation and unresolved subtopic count, added plan source and Sensemaker toolkit entry. Detailed delivery/outcomes remain on #25.
- [x] #74 — Evan Hadfield, [Voice without a pipeline is legitimacy theater](https://informationaldemocracy.substack.com/p/provocation-hadfield), Informational Democracy · 2026-10-18 · inspectable synthesis, governance principles, evaluation and revision on Binding or advisory; related direction on Constitutional agents; library. Planned essays and verification of early programmes/tools remain on #74.
- [x] #72 — Georg Diez and Felix Beer, [Democracy as a Social Technology](https://informationaldemocracy.substack.com/p/democracy-as-a-social-technology) and [The Infrastructural Transformation of the Public](https://informationaldemocracy.substack.com/p/infrastructural-transformation-public), Informational Democracy · 2026-10-18 · civic-AI institutional-design argument with its limits; public-AI architecture/governance/ownership distinction and attributed supplier-exit comment; library. Corporate/legal cases, cited works and the representation discussion remain on #72.
- [x] #70 — Beth Simone Noveck, [Democracy's Compression Problem](https://informationaldemocracy.substack.com/p/democracys-compression-problem) and [provocation](https://informationaldemocracy.substack.com/p/provocation-noveck), Informational Democracy · 2026-10-18 · five listening-system tests and public infrastructure argument on AI sensemaking; authorised receiver on Binding or advisory; library. Case/course verification, cited works and future essays remain on #70.
- [x] #68 — Petter Törnberg, [Do We Need a Distributive Politics of Attention?](https://informationaldemocracy.substack.com/p/distributive-politics-of-attention), [After Social Media](https://informationaldemocracy.substack.com/p/after-social-media) and [provocation](https://informationaldemocracy.substack.com/p/provocation-tornberg), Informational Democracy · 2026-10-18 · new Attention & democratic power concept, bridging cross-link and library; empirical sources, named comment and unpublished third essay remain on #68.
- [x] #66 — Audrey Tang, [Dismantling MaxOS for Democracy](https://informationaldemocracy.substack.com/p/dismantling-maxos-for-democracy), [Humane Radicalism](https://informationaldemocracy.substack.com/p/humane-radicalism) and [provocation](https://informationaldemocracy.substack.com/p/provocation-tang), Informational Democracy · 2026-10-18 · added MaxOS and community mandate-setting to civic AI; invitation, human sign-off, response chain and planned hand-back to the 6-Pack of Care; library. Essay III, secondary-case verification and other unwritten items remain on #66.
- [x] #64 — https://www.peoplepowered.org/news-content/wevis-supporting-participatory-democracy-in-thailand-through-locally-developed-digital-tools — People Powered, WeVis · 2026-10-18 · added a WeVis Story and public-decision toolkit page; linked DreamCon from the deliberation toolkit and argument mapping; added ecosystem/library entries. Marked the voting/pledge datasets' 2023 update dates; outcome, campaign and AI follow-ups remain on #64.
- [x] #62 — https://www.peoplepowered.org/news-content/digital-participation-case-study-bogota — People Powered, Chatico · 2026-10-18 · added a 2024 Bogotá development-plan consultation report using the dated official snapshot; added Chatico to the toolkit and the case to the library; linked virtual assistance from AI for participation. Other campaign metrics, assembly recruitment and policy-influence follow-ups remain on #62.
- [x] #60 — https://www.peoplepowered.org/news-content/digital-participation-case-study-ireland — People Powered, Voice Matters · 2026-10-18 · added the 2025 Derry/Londonderry run report, Co-operation Ireland ecosystem entry and library source; linked participant review and accessible formats from AI for participation and the Dembrane toolkit entry. Policy-response and evaluation follow-ups on #60.
- [x] #58 — https://www.oecd.org/en/publications/artificial-intelligence-and-the-future-of-citizen-participation_a1ee2e0a-en.html — OECD + Bertelsmann Stiftung, *Artificial Intelligence and the Future of Citizen Participation* · 2026-10-18 · added the nine-application typology, sample limits and practical safeguards to AI for participation; strengthened sourcing for synthetic participation; added the report to the library. Other cases, tools and deeper governance follow-ups remain on #58.
- [x] #54 — Andrew Sorota, provocation + “The Mirror and the Loop” (Informational Democracy) · 2026-09-30 · added recursive representation; updated productive uncertainty, synthetic participation, AI-delegated deliberation, ecosystem (Informational Democracy), and sources
- [x] #52 — "Mapping LLM Tools for Public Discourse, Pluralism & Social Cohesion" (Prosocial Design Network et al., 2025), full report, + Lisa Schirch's Deliberative Tech Hub deck · 2026-09-30 · updated AI deliberation (what the field is building, zKE), ecosystem (Council on Technology and Social Cohesion, Prosocial Design Network), library; 2026-10-18 follow-up added a zKE Kenya run report and seven verified toolkit entries; 2026-10-21 follow-up added the deliberative tech stack concept and seven use cases, checked against the original slides; remaining backlog on #52
- [x] #48 — Sylvie Delacroix, provocation + “In-Between Spaces” (Informational Democracy) · 2026-09-24 · added productive uncertainty; updated orphan reasons, ecosystem (Centre for Data Futures, Informational Democracy), and sources
- [x] #45 — Lisa Schirch, “Scaling Future Peacemaking through AI-Powered Public Deliberation” · 2026-09-23 · updated AI deliberation, scaling, disagreement, AI reflectors, deliberation tools, ecosystem, and sources
- [x] #42 — Théophile Pénigaud, “Orphan Reasons: Who Is Responsible When AI Decides?” · 2026-09-10 · added orphan reasons; updated democratising AI, democratic institutions, delegated deliberation, ecosystem, and sources
- [x] #12 — Relational Technology Project (Metagov seminar) · `HbH_cYgUCWA` · 2026-06-11
- [x] #11 — The Planetary Compendium (Berggruen x Dark Matter Labs) · `hhTyUhc8Rm8` · 2026-06-11
- [x] #10 — American Conversation Project / Cortico (civic listening) · `Zm3w5PkbVPo` · 2026-06-10
- [x] #9 — Children & young people's assemblies (DemocracyNext) · `G48qf6qvU20` · 2026-06-10
- [x] #8 — David Bollier on the commons (Team Human) · `5NrkkC8tQGQ` · 2026-06-10
- [x] #7 — Landemore, "Politics Without Politicians" (DemocracyNext) · `sgFUtZCgAqI` · 2026-06-10
- [x] #6 — Brandon Norgaard / OpenCivics · `Umpu1AmTuy8` · 2026-06-10
- [x] #5 — Stempeck, Civic Tech Field Guide & why projects succeed/fail · `jQ-PZUNkNfg` · 2026-06-10
- [x] #4 — Nathan Schneider, online governance · `jlyfhmUWX04` · 2026-06-10
- [x] #3 — Helene Landemore, deliberative democracy · `QizItYVPA1E` · 2026-06-10
- [x] #2 — Commoning Standard (Cecile Green & Seth Frey) · `0ekd-5YuHHE` · 2026-06-10
- [x] #1 — Metagov "Civic AI" (Matt Stempeck, CTFG) · `SonfdR0_h2w` · 2026-06-09
