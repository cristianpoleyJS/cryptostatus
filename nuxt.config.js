export default {
  // Global page headers
  head: {
    title: 'CryptoNine',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CryptoNine - List cryptocurrencies and view details' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [
    'assets/css/global.css',
    'assets/css/utility-classes.css'
  ],

  // Auto import components
  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ],

  // Autofix lintter
  buildModules: [
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],

  // New path for build
  buildDir: 'nuxt-dist',

  // Base route app by default
  router: {
    base: '/dashboard'
  },

  // Styling for loading app
  loadingIndicator: {
    name: 'cube-grid',
    color: '#2d68ed',
    background: 'white'
  }
}
