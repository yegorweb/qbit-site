<script lang="ts" setup>
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Ошибка'
})

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <div>
      <div style="display: flex; margin-top: 20px; flex-direction: column; align-items: center;">
        <div style="font-size: 66px; font-weight: bold; line-height: 1;">
          {{ error?.statusCode }}
        </div>
    
        <div>{{ error?.message ?? 'Ошибка' }}</div>
    
        <a href="/" style="color: black; text-decoration: none; margin-top: 14px;">
          <v-btn 
            size="small"
            variant="tonal"
            style="padding: 0 10px;"
          >
            На главную
          </v-btn>
        </a>
      </div>
    </div>
  </div>
</template>