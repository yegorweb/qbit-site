// https://nuxt.com/docs/api/configuration/nuxt-config

import type { SitemapUrlInput } from '@nuxtjs/sitemap'
import { ru } from 'vuetify/locale'

const courses = ['web-dev', 'scratch', 'java', 'drawing']

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts', '@nuxtjs/sitemap', '@nuxtjs/robots', '@vite-pwa/nuxt'],
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
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['logo.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Клуб Кубит',
      short_name: 'Клуб Кубит',
      description: 'Клуб программирования и дизайна Кубит. Находится в городе Глазов',
      theme_color: '#ffffff',
      background_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },

        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
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
      ...courses.map(course => `/sign-up/${course}`),
    ]
  },

  robots: {
    groups: [
      { 
        userAgent: '*', 
        disallow: ['/about-us'], 
        allow: [
          '/',
          ...courses.map(course => `/sign-up/${course}`),
        ]
      },
    ]
  },

  sitemap: {
    urls: [
      { loc: '/', priority: 1, changefreq: 'daily' },
      ...(courses.map(course => ({ loc: `/sign-up/${course}`, priority: 0.8, changefreq: 'daily' })) as SitemapUrlInput[]),
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
              primary: '#27384b',
              accent: '#e76f51'
            },
          }
        }
      },
      defaults: {
        VBtn: {
          class: 'text-body-2',
          style: 'border-radius: 8px;'
        },
        VCheckboxBtn: {
          style: 'gap: 4px;'
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