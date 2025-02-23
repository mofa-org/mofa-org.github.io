import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink(''),
    },
    {
      text: 'Hackathons',
      links: [
        {
          text: 'MoFA Search',
          href: getPermalink('/hackathons/mofa-search'),
        },
        {
          text: 'MoFA Voice',
          href: getPermalink('/hackathons/mofa-voice'),
        },
        {
          text: 'MoFA ORA',
          href: getPermalink('/hackathons/mofa-ora'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'MoFA',
          href: getPermalink('mofa', 'tag'),
        },
      ],
    },
  ],
};
export const footerData = {
  footNote: `
    Created by <a class="text-blue-600 underline dark:text-muted" href="https://relevantstudy.com/"> Relevant Study LLC </a> · All rights reserved.
  `,
};
