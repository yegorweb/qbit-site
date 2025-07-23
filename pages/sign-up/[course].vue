<script setup lang="ts">
import { mdiCheck, mdiClose, mdiReload } from '@mdi/js'
import { useField, useForm } from 'vee-validate'

let content = useContent()

const courses = ['web-dev', 'scratch', 'java', 'drawing'] as const
type Course = typeof courses[number]
let course = useRoute().params.course as Course

const courseNames = new Map<Course, string>([
  ['web-dev', 'Веб-разработка'], 
  ['drawing', 'Цифровая живопись'], 
  ['scratch', 'Scratch'],
  ['java', 'Java'],
])
const titleCourseNames = new Map<Course, string>([
  ['web-dev', 'веб-разработке'], 
  ['drawing', 'цифровой живописи'], 
  ['scratch', 'Scratch'],
  ['java', 'Java'],
])
let contentKeys = new Map<Course, keyof Content>([['web-dev', 'webdevinfo'], ['drawing', 'drawinginfo'], ['scratch', 'scratchinfo'], ['java', 'javainfo']])

if (!courseNames.get(course)) showError({ statusCode: 404, message: 'Курс не найден' })

let { handleSubmit, handleReset } = useForm({
  initialValues: {
    fullname: '',
    phone: '',
    age: null,
    consent: false
  },
  validationSchema: {
    fullname(value: string) {
      if (!value) return 'заполните'
      if (value.length <= 3) return 'мало'
      if (value.length > 30) return 'много'
      return true
    },
    phone(value: string) {
      if (!value || value.replace(/\D/g, '').length < 11) return 'заполните'
      return true
    },
    age(value: number) {
      if (!value) return 'заполните'
      if (value < 5) return 'мало'
      if (value > 100) return 'много'
      return true
    },
    consent(value: boolean) {
      if (!value) return 'требуется согласие'
      return true
    },
  },
})

let fullname = useField<string>('fullname')
let age = useField<number>('age')
let phone = useField<string>('phone')
let consent = useField<boolean>('consent')

onMounted(() => usePhoneInput('phone-input', () => phone.value.value, (value: string) => phone.value.value = value))

let submited = ref(false)
let loading = ref(false)
let showSuccessPopup = ref(false)
let showErrorPopup = ref(false)

let submitForm = handleSubmit(async values => {
  loading.value = true
  showErrorPopup.value = false
  showSuccessPopup.value = false

  let body = {
    'Курс': courseNames.get(course as Course),
    'Имя': values.fullname,
    'Возраст': `${values.age} лет`,
    'Телефон': `<a href="tel:${values.phone.replaceAll(/\D/g, '')}">${values.phone}</a>`
  }
  try {
    let response = await fetch('https://api.formtomail.ru/send', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Новый ученик',
        body,
        apiKey: 'QOFyBYCZchPEfaD3'
      })
    })
    if (response.status === 200) {
      showSuccessPopup.value = true
      reset()    
    } else {
      showErrorPopup.value = true
    }
  } catch (error) {
    showErrorPopup.value = true
  }
  loading.value = false
})

function submit() {
  submited.value = true
  submitForm()
}

function reset() {
  submited.value = false
  handleReset()
}
</script>

<template>
  <v-container class="page-container">
    <BackButton />

    <BlockTitle>Курс по {{ titleCourseNames.get(course as Course) }}</BlockTitle>

    <v-row>
      <v-col cols="12" md="auto">
        <div class="card card-info" style="padding-top: 20px">
          <v-form @submit.prevent="submit" class="form">
            <v-text-field
              v-model="fullname.value.value"
              :error-messages="submited?fullname.errorMessage.value:undefined"
              label="Имя Фамилия"
              placeholder="Иван Иванов"
              variant="outlined"
              density="compact"
              autocomplete="name"
            />

            <v-number-input
              v-model="age.value.value"
              :error-messages="submited?age.errorMessage.value:undefined"
              :class="{'mt-3':submited&&!!fullname.errorMessage.value}"
              control-variant="hidden"
              label="Возраст, лет"
              placeholder="14"
              variant="outlined"
              density="compact"
              pattern="[0-9]*" 
              inputmode="numeric"
              autocomplete="off"
            />

            <v-text-field
              v-model="phone.value.value"
              :error-messages="submited?phone.errorMessage.value:undefined"
              :class="{'mt-3':submited&&!!age.errorMessage.value}"
              label="Телефон"
              variant="outlined"
              density="compact"
              placeholder="+7 (999) 999-99-99"
              id="phone-input"
              autocomplete="tel"
              type="tel"
            />

            <v-checkbox 
              v-model="consent.value.value"
              :error-messages="submited?consent.errorMessage.value:undefined"
              :class="{'mt-3':submited&&!!phone.errorMessage.value}"
              color="primary"
              density="comfortable"
            >
              <template v-slot:label>
                <div>Даю <a
                  href="/agreement"
                  style="text-decoration: none;"
                  target="_blank"
                  @click.stop
                >согласие на обработку персональных данных</a></div>
              </template>
            </v-checkbox>

            <v-btn 
              type="submit"
              :loading="loading"
              :class="{'w-100':true,'mt-3':submited&&!!consent.errorMessage.value,'bg-primary':true}" 
            >Записаться</v-btn>
          </v-form>
        </div>
      </v-col>

      <v-col cols="12" md="auto">
        <ClientOnly>
          <div v-html="content[contentKeys.get(course)!]" />
        </ClientOnly>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="showSuccessPopup" max-width="450">
    <template v-slot:default="{ isActive }">
      <div class="d-flex flex-column justify-center align-center" style="margin-top: -30px;">
        <v-icon size="70" color="white" class="bg-green" :icon="mdiCheck" style="margin-bottom: -30px; z-index: 999; padding: 10px; border-radius: 999px;"></v-icon>
        
        <v-card class="status-card rounded-lg" style="padding: 10px 24px;">
          <div class="mt-6 text-center">
            <span style="font-weight: 500; font-size: 24px;">Вы записаны</span><br/>
            <span style="font-weight: 400; font-size: 15px;">Скоро мы вам позвоним</span>
          </div>
  
          <v-btn @click="isActive.value = false" class="bg-grey-lighten-3 mt-5">Закрыть</v-btn>
        </v-card>
      </div>
    </template>
  </v-dialog>

  <v-dialog v-model="showErrorPopup">
    <template v-slot:default="{ isActive }">
      <div class="d-flex flex-column justify-center align-center" style="margin-top: -30px;">
        <v-icon size="70" color="white" class="bg-red" :icon="mdiClose" style="margin-bottom: -30px; z-index: 999; padding: 10px; border-radius: 999px;"></v-icon>
        
        <v-card class="status-card" style="padding: 14px; border-radius: 16px;">
          <div class="mt-5 text-center">
            <span style="font-weight: 500; font-size: 24px;">Ошибка</span><br/>
            <span style="font-weight: 400; font-size: 15px;">Не удалось отправить форму</span>
          </div>
  
          <div class="d-flex mt-5 flex-wrap flex-row align-center justify-center" style="gap: 5px;">
            <v-btn @click="submit()" :prepend-icon="mdiReload" class="bg-grey-lighten-3">Повторить</v-btn>
            <v-btn @click="isActive.value = false" class="bg-grey-lighten-3">Закрыть</v-btn>
          </div>
        </v-card>
      </div>
    </template>
  </v-dialog>
</template>

<style lang="scss" scoped>
.card {
  max-width: 365px;

  @media screen and (width >= 960px) {
    & {
      min-width: 365px;
    }
  }
}

.status-card {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.form > * {
  transition: all .15s;
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
</style>