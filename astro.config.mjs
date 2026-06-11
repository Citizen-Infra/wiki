// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://citizen-infra.netlify.app',
  integrations: [
    starlight({
      title: 'Citizen Infrastructure',
      description:
        'A free, public resource for citizens: what citizen infrastructure is, and a practical toolkit of things citizens can use to act together.',
      editLink: {
        baseUrl: 'https://github.com/Citizen-Infra/wiki/edit/main/',
      },
      lastUpdated: true,
      pagefind: true,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Citizen-Infra/wiki' },
      ],
      sidebar: [
        { label: 'Start here', items: [
          { slug: 'start/what-is-citizen-infrastructure' },
          { slug: 'start/how-to-use-this-resource' },
        ]},
        { label: 'The idea', items: [
          { slug: 'idea/technology-for-collective-action' },
          { slug: 'idea/digital-pitchforks' },
        ]},
        { label: 'Concepts', items: [
          { slug: 'concepts/overview' },
          { slug: 'concepts/civic-ai' },
          { slug: 'concepts/ai-for-participation' },
          { slug: 'concepts/synthetic-participation' },
          { slug: 'concepts/ai-and-deliberation' },
          { slug: 'concepts/commoning-standard' },
          { slug: 'concepts/power-matrix' },
          { slug: 'concepts/cargo-cult-democracy' },
          { slug: 'concepts/tech-place-is-education' },
          { slug: 'concepts/the-commons' },
          { slug: 'concepts/enclosure' },
          { slug: 'concepts/the-ontoshift' },
          { slug: 'concepts/relational-property' },
          { slug: 'concepts/parallel-polis' },
          { slug: 'concepts/open-democracy' },
          { slug: 'concepts/citizens-assembly' },
          { slug: 'concepts/epistemic-democracy' },
          { slug: 'concepts/sortition' },
          { slug: 'concepts/citizen-governance-of-assemblies' },
          { slug: 'concepts/civic-love' },
          { slug: 'concepts/binding-vs-advisory' },
          { slug: 'concepts/investor-assemblies' },
          { slug: 'concepts/children-and-youth-assemblies' },
          { slug: 'concepts/intergenerational-deliberation' },
          { slug: 'concepts/deliberation-and-enfranchisement' },
          { slug: 'concepts/implicit-feudalism' },
          { slug: 'concepts/modular-politics' },
          { slug: 'concepts/constitutional-agents' },
          { slug: 'concepts/protocol' },
          { slug: 'concepts/why-civic-tech-fails' },
          { slug: 'concepts/civic-products-and-features' },
          { slug: 'concepts/interoperability-and-standards' },
          { slug: 'concepts/organizer-kit' },
          { slug: 'concepts/decentralized-landscape' },
          { slug: 'concepts/civic-intelligence-infrastructure' },
          { slug: 'concepts/funding-the-commons' },
          { slug: 'concepts/metacrisis' },
        ]},
        { label: 'The toolkit', items: [
          { slug: 'toolkit/overview' },
          { slug: 'toolkit/connect-with-neighbors' },
          { slug: 'toolkit/coordinate-a-community' },
          { slug: 'toolkit/decide-together' },
          { slug: 'toolkit/share-culture-and-resources' },
          { slug: 'toolkit/fund-collective-work' },
        ]},
        { label: 'Run Reports', items: [
          { slug: 'run-reports/overview' },
          { slug: 'run-reports/irish-citizens-assembly' },
          { slug: 'run-reports/french-convention-end-of-life' },
          { slug: 'run-reports/french-convention-climate' },
          { slug: 'run-reports/iceland-2010-constitution' },
          { slug: 'run-reports/global-assembly-2021' },
          { slug: 'run-reports/ostbelgien-citizens-council' },
          { slug: 'run-reports/demos-waves' },
          { slug: 'run-reports/michigan-redistricting-commission' },
          { slug: 'run-reports/connecticut-property-taxes' },
          { slug: 'run-reports/ireland-biodiversity-assembly' },
          { slug: 'run-reports/scotland-climate-children' },
        ]},
        { label: 'Stories', items: [
          { slug: 'stories/overview' },
          { slug: 'stories/topanga-fire-mutual-aid' },
          { slug: 'stories/open-source-insulin' },
          { slug: 'stories/fureai-kippu' },
        ]},
        { label: 'Ecosystem', items: [
          { slug: 'ecosystem/overview' },
        ]},
        { label: 'Library', items: [
          { slug: 'library/portable-governance' },
          { slug: 'library/reading-and-sources' },
        ]},
        { label: 'About', items: [
          { slug: 'about' },
        ]},
      ],
    }),
  ],
});
