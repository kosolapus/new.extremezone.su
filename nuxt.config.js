export default {
  server: {
    port: process.env.$PORT || process.env.PORT || 3000, // default: 3000
  },
  head: {
    title: 'fresh-ez',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'cssAnimate page-white',
      'data-spy': 'scroll',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['bootstrap/dist/css/bootstrap.css', '~/assets/css/style.css', '~/assets/css/main.scss'],

  styleResources: {
    scss: ['./assets/css/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  serverMiddleware: [
    { path: '/api', handler: require('body-parser').json() },
    {
      path: '/api',
      handler: (req, res, next) => {
        const url = require('url')
        req.query = new url.Url(req.url, true).query
        req.params = { ...req.query, ...req.body }
        next()
      },
    },
    { path: '/api', handler: '~/serverMiddleware/api-server.ts' },
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'nuxt-mail',
      {
        message: {
          to: 'kosolapus@gmail.com',
          from: 'admin@schdlr.io',
        },
        smtp: {
          host: 'smtp.yandex.ru',
          port: 465,
          auth: {
            user: 'admin@schdlr.io',
            pass: process.env.mailpass,
          },
        },
      },
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.apiKey,
          authDomain: 'extremezone-124ac.firebaseapp.com',
          projectId: 'extremezone-124ac',
          storageBucket: 'extremezone-124ac.appspot.com',
          messagingSenderId: '23892914343',
          appId: '1:23892914343:web:f6fe36779b8e1abc1dab82',
          measurementId: 'G-KHQT5YEVJ6',
        },
        services: {
          firestore: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
