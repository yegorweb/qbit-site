<script setup lang="ts">
import { useRouter } from 'vue-router'  
import webDevImgUrl from '@/assets/images/web-dev.png'
import drawingImgUrl from '@/assets/images/drawing.png'
import scratchImgUrl from '@/assets/images/scratch.png'
import javaImgUrl from '@/assets/images/java.png'

defineProps(['course'])

useHead({
  link: [
    {
      rel: 'preload',
      href: webDevImgUrl,
      as: 'image',
    },
    {
      rel: 'preload',
      href: drawingImgUrl,
      as: 'image',
    },
    {
      rel: 'preload',
      href: scratchImgUrl,
      as: 'image',
    },
    {
      rel: 'preload',
      href: javaImgUrl,
      as: 'image',
    },
  ],
})
</script>

<template>

  <div class="card-flex pb-4">
    <div v-if="course == 'web-dev'" class="course" id="web-dev"  >
      <div class="course-name">Веб-разработка</div>
      <div class="course-description">Vue, Express, HTML, CSS, JS</div>
    </div>
    <div v-if="course == 'drawing'" class="course" id="drawing">
      <div class="course-name">Цифровая живопись</div>
      <div class="course-description">Рисование на планшете</div>
    </div>
    <div v-if="course == 'scratch'" class="course" id="scratch">
      <div class="course-name">Scratch</div>
      <div class="course-description">Блочное программирование</div>
    </div>
    <div v-if="course == 'java'" class="course" id="java">
      <div class="course-name">Java</div>
      <div class="course-description">Разработка программ</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>



.card-flex {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-info {
  padding: 18px;
}



.v-selection-control {
  align-items: flex-start !important;
}

.course {
 
  background-position: 100% 50%;
  background-size: contain;
  border-radius: 8.59px;
  width: 100%;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0px;

  &,
  & * {
    user-select: none;
    transition: all 0.2s;
  }

  &-name {
    font-size: clamp(0.875rem, -0.375rem + 6.25vw, 1.1875rem);
    font-weight: 700;
  }

  &-description {
    font-size: clamp(0.625rem, -0.375rem + 5vw, 0.875rem);
    color: #3E3E3E;
  }

}

#web-dev {
  background-image: url(@/assets/images/web-dev.png);


}

#drawing {
  background-image: url(@/assets/images/drawing.png);


}

#scratch {
  background-image: url(@/assets/images/scratch.png);


}

#java {
  background-image: url(@/assets/images/java.png);


}
</style>