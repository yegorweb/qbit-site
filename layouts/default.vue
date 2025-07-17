<script lang="ts" setup>

</script>

<template>
  <v-app style="min-height: 100vh;">
      <v-container class="d-flex align-center justify-space-between user-select-none"
    <div style="background: #FFFFFF; position: sticky; top: 0; left: 0; right: 0; height: 60px; z-index: 999;">
        style="height: 60px; position: relative;">
        <div @click="navigateTo('/')" class="d-flex flex-row align-center cursor-pointer logo">
          <svg style="width: auto;" height="48" viewBox="0 0 225 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_80)">
          <path d="M108.582 1.20098C111.015 -0.165887 113.985 -0.165892 116.418 1.20097L220.568 59.707C223.09 61.1233 224.65 63.79 224.65 66.6819V183.318C224.65 186.21 223.09 188.877 220.568 190.293L116.418 248.799C113.985 250.166 111.015 250.166 108.582 248.799L4.43161 190.293C1.91036 188.877 0.349709 186.21 0.349709 183.318V66.6819C0.349709 63.79 1.91036 61.1233 4.43161 59.707L108.582 1.20098Z" fill="#334064"/>
          <path d="M112.5 17L209.062 71V179L112.5 233L15.9382 179V71L112.5 17Z" fill="white"/>
          <path d="M112.5 57L172.689 90.8108V158.432L112.5 192.243L52.3112 158.432V90.8108L112.5 57Z" fill="#334064"/>
          <path d="M112.5 75L157.1 100V150L112.5 175L67.8997 150V100L112.5 75Z" fill="white"/>
          <path d="M112.5 125.5L12.4071 67.5" stroke="#334064" stroke-width="16"/>
          <path d="M63 154L12 184" stroke="#334064" stroke-width="16"/>
          <path d="M112.5 125.5L211.593 67.5" stroke="#334064" stroke-width="16"/>
          <path d="M112.5 67.5V15" stroke="#334064" stroke-width="16"/>
          <path d="M161 154L212 184" stroke="#334064" stroke-width="16"/>
          <path d="M112.5 125.5L112.5 236" stroke="#334064" stroke-width="16"/>
          </g>
          <defs>
          <clipPath id="clip0_1_80">
          <rect width="225" height="250" fill="white"/>
          </clipPath>
          </defs>
          </svg>

          <div class="text-primary font-weight-bold" style="font-size: 22px; margin-left: 13px;">Клуб Кубит</div>
        </div>
      </v-container>
    </div>

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
