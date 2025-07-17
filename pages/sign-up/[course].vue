<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { usePhoneInput } from '~/utils/phone-input'

let content = useContent()

const tabs = ['choise', 'info-web-dev', 'info-scratch', 'info-java', 'info-drawing', 'sign-up', 'error', 'success'] as const
type Tab = typeof tabs[number]
let tab = useState<Tab>('tab', () => 'choise')

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

if (!courseNames.get(course)) showError({ statusCode: 404, message: 'Курс не найден' })

let contentKeys = new Map<Course, keyof Content>([['web-dev', 'webdevinfo'], ['drawing', 'drawinginfo'], ['scratch', 'scratchinfo'], ['java', 'javainfo']])

let submited = ref(false)

let { handleSubmit } = useForm({
  initialValues: {
    fullname: '',
    phone: '',
    age: null,
    consent: false
  },
  validationSchema: {
    fullname(value: string) {
      if (!value || value.length <= 3) return 'мало'
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

let submit = handleSubmit(async values => {
  let body = {
    'Курс': courseNames.get(course as Course),
    'Имя': values.fullname,
    'Возраст': `${values.age} лет`,
    'Телефон': `<a href="tel:${values.phone.replaceAll(/\D/g, '')}">${values.phone}</a>`
  }
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
  let resjson = await response.json()
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" md="6" lg="4">
        <BlockTitle>Курс по {{ titleCourseNames.get(course as Course) }}</BlockTitle>

        <div class="card card-info" style="padding-top: 20px; margin-top: 10px;">
          <v-form @submit.prevent="submit">
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
              @click="submited = true"
              type="submit"
              :class="{'w-100':true,'mt-3':submited&&!!consent.errorMessage.value,'bg-primary':true}" 
            >Записаться</v-btn>
          </v-form>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="8">
        <BlockTitle>О курсе</BlockTitle>
        <ClientOnly>
          <div v-html="content[contentKeys.get(course)!]" />
        </ClientOnly>
      </v-col>
    </v-row>
  </v-container>
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

.window-item {
  padding: 27px;
}

.v-selection-control {
  align-items: flex-start !important;
}
</style>