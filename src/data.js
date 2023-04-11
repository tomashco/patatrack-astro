import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Rides',
      href: getPermalink('rides', 'tag'),
    },
    {
      text: 'Travels',
      links: [
        {
          text: 'Croatia',
          href: getPermalink('/landing/old-index'),
        },
        {
          text: 'Ladakh',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Kirghizistan',
          href: getPermalink('gravel', 'tag'),
        },
      ],
    },
    {
      text: 'Journal',
      href: getBlogPermalink(),
    },
  ],
  // actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'About',
  //     href: getPermalink('/about'),
  //   },
  //   {
  //     title: 'Rides',
  //     href: getPermalink('rides', 'tag'),
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  secondaryLinks: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Rides', href: getPermalink('rides', 'tag') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'instagram://user?username=_patatrack/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
