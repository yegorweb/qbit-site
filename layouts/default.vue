<script lang="ts" setup>

</script>

<template>
  <v-app>
    <div style="background: #FFFFFF; position: fixed; top: 0; left: 0; right: 0; height: 60px; z-index: 999;">
      <v-container class="d-flex align-center justify-space-between user-select-none"
        style="height: 60px; position: relative;">
        <div @click="navigateTo('/')" class="d-flex align-center cursor-pointer logo">
          <img src="/logo.svg" style="height: 48px;" />

          <div class="text-primary font-weight-bold" style="font-size: 22px; margin-left: 13px;">Клуб Кубит</div>
        </div>
      </v-container>
    </div>
    <div style="height: 60px;"></div>

    <NuxtPage />
  </v-app>
</template>

<style lang="scss" scoped>
.logo, .logo * {
  user-select: none;
}
</style>
