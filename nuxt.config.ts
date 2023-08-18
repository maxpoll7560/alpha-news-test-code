// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      api: 'https://flems.github.io/test/api/news/'
    }
  },

  components: [
    '~/components/news',
    '~/components'
  ],

  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt'
  ],

  // mode: 'static'

})

