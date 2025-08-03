<script setup lang="ts">

import logoPlpo from '~/assets/images/plpo.png'
import logoGiv from '~/assets/images/giv.png'

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
        description: "публикация афиш",
        logo: logoPlpo,
        url: "https://plpo.ru/posters"
    },
    {
        description: "туристический портал",
        logo: logoGiv,
        url: "https://gorodaivesi.ru/"
    },
])
</script>
<template>
    <v-col cols="12">
        <div class="title text-center ma-4">
            Сделано нами
        </div>
        <div style="overflow: scroll;" class="d-flex align-center justify-md-center ga-10">
            <a v-for="project in projects" :href="project.url" target="_blank" style="text-decoration: none;">
                <div class="text-center"> <img :src="project.logo" alt=""></div>
                <div class="description"> {{ project.description }}</div>
            </a>
        </div>



    </v-col>

</template>
<style scoped lang="scss">
.title {
    font-size: clamp(0.875rem, -0.375rem + 6.25vw, 1.1875rem);
    font-weight: 700;
}

img {
    height: 40px;
}

.description {
    font-size: clamp(0.625rem, -0.375rem + 5vw, 0.875rem);
    color: #3E3E3E;
    text-align: center;
    line-height: clamp(0.625rem, -0.375rem + 5vw, 0.875rem);
     
}
</style>