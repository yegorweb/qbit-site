<script setup lang="ts">
let content = useContent()
</script>

<template>
  <ClientOnly>
    <div v-html="content.qbit" />
  </ClientOnly>
</template>

<style lang="scss" scoped>

</style>