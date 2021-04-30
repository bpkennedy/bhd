import zlib from 'zlib'
import { faBookOpen, faPodcast, faVideo, faHome, faStream, faList, faPlaceOfWorship, faTorah, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

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

  target: 'server',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-masonry.js',
    { src: '~/plugins/vue-plyr', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // nuxt-compress
    'nuxt-compress',
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

  // nuxt-compress for optimal file compression
  'nuxt-compress': {
    gzip: {
      filename: '[path][base].gz',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    },
    brotli: {
      filename: '[path][base].br',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    },
  },

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
        faHome,
        faStream,
        faList,
        faPlaceOfWorship,
        faTorah,
        faLongArrowAltLeft,
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
    // analyze: true,  // enable this to show webpack build analyzer
    transpile: ['vue-masonry'],
  },
}
