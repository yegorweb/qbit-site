<script setup lang="ts">
let content = useContent()
</script>

<template>
  <v-skeleton-loader
    :loading="!(content && content.qbit)"
    type="list-item-two-line"
  >
    <ClientOnly>
      <div v-html="content.qbit" />
    </ClientOnly>
  </v-skeleton-loader>
</template>

<style lang="scss" scoped>

</style>