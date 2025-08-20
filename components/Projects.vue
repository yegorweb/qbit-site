<script setup lang="ts">

import logoPlpo from '~/assets/images/plpo.png'
import logoGiv from '~/assets/images/giv.png'
import logoLocation from '~/assets/images/location21.png'
import logoLibrary from '~/assets/images/library.png'
import logoTorgOb from '~/assets/images/pos-qbit.png'
import logoFormtomail from '~/assets/images/stamp.svg?url'
import logoGlazovest from '~/assets/images/glazov-est.png'
import logoUpVk from '~/assets/images/up-vk.png'
import logoUk from '~/assets/images/dom.png'

const projects = ref([
    {
        description: "публикация афиш",
        logo: logoPlpo,
        url: "https://plpo.ru/posters"
    },
    {
        description: "туристический портал",
        logo: logoGiv,
        url: "https://gorodaivesi.ru/"

    },
    {
        description: "маркетплейс доставки",
        logo: logoGlazovest,
        url: "https://glazovest.ru"
    },
    {
        description: "отправка форм",
        logo: logoFormtomail,
        url: "https://formtomail.ru"
    },
    {
        description: "промо подписчикам",
        logo: logoUpVk,
        url: "https://up-vk.ru"
    },
    {
        description: "торговое оборудование",
        logo: logoTorgOb,
        url: "https://qbit-torgob.ru"
    },
    {
        description: "библиотека",
        logo: logoLibrary,
        url: "https://lib.qbit-club.com"
    },
    {
        description: "барбершоп",
        logo: logoLocation,
        url: "https://location21barbershop.ru"
    },
      {
        description: "управляющая компания",
        logo: logoUk,
        url: "https://upk-dom.ru"
    },
])
</script>
<template>
    <v-col cols="12">
        <div class="title text-center ma-4">
            Сделано в Кубит
        </div>
        <div class="slider"
        >
            <div class="slider-content">
                <a v-for="(project,index) in projects" :href="project.url" target="_blank" style="text-decoration: none;" class="slider-item">
                    <div class="text-center image-container"> <img :src="project.logo" alt=""></div>
                    <div class="description"> {{ project.description }}</div>
                </a>
            </div>
            <div class="slider-content" aria-hidden>
                <a v-for="(project,index) in projects" :href="project.url" target="_blank" style="text-decoration: none;" class="slider-item">
                    <div class="text-center image-container"> <img :src="project.logo" alt=""></div>
                    <div class="description"> {{ project.description }}</div>
                </a>
            </div>
        </div>
    </v-col>

</template>
<style scoped lang="scss">
.title {
    font-size: clamp(0.875rem, -0.375rem + 6.25vw, 1.1875rem);
    font-weight: 700;
}

img {
    max-height: 40px;
    max-width: 100px;
}

.description {
    font-size: clamp(0.525rem, -0.275rem + 5vw, 0.775rem);
    color: #3E3E3E;
    text-align: center;
    line-height: clamp(0.525rem, -0.275rem + 5vw, 0.775rem);
    height: 45px;
    display: flex;
    align-items: center;
    width:min-content;
    text-wrap: balance;
    overflow-wrap: normal;
}
.image-container{
    height: 40px;
    display: flex;
    align-items: center;
}
.slider{
    margin: 0 auto;
    padding: 20px 0;
    // max-width: 700px;
    overflow: hidden;
    display: flex;
    mask-image: linear-gradient(
    to right,
    transparent,
    #000 10% 90%,
    transparent
    );
    
    > * {
      flex: 0 0 100%;
    }
}
.slider .slider-content{
    display: flex;
    gap: 20px;
    /* Add padding to the right to create a gap between the last and first card. */
    padding-right: 20px;
    will-change: transform;
    animation: scrolling 25s linear infinite;
}
  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
.slider .slider-content .slider-item{
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 100%;
}
</style>