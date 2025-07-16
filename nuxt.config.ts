// https://nuxt.com/docs/api/configuration/nuxt-config

import { ru } from 'vuetify/locale'

const courses = ['web-dev', 'scratch', 'java', 'drawing']

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

  features: {
    inlineStyles: false
  },
  
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

  site: { 
    url: 'https://qbit-club.com', 
    name: 'Клуб Кубит' 
  }, 

  generate: {
    routes: [
      '/',
      '/about-us',
      '/agreement',
      ...courses.map(course => `/sign-up/${course}`),
    ]
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
      },
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