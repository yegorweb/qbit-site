<script setup lang="ts">
useSeoMeta({
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
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
      rel:"preload",
      href:"https://cdn.jsdelivr.net/npm/@mdi/font@6.6.96/css/materialdesignicons.min.css",
      as:"style",
      onload:"this.onload=null;this.rel='stylesheet'"
    }
  ],
})
</script>

<template>
  <NuxtPwaManifest />
  <NuxtLayout />
</template>
