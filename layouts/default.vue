<script lang="ts" setup>
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
      <v-container class="d-flex align-center justify-space-between user-select-none pt-0 pb-0"
        style="height: 60px; position: relative;">
        <div @click="navigateTo('/')" class=" d-flex flex-row align-center cursor-pointer logo">
      
          <img src="../assets/images/qbit-logo.svg" alt="логотип" height="56">
        </div>
        <div>
          <div>vk</div>
          <div>89068970429</div>
<div>Глазов, Калинина, 2а</div>
        </div>
      </v-container>
    </div>

    <NuxtPage />

    <v-spacer></v-spacer>

    <footer>
      <v-container style="display: flex;">
        <!-- <div style="margin: -6px">
          <div @click="navigateTo('/agreement')" style="padding: 6px; cursor: pointer; color: #8E8E8E;">Согласие на
            обработку персональных данных</div>
        </div> -->
      </v-container>
    </footer>
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
  height: 60px;
  z-index: 999;
  transition: all .15s;
}
</style>
