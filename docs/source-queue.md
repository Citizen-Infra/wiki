# Source ingestion queue

Sources to process into the wiki, grouped by priority tier (see notes below).
Each is processed via the `/process-source` flow -> wiki pages + a per-source
`content-backlog` GitHub issue. Per-session log: `process-notes.md`; full
ingestion history in memory (`project_cibc_wiki.md`).

**How to use:** work top-down (Tier 1 first); skip any freely. When one is done,
move it to **Processed** with its date and issue number. 111 queued, ~91 remaining (Tang/plurality + Civic-AI clusters done).

## Queue


### Tier 1 — core fit (process first)

**Citizens' assemblies, sortition & deliberation** — IN PROGRESS (2026-06-18): waves A–C done (10 processed, 2 skipped); wave D + Latin America remain

- [~] https://www.youtube.com/watch?v=ttAFeJM-3x8 — Hélène Landemore (Yale): Politics without Politicians (63m) → SKIPPED: no captions available (theme already covered by sgFUtZCgAqI)
- [x] https://www.youtube.com/watch?v=XCBEuSp_heI — Michael McCarthy, The Master's Tools: An interview with Claudia Chwalisz (57m) → concepts/democratising-finance, library
- [~] https://www.youtube.com/watch?v=BYYvIckMVak — Citizens' Assemblies: A Democratic Response to Authoritarianism in Central & Eastern Europe (61m) → SKIPPED: no captions available (genuine gap — revisit if transcript appears)
- [ ] https://www.youtube.com/watch?v=2D4gHP5nsgk — Spaces for deliberation: Eight spatial qualities for designing deliberative assemblies (74m) — WAVE D
- [x] https://www.youtube.com/watch?v=POLwnybqUrY — Stories from behind the scenes of the UK’s first citizens’ assembly in a museum (86m) → run-reports/birmingham-museums-jury, ecosystem (Shared Future)
- [x] https://www.youtube.com/watch?v=_J4WxRRY2RQ — Scaling democratic innovations: Features of effective catalyst organisations and future frontiers (90m) → concepts/scaling-catalysts, run-reports/deschutes-youth-homelessness, ecosystem (Involve, Healthy Democracy, Central Oregon CAP)
- [x] https://www.youtube.com/watch?v=dBHUCdoTMKE — An interview with Josh Burgess, co-founder of Central Oregon Civic Action Project (19m) → folded into run-reports/deschutes-youth-homelessness
- [x] https://www.youtube.com/watch?v=dLq2vr3j-nM — Learning Call on The Norwegian Future Panel | KNOCA (84m) → run-reports/norway-future-panel
- [x] https://www.youtube.com/watch?v=SbIz83NRBVY — Learning Call on the Austrian Climate Assembly | KNOCA (85m) → run-reports/austrian-climate-assembly
- [ ] https://www.youtube.com/watch?v=ZN1XDn-tVbc — Book Launch: Innovating Democracy? The Means and Ends of Citizen Participation in Latin America (66m) — NOT YET PROCESSED
- [x] https://www.youtube.com/watch?v=tEhpNXYXxZo — Paper Discussion: Putting Back the Action into the Deliberative System Debate (59m) → concepts/institutionalising-deliberation
- [x] https://www.youtube.com/watch?v=cd0eJqV_XPk — The Role of Sortition in Organizations (64m) → concepts/sortition-in-organisations, ecosystem (INSA, Democracy Without Elections)
- [x] https://www.youtube.com/watch?v=3CTJXS9WA1E — Deliberative Polling: Changing the Tides of Democracy | Alice Siu | TEDxStanford (16m) → concepts/deliberative-polling, run-reports/america-in-one-room
- [x] https://www.youtube.com/watch?v=RtgvyXRttw4 — Nordic Deliberation Learning Call: Paths towards institutionalization in local governments (38m) → concepts/institutionalising-deliberation (municipal), ecosystem (Nordic Deliberation Network)
- [ ] https://www.youtube.com/watch?v=aofZqy8y8RA — Webinar | Deliberative Democracy for Breaking the Gridlock: Exploring insights from HDR 2023/24 (86m) — WAVE D
- [ ] https://www.youtube.com/watch?v=eAkcea8rO7E — The Citizen’s White Paper and the Civil Service: Participatory policy making in action (90m) — WAVE D
- [ ] https://www.youtube.com/watch?v=cmHHZ1_cyeY — Tiago Peixoto about the role of collective action in reforming democratic systems (66m) — WAVE D
- [ ] https://www.youtube.com/watch?v=7ZZ3xmEwkos — Deep Democracy   Light The Fire And Build Trust With Leen Schelfhout (57m) — WAVE D
- [x] https://www.youtube.com/watch?v=j7i72bJSBZE — How citizens can take back power (91m) → concepts/peoples-branch, institutionalising-deliberation, ecosystem (Iswe, Nesta), library (Wolf)

