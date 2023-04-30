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
          text: 'C(road)zia 2021',
          href: getPermalink('/landing/old-index'),
        },
        {
          text: 'Eroica 2022',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Almost Salty 2022',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Transardinia 2022',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Ladatrakh 2022',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Kirghizistan 2023',
          href: getPermalink('gravel', 'tag'),
        },
      ],
    },
    {
      text: 'Journal',
      href: getBlogPermalink(),
    },
    {
      text: 'Support Us',
      href: getPermalink('/support'),
    },
  ],
  // actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  secondaryLinks: [
    ...headerData.links,
    // { text: 'About', href: getPermalink('/about') },
    // { text: 'Rides', href: getPermalink('rides', 'tag') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/_u/_patatrack/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/tomFavicon-32x32.png)]"></span>
    Made with ❤️ by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://tomashco.github.io/"> Tom</a>
  `,
};
