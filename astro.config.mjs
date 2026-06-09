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
        { label: 'The toolkit', items: [
          { slug: 'toolkit/overview' },
          { slug: 'toolkit/connect-with-neighbors' },
          { slug: 'toolkit/coordinate-a-community' },
          { slug: 'toolkit/decide-together' },
          { slug: 'toolkit/share-culture-and-resources' },
          { slug: 'toolkit/fund-collective-work' },
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
