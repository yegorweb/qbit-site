<script setup lang="ts">
useSeoMeta({
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
  charset: 'utf-8',
  title: 'Клуб Кубит',
  description: 'Клуб программирования и дизайна Кубит. Находится в городе Глазов',
  keywords: 'курсы программирования Глазов, ИТ Удмуртия, Глазов ИТ, разработка приложений',
  ogTitle: 'Клуб Кубит',
  ogDescription: 'Клуб программирования и дизайна Кубит. Находится в городе Глазов',
  ogImage: 'https://qbit-club.com/og-image.jpg',
  ogUrl: 'https://qbit-club.com/',
  ogLocale: 'ru-RU',
  twitterTitle: 'Клуб Кубит',
  twitterDescription: 'Клуб программирования и дизайна Кубит. Находится в городе Глазов',
  twitterImage: 'https://qbit-club.com/og-image.jpg',
  twitterCard: 'summary',
  applicationName: 'Клуб Кубит',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://qbit-club.com'
    },
    {
      rel: 'preload',
      href: '/content.json',
      as: 'fetch',
      crossorigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: '/images/roman.webp',
      as: 'image',
    }
  ],
  meta: [
    {
      name:"google-site-verification",
      content:"shujXTJbF4t7_hxeajn6lv9W_98nAPZUzJK-xHKKxWY"
    }
  ]
})
// <meta name="google-site-verification" content="shujXTJbF4t7_hxeajn6lv9W_98nAPZUzJK-xHKKxWY" />
</script>

<template>
  <NuxtPwaManifest />
  <NuxtLayout />
</template>
