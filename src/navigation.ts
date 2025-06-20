import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';


export const headerData = {
  links: [
    {
      text: '功能',
      href: getPermalink('/#features'),
    },
    {
      text: '博客',
      href: getBlogPermalink(),
    },
    {
      text: '价格',
      href: getPermalink('/pricing'),
    },
    {
      text: '联系我们',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
      {
        text: '申请成为早期用户',
        href: getPermalink('/early-access'),
      }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Pricing', href: getPermalink('/pricing'), },
        { text: 'Resources', href: '#' },
        { text: 'Use Cases', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="" alt="onWidget logo" loading="lazy" style="display:none;"></img>
    © 2020~2025 Tangram Note 保留一切权利
  `,
};
