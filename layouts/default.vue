<script lang="ts" setup>
// @ts-ignore
import QbitLogo from '../assets/images/qbit-logo.svg?skipsvgo'
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
        <QbitLogo @click="navigateTo('/')" style="height: 100%; max-height: 56px; max-width: 40%;" class="cursor-pointer mr-4" />

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
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all .15s;
}
</style>