**Civic-tech platforms & participation practice**

- [ ] https://www.youtube.com/watch?v=HNpd5Fa-ze8 — Supporting Participation: Building an effective European civic tech hub (59m)
- [ ] https://www.youtube.com/watch?v=M3H-w4Osajk — TICTeC 25: Liset Hamming (SPOON, Netherlands) (25m)
- [ ] https://www.youtube.com/watch?v=kvJVCgBprwY — Beyond websites: How pro-democracy projects reach their audiences (47m)
- [ ] https://www.youtube.com/watch?v=Wm_nuJ2xEoE — TICTeC 25: Putting the humans back in - Manchester People’s Panel for AI (18m)
- [ ] https://www.youtube.com/watch?v=ucKz_EmO-c0 — Go Vocal webinar | Building a culture of engagement (55m)
- [ ] https://www.youtube.com/watch?v=_OVZJtw-xkA — Go Vocal Webinar | Rethinking public engagement – Designing a methods mix that works (45m)
- [ ] https://www.youtube.com/watch?v=jlOnf8wmhYc — Go Vocal Webinar | How Allen, TX engaged more residents and shaped a better Comprehensive Plan (46m)
- [ ] https://www.youtube.com/watch?v=R-JVbHzQa5I — Go Vocal Webinar | Growing impact and engagement culture through digital engagement (48m)
- [ ] https://www.youtube.com/watch?v=N3MOfLBnYBI — Go Vocal Webinar | Implementing proposals successfully: Insights from practitioners (62m)
- [ ] https://www.youtube.com/watch?v=YmBwy6OYIVo — How Copenhagen used bottom-up proposals to engage 12,000 residents in just 4 months – Episode 7 (42m)
- [ ] https://www.youtube.com/watch?v=GJrkdf-Aytc — Partnering with residents on budget priorities in St Louis, with Yusuf Daneshyar – Episode 8 (31m)
- [ ] https://www.youtube.com/watch?v=y9Jna4svs90 — #DecidimFest23. Decidim Stories: Use Cases Beyond Cities (EN) (88m)
- [ ] https://www.youtube.com/watch?v=-WS15nbBG0M — #DecidimFest23. Artificial Intelligence for Citizen Participation (EN) (77m)
- [ ] https://www.youtube.com/watch?v=YRQLybWlPJk — The Participation Playbook launch: An Interactive guide for participatory program planning! (58m)
- [ ] https://www.youtube.com/watch?v=TVNWBE4XwTw — How can collective intelligence empower our democracy? (51m)
- [ ] https://www.youtube.com/watch?v=1qLhm7iRyGY — Translating Community Voices into Actionable Insights with AI (53m)

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
- [ ] https://www.youtube.com/watch?v=8OS0knZwh28 — Participatory Grantmaking During Polycrisis (47m)
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

