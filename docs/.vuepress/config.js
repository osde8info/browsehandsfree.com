module.exports = {
  title: 'BrowseHandsfree.com',
  description:
    'Learn how to browse the web handsfree with our Handsfree Chrome Extension or create your own experiences with our library, Handsfree.js 👋',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { src: 'https://unpkg.com/handsfree@6.1.4/dist/handsfree.js' }],
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

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-155013240-1'
      }
    ]
  ],

  extend: '@vuepress/theme-default',
  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chrome Extension', link: '/browser/' },
      { text: 'Handsfree.js', link: '/code/' },
      { text: 'Demos', link: '/demos/' },
      { text: 'Get Involved', link: '/get-involved/' }
    ],

    sidebar: [
      '/',
      '/getting-started/',
      '/browser/',
      {
        title: 'Handsfree.js',
        path: '/code/',
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
          '/code/client-mode/'
        ],
        collapsable: false
      },
      '/demos/',
      '/get-involved/'
    ]
  }
}
