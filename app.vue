<script setup lang="ts">
useSeoMeta({
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
      rel: 'preload',
      href: '/content.json',
      as: 'fetch',
    },
  ],
})
</script>

<template>
  <NuxtLayout />
</template>
