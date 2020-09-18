export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  target: 'static',
  router: {
    base: process.env.NODE_ENV === 'production' ? '/nuxt-i18n-demo/' : '',
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/nuxt-server-init.js', mode: 'server' },
    { src: '@/plugins/i18n.ts' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],

  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Nuxt-i18n
   */
  i18n: {
    locales: [
      { code: 'en', file: 'lang_en.js' },
      { code: 'zh_TW', file: 'lang_zh_TW.js' },
    ],
    detectBrowserLanguage: false,
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'i18n/shared/',
    vueI18n: {
      fallbackLocale: false,
      silentFallbackWarn: true,
    },
  },
}
