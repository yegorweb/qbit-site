// https://nuxt.com/docs/api/configuration/nuxt-config

import { ru } from 'vuetify/locale'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  css: ['~/assets/styles/main.scss'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Клуб Кубит',
      meta: [{
        name: 'description', content: 'Клуб программирования и дизайна Кубит. Находится в городе Глазов'
      }],
      link: [
        { rel: 'icon', href: '/logo.svg' },
      ]
    }
  },

  ssr: false,

  site: { 
    url: 'https://qbit-club.com', 
    name: 'Клуб Кубит' 
  }, 

  routeRules: {
    '/': { prerender: true },
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['vue-router']
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  robots: {
    groups: [
      { userAgent: '*', allow: '/' },
    ]
  },

  sitemap: {
    urls: [
      { loc: '/', lastmod: new Date().toISOString(), priority: 1, changefreq: 'weekly' },
    ]
  },


  vuetify: {
    vuetifyOptions: {
      locale: {
        locale: 'ru',
        fallback: 'en',
        messages: { ru }
      },
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#334064'
            },
          }
        }
      },
      defaults: {
        VBtn: {
          class: 'text-body-2',
          style: 'border-radius: 8px;'
        },
        global: {
          ripple: false,
          elevation: 0,
        },
      },
      icons: {
        defaultSet: 'mdi-svg',
      }
    }
  },

  googleFonts: {
    families: {
      Montserrat: [400, 500, 700]
    },
    download: true,
    preload: true,
  },
})