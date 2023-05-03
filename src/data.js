import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      title: 'About',
      href: getPermalink('/about'),
      links: [
        {
          text: 'Who we are',
          href: getPermalink('/about/who-we-are'),
        },
      ],
    },
    {
      text: 'Rides',
      href: getPermalink('rides', 'tag'),
    },
    {
      text: 'Travels',
      title: 'Travels',
      links: [
        {
          text: 'C(road)zia',
          href: getPermalink('/travels/croadzia'),
        },
        {
          text: 'Eroica',
          href: getPermalink('/travels/eroica'),
        },
        {
          text: 'Almost Salty',
          href: getPermalink('/travels/almost-salty'),
        },
        {
          text: 'Transardinia',
          href: getPermalink('/travels/transardinia'),
        },
        {
          text: 'Ladatrack',
          href: getPermalink('/travels/ladatrack'),
        },
        {
          text: 'Kirghizistan',
          href: getPermalink('travels/kirghizistan'),
        },
      ],
    },
    {
      text: 'Journal',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
  // actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  secondaryLinks: headerData.links,
  links: headerData.links,
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/_u/_patatrack/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(/tomFavicon-32x32.png)]"></span>
    Made with ❤️ by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://tomashco.github.io/"> Tom</a>
  `,
};
