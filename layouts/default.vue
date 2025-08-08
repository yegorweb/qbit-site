<script lang="ts" setup>
let backgroundColor = ref('none')
if (import.meta.client) {
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 0) {
      backgroundColor.value = '#FFFFFF'
    } else {
      backgroundColor.value = 'none'
    }
  })
}
</script>

<template>
  <v-app style="min-height: 100vh;">
    <div class="header">
      <v-container class="d-flex align-center justify-space-between user-select-none pt-0 pb-0"
        style="position: relative;">
        <div @click="navigateTo('/')" class=" d-flex flex-row align-center cursor-pointer logo mr-4">
      
          <img src="../assets/images/qbit-logo.svg" alt="логотип" height="56" class="mt-4">
        </div>
        <Contacts></Contacts>
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
  background: v-bind(backgroundColor);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all .15s;
}
</style>
