<template>
  <div class="map__content">
    <script
      type="text/javascript"
      charset="utf-8"
      async
      src="https://yandex.ru/map-widget/v1/?um=constructor%3AN8BbEtWnE0f4MqP79NYSZYb_ObICoCUo&amp;source=constructor"
    ></script>
  </div>
</template>

<script>
  export default {
    name: 'MapComponent',
  }
</script>

<style scoped>
  .map__content {
    min-height: 450px;
  }
</style>
