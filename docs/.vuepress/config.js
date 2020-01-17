module.exports = {
  title: 'BrowseHandsfree.com',
  description:
    'Learn how to browse the web handsfree with our Handsfree Chrome Extension or create your own experiences with our library, Handsfree.js 👋',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { src: 'https://unpkg.com/handsfree@6.1.4/dist/handsfree.js' }],
    [
      'script',
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-155013240-1' }
    ],
    [
      'script',
      {
        src:
          'https://cdn.jsdelivr.net/npm/canvas-confetti@0.5.0/dist/confetti.browser.min.js'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/handsfree@6.1.4/dist/handsfree.css'
      }
    ]
  ],

  plugins: [['vuepress-plugin-seo']],

  extend: '@vuepress/theme-default',
  themeConfig: {
    logo: '/favicon.png',
    lastUpdated: 'Last Updated',

    author: { name: 'Oz Ramos', twitter: '@HeyOzRamos' },
    domain: 'https://browsehandsfree.com',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chrome Extension', link: '/browser/' },
      { text: 'Handsfree.js', link: '/code/' },
      { text: 'Demos', link: '/demos/' },
      { text: 'Get Involved', link: '/get-involved/' },
      { text: 'About', link: '/about/' }
    ],

    sidebar: [
      '/',
      '/getting-started/',
      {
        title: 'Chrome Extension',
        path: '/browser/',
        children: ['/browser/calibrating/', '/browser/sites/'],
        collapsable: false
      },
      {
        title: 'Handsfree.js',
        path: '/code/',
        collapsable: false,
        children: [
          '/code/getting-started/',
          '/code/config/',
          '/code/head/',
          '/code/body/',
          '/code/plugins/',
          '/code/methods/',
          '/code/classes/',
          '/code/properties/',
          '/code/events/',
          '/code/calibrating/',
          '/code/client-mode/'
        ]
      },
      '/demos/',
      '/get-involved/',
      {
        title: 'About',
        path: '/about/',
        collapsable: false,
        children: ['/about/privacy-policy/', '/about/pitch-decks/']
      }
    ]
  }
}
