<script setup>

</script>
<template>
    <!-- <div>
<div>vk</div>
<div>89068970429</div>
<div>Глазов, Калинина, 2а</div>
</div> -->
<div class="contacts">

    <a href="https://vk.com/qbitclub">
        <img src="../assets/images/vk.svg" alt="vk" height="56">
    </a>
    <a href="tel:89068970429">
        <span class="mdi mdi-phone large"></span>
        89068970429
    </a>
    <a href="https://yandex.ru/maps/-/CHhYn4kW">
        <span class="mdi mdi-map-marker-outline large"></span>
        <span class="text">Глазов, Калинина, 2а</span>
    </a>

</div>
</template>
<style scoped>
.contacts{
    display: flex;
    flex-wrap: nowrap;
    margin-top: 4px;
}
.large{
    font-size: 40px;
}
a{
    display: flex;
    align-items: center;
    color: #3E3E3E;
    text-decoration: none;
    margin-right: 16px;
    font-size: clamp(0.875rem, 0.8106rem + 0.2746vw, 1.25rem);
    line-height: clamp(0.875rem, 0.8106rem + 0.2746vw, 1.25rem);;
}
</style>