- [ ] https://carnegieuk.org/publication/blueprints-for-democratic-wellbeing/ — Carnegie UK (Oliver Escobar): four ways to embed citizens' mini-publics in parliaments [Tier 1]
- [ ] https://demos.co.uk/research/everyday-democracy-a-new-democratic-operating-model-to-rebuild-trust-between-state-and-citizen/ — Demos (Miriam Levin): "Everyday Democracy" — continuous participation to rebuild state–citizen trust [Tier 1]
- [ ] https://democracywithoutpoliticians.org/ — Terry Bouricius (book): the case for sortition / citizen juries over elections [Tier 1]
- [ ] https://mitpress.mit.edu/9780262049948/rewiring-democracy/ — Schneier & Sanders (MIT Press, book): "Rewiring Democracy" — AI across the democratic process [Tier 1, civic-AI]
- [ ] https://research.mysociety.org/html/supporting-participation/ — mySociety: 14 recommendations for a European civic-tech hub (grow demand / strengthen supply / fix procurement) [Tier 1]
- [ ] https://www.sitra.fi/en/publication/european-civic-technology-and-citizen-participation-in-the-age-of-ai/ — Sitra: European civic technology & citizen participation in the age of AI (report) [Tier 1]
- [ ] https://www.sitra.fi/en/blogs/three-changes-needed-to-strengthen-digital-citizen-participation/ — Sitra (Antti Lehtinen): three changes to strengthen digital citizen participation [Tier 1]
- [ ] https://www.cambridge.org/core/journals/american-political-science-review/article/how-deliberation-happens-enabling-deliberative-reason/6558F69855ADA8B15BF2EC2E5D403E71 — APSR paper: How Deliberation Happens — enabling deliberative reason [Tier 1]
- [ ] https://www.cambridge.org/core/journals/european-political-science/article/democratic-innovations-in-the-uk-reflections-on-historical-trajectories-across-space-and-time/BC977AEAD3BDD9C2D46E601B1555853F — Cambridge/EPS: democratic innovations in the UK — historical trajectories across space and time [Tier 1]
- [ ] https://efi.ed.ac.uk/reviving-the-commons-a-scoping-review-of-urban-and-digital-commoning/ — Edinburgh Futures (Henderson & Escobar): scoping review of urban + digital commoning [Tier 2]
- [ ] https://thinklikeacommoner.com/second-edition/read-it/ — David Bollier (book, 2nd ed): "Think Like a Commoner" — a short introduction to the commons [Tier 2]
- [ ] https://knightcolumbia.org/content/ai-as-social-technology — Knight First Amendment Institute (essay): AI as Social Technology [Tier 1, civic-AI]
- [ ] https://open.substack.com/pub/audreyt/p/software-freedom-as-civic-care — Audrey Tang (essay): "Software Freedom as Civic Care" [Tier 2, plurality]
- [ ] https://connectedplaces.online/the-purpose-of-protocols/ — Connected Places (essay): The Purpose of Protocols [Tier 2, protocol]
- [ ] https://open.substack.com/pub/protocolized/p/introducing-the-protocol-institute — Protocolized: Introducing the Protocol Institute (org/essay) [Tier 2, protocol]
- [ ] https://www.jrf.org.uk/neighbourhoods-and-communities/why-social-infrastructure-matters-for-economic-security — JRF (report): why social infrastructure matters for economic security [Tier 2, neighbourhood]
- [ ] https://risk.darkmatterlabs.org/ — Dark Matter Labs: RiskSense — citizen-led infrastructure for systemic risk governance [Tier 2, DML]
- [ ] https://indyjohar.substack.com/p/beyond-dunbar-civilization-was-right — Indy Johar (essay): "Beyond Dunbar" — civilisation beyond the village [Tier 2, DML]
- [ ] https://open.substack.com/pub/cosmosinstitute/p/when-decentralization-fails — Cosmos Institute (essay): When Decentralization Fails [Tier 2]
- [ ] https://ssir.org/articles/entry/artificial-intelligence-solidarity-ecosystem — SSIR (essay): Artificial Intelligence & the Solidarity Ecosystem [Tier 1, civic-AI]
- [ ] https://oneproject.org/how-to-make-ai-serve-the-public/ — One Project (essay): How to Make AI Serve the Public [Tier 1, civic-AI]
- [ ] https://rebootdemocracy.ai/blog/zero-click-government-response — RebootDemocracy (essay): Zero-Click Government — Omakase or Loss of Agency? [Tier 1, civic-AI]
- [ ] https://freesystems.substack.com/p/an-army-of-citizens-building-evals — Free Systems (essay): An army of citizens building evals [Tier 1, civic-AI]
- [ ] https://www.radicalxchange.org/updates/blog/the-plural-stack/ — RadicalxChange (essay): The Plural Stack — Europe needs protocols nobody can capture [Tier 1/2, plurality]
- [ ] https://healthydemocracy.org/home/projects/losangeles/ — Healthy Democracy: 2026 Los Angeles City Charter Assembly (dated deliberation → run-report) [Tier 1]
- [ ] https://open.substack.com/pub/hughpope/p/of-civic-love-and-the-beauty-of-the — Hugh Pope (essay): Of Civic Love and the Beauty of the Lot (sortition) [Tier 1]
- [ ] https://www.futures4europe.eu/post/the-use-of-digital-tools-and-ai-to-promote-citizenparticipation-in-eu-policymaking-8evld — Futures4Europe: use of digital tools & AI to promote citizen participation in EU policymaking [Tier 1]
- [ ] https://garden3d.substack.com/p/how-we-shaped-12-civic-tech-recommendations — garden3d: How We Shaped 12 Civic Tech Recommendations for Mamdani (100 New Yorkers on Polis) [Tier 1]
- [ ] https://nathanschneider.info/2026/02/constitutional-agents-for-online-governance/ — Nathan Schneider (essay): Constitutional Agents for Online Governance [Tier 2, protocol]
- [ ] https://www.weareopus.org/blog/why-we-cant-tackle-sheffields-most-urgent-problems-without-talking-about-neighbourhoods — Opus (essay): why neighbourhoods are central to Sheffield's challenges [Tier 2, neighbourhood]
- [ ] https://demnext.substack.com/p/politics-without-politicians-a-conversation — DemocracyNext (Chwalisz × Landemore): Politics Without Politicians [Tier 1 — theme already in wiki via Landemore; cite-or-skip]
- [ ] https://www.euractiv.com/opinion/fixing-digital-democracy-from-fragmented-tools-to-a-vibrant-european-civic-tech-hub/ — Euractiv (Sitra op-ed): fixing digital democracy → a European civic-tech hub [Tier 1 — overlaps mySociety + Sitra entries; lower priority]
- [ ] https://www.noemamag.com/the-architecture-of-cooperation — Noema: How Reverse Game Theory Could Solve the Housing Shortage [Tier 3 — lower priority]

## Processed

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
