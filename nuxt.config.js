// Import FontAwesome icons
import { faBookOpen, faPodcast, faVideo } from '@fortawesome/free-solid-svg-icons'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'burning-heart',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-masonry.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Chakra UI Configuration
  chakra: {
    icons: {
      // Here we state that we use `fa`
      // icons library for Chakra's
      // internal icon parser
      iconPack: 'fa',
      iconSet: {
        faBookOpen,
        faPodcast,
        faVideo,
      },
    },
    extendTheme: {
      fonts: {
        heading: '"EuropaBold", Fallback, sans-serif',
        body: '"EuropaRegular", Fallback, sans-serif',
      },
      colors: {
        brand: {
          // 50: '#f7faf8',
          50: '#DEF5F6',
          100: '#e5f0ea',
          200: '#d1e5db',
          300: '#bcdacb',
          // 400: '#a5cdb9', // using 400 for main brand color because Chakra UI uses internally
          400: '#4a989a',
          500: '#8bbea5',
          600: '#6dad8d',
          700: '#4a9871',
          800: '#3a7859',
          900: '#224634',
          999: '#4a989a',
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-masonry'],
  },
}
