<script setup lang="ts">
import webDevImgUrl from '@/assets/images/web-dev.png'
import drawingImgUrl from '@/assets/images/drawing.png'
import scratchImgUrl from '@/assets/images/scratch.png'
import javaImgUrl from '@/assets/images/java.png'

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
  <v-container class="page-container">
    <v-row>
      <v-col cols="12" md="auto">

        <div class="card card-flex">
          <div class="course" id="web-dev" @click="navigateTo('/sign-up/web-dev')">
            <div class="course-name">Веб-разработка</div>
            <div class="course-description">Vue, Express, HTML, CSS, JS</div>
          </div>
          <div class="course" id="drawing" @click="navigateTo('/sign-up/drawing')">
            <div class="course-name">Цифровая живопись</div>
            <div class="course-description">Рисование на планшете</div>
          </div>
          <div class="course" id="scratch" @click="navigateTo('/sign-up/scratch')">
            <div class="course-name">Scratch</div>
            <div class="course-description">Блочное программирование</div>
          </div>
          <div class="course" id="java" @click="navigateTo('/sign-up/java')">
            <div class="course-name">Java</div>
            <div class="course-description">Разработка программ</div>
          </div>
        </div>
      </v-col>
      <AboutUs />
      <v-col cols="12" md="auto">



      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.card {
  max-width: 100%;

  @media screen and (width >=960px) {
    & {
      min-width: 365px;
    }
  }
}

.card-flex {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-info {
  padding: 18px;
}

.window-item {
  padding: 27px;
}

.v-selection-control {
  align-items: flex-start !important;
}

.course {
  background-color: #EFEFEF;
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
  cursor: pointer;

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

  &:hover {
    .course-name {
      color: #ffffff;
    }

    .course-description {
      color: #dfdfdf;
    }
  }
}

#web-dev {
  background-image: url(@/assets/images/web-dev.png);

  &:hover {
    background-color: #3a5eb2;
  }
}

#drawing {
  background-image: url(@/assets/images/drawing.png);

  &:hover {
    background-color: #265787;
  }
}

#scratch {
  background-image: url(@/assets/images/scratch.png);

  &:hover {
    background-color: #f8a21f;
  }
}

#java {
  background-image: url(@/assets/images/java.png);

  &:hover {
    background-color: #5283a2;
  }
}
</style>