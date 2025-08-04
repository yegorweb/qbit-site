<script setup lang="ts">
let content = useContent()
</script>

<template>
  <v-col cols="12" md="4">

    <div class="card">
      <div class="course">
        <div class="course-name">О клубе Кубит</div>
        <div class="course-description">
          <div>
            <i>
              "Нет никакой волшебной палочки.
              Только затраченное время и увлеченность может открыть путь к знаниям и
              умениям.
              Только ваши старания помогут вам стать художником, дизайнером или программистом.
              Мы вместе пройдем по этому пути максимально интересно."
            </i>
          </div>
        </div>
        <div class="text-end">
          <v-avatar image="../assets/images/roman.webp" size="60" class="ma-2"></v-avatar> <b>Грачев Роман</b>
        </div>
      </div>

    </div>
  </v-col>
  <v-col cols="12" md="4">

    <div class="card ">
      <div class=" image">

      </div>

    </div>
  </v-col>
</template>

<style lang="scss" scoped>
.card {
  max-width: 100%;
  height: 100%;

  @media screen and (width >=960px) {
    & {
      min-width: 365px;
    }
  }
}

.image {
  min-height: 300px;
  background-image: url('../assets/images/about-qbit.jpg');
  border-radius: 8.59px;
  width: 100%;
  padding: 12px 18px;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;



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
</style>