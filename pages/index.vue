<script setup lang="ts">
import webDevImage from '@/assets/images/web-dev.png'
import drawingImage from '@/assets/images/drawing.png'
import scratchImage from '@/assets/images/scratch.png'
import javaImage from '@/assets/images/java.png'
import background from '@/assets/images/web-dev.png'

const isLoaded = ref(false)

useHead({
  link: [
    { rel: 'preload', as: 'image', href: webDevImage },
    { rel: 'preload', as: 'image', href: drawingImage },
    { rel: 'preload', as: 'image', href: scratchImage },
    { rel: 'preload', as: 'image', href: javaImage },
    { rel: 'preload', as: 'image', href: background },
    { rel: 'preload', as: 'image', href: '/images/roman.webp' }
  ]
})

onMounted(() => {
  if (document.readyState === 'complete') {
    isLoaded.value = true
  } else {
    window.addEventListener('load', () => {
      isLoaded.value = true
    })
  }
})
</script>

<template>
  <v-container v-if="isLoaded" class="page-container d-flex flex-column justify-space-between "
    style="padding-top: 12px !important;">
    <v-row class="flex-grow-0 mt-6">
      <v-col cols="12" md="6" lg="4">

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
      <v-col cols="12" md="6" lg="4">

        <div class="card">
          <div class="text-card">
            <div class="course-name">О клубе Кубит</div>
            <div class="course-description" style="font-style: italic;">
              <div>

                "Нет никакой волшебной палочки.
                Только затраченное время и увлеченность может открыть путь к знаниям и
                умениям.
                Только ваши старания помогут вам стать художником, дизайнером или программистом.
                Мы вместе пройдем по этому пути максимально интересно."

              </div>
            </div>
            <div class="d-flex align-center justify-end">
              <img src="/images/roman.webp" style="width: 60px; border-radius: 50px;" class="ma-2"></img> <b>Грачев
                Роман</b>
            </div>
          </div>

        </div>
      </v-col>
      <v-col cols="12" lg="4">

        <div class="card ">
          <div class=" image">

          </div>

        </div>
      </v-col>
    </v-row>
    <v-row class="flex-grow-0">
      <Projects />
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 90dvh;
}

.image {
  min-height: 300px;
  background-image: url('../assets/images/about-qbit.webp');
  border-radius: 8.59px;
  width: 100%;
  padding: 12px 18px;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.card {
  max-width: 100%;
  height: 100%;
}
.text-card{
 background-color: #EFEFEF;
  background-position: 100% 50%;
  background-size: contain;
  border-radius: 8.59px;
  width: 100%;
  padding: 12px 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.course {
  background-color: #EFEFEF;
  background-position: 100% 50%;
  background-size: contain;
  border-radius: 8.59px;
  width: 100%;
   height: 100%;
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

  @media (hover: hover) {
    &:hover {
      .course-name {
        color: #ffffff;
      }

      .course-description {
        color: #dfdfdf;
      }
    }
  }
}

#web-dev {
  background-image: url(@/assets/images/web-dev.png);

  @media (hover: hover) {
    &:hover {
      background-color: #3a5eb2;
    }
  }
}

#drawing {
  background-image: url(@/assets/images/drawing.png);

  @media (hover: hover) {
    &:hover {
      background-color: #265787;
    }
  }
}

#scratch {
  background-image: url(@/assets/images/scratch.png);

  @media (hover: hover) {
    &:hover {
      background-color: #f8a21f;
    }
  }
}

#java {
  background-image: url(@/assets/images/java.png);

  @media (hover: hover) {
    &:hover {
      background-color: #5283a2;
    }
  }
}
</style>