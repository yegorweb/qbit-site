<script lang="ts" setup>

</script>

<template>
  <v-app style="min-height: 100vh;">
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

    <v-spacer></v-spacer>

    <footer>
      <v-container style="display: flex;">
        <div style="margin: -6px">
          <div 
            @click="navigateTo('/agreement')" 
            style="padding: 6px; cursor: pointer; color: #8E8E8E;"
          >Согласие об обработке персональных данных</div>
        </div>
      </v-container>
    </footer>
  </v-app>
</template>

<style lang="scss" scoped>
.logo, .logo * {
  user-select: none;
}
</style>
