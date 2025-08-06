<script setup lang="ts">

import logoPlpo from '~/assets/images/plpo.png'
import logoGiv from '~/assets/images/giv.png'
import logoLocation from '~/assets/images/location21.png'
import logoLibrary from '~/assets/images/library.png'
import logoTorgOb from '~/assets/images/pos-qbit.png'
import logoFormtomail from '~/assets/images/stamp.svg'
import logoGlazovest from '~/assets/images/glazov-est.png'
import logoUpVk from '~/assets/images/up-vk.png'

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
        description: "автоматизация торговли",
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
])
const duplicatedProjects = computed(() => [...projects.value, ...projects.value]);
</script>
<template>
    <v-col cols="12">
        <div class="title text-center ma-4">
            Сделано нами
        </div>
        <div class="slider"

        :style="`--width: 200px;
                --height: 100px;
                --quantity: ${projects.length};`"
        >
            <div class="slider-content">
                <a v-for="(project,index) in projects" :href="project.url" target="_blank" :style="`text-decoration: none; --position: ${index}`" class="slider-item">
                    <div class="text-center"> <img :src="project.logo" alt=""></div>
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
    font-size: clamp(0.625rem, -0.375rem + 5vw, 0.875rem);
    color: #3E3E3E;
    text-align: center;
    line-height: clamp(0.625rem, -0.375rem + 5vw, 0.875rem);
}

.slider{
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent,
        #000 10% 90%,
        transparent
    );
}
.slider .slider-content{
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
}
@keyframes autoRun{
    from {
        left: 100%;
    }
    to {
        left: calc(var(--width) * -1);
    }
}
.slider .slider-content .slider-item{
    width: var(--width);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc( (10s / var(--quantity)) * (var(--position) - 1) - 10s)!important;
}
.slider:hover .slider-item{
    animation-play-state: paused!important;
}
</style>