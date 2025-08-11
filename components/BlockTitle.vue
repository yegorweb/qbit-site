<script setup lang="ts">

</script>

<template>
  <div class="title"><slot /></div>
</template>

<style lang="scss" scoped>
.title{
  font-size: clamp(0.875rem, -0.375rem + 6.25vw, 1.1875rem);
    font-weight: 700;
}
</style>