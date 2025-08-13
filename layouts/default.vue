<script lang="ts" setup>
import qbitLogo from '../assets/images/qbit-logo.svg'
useHead({
  link: [
    {
      rel: 'preload',
      href: qbitLogo,
      as: 'image',
      type: 'image/svg+xml'
    }
  ]
})
let backgroundColor = ref('none')
onMounted(() => {
  const tick = () => {
    if (window.scrollY > 0) {
      backgroundColor.value = '#FFFFFF'
    } else {
      backgroundColor.value = 'none'
    }
  }
  tick()
  window.addEventListener('scroll', tick)
})
</script>

<template>
  <v-app style="min-height: 100vh;">
    <div class="header" :style="{ background: backgroundColor }">
      <v-container class="d-flex align-center justify-space-between user-select-none pt-2 pb-2"
        style="position: relative;">
        <img :src="qbitLogo" @click="navigateTo('/')" style="height: 100%; max-height: 56px; max-width: 40%; width: auto;" class="cursor-pointer mr-4" />

        <Contacts></Contacts>
      </v-container>
    </div>

    <NuxtPage />

    <v-spacer></v-spacer>

  </v-app>
</template>

<style lang="scss" scoped>
.logo,
.logo * {
  user-select: none;
 
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all .15s;
}
</style>
