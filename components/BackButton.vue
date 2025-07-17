<script setup lang="ts">
import { mdiArrowLeft } from "@mdi/js";
import { useRouter } from "vue-router";

let router = useRouter()
</script>

<template>
  <div style="display: flex;">
    <div 
      @click="router.back()" 
      class="d-flex pt-1 pr-4 pb-1 cursor-pointer flex-row flex-nowrap align-center justify-start"
    >
      <v-icon :icon="mdiArrowLeft" />
      
      <div 
        class="text-body-4 ml-1"
        style="font-size: 17px; font-weight: 500;"
      >назад</div>
    </div>
  </div>
</template>