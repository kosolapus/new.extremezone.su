<template>
  <div class="map__content">
    <script
      type="text/javascript"
      charset="utf-8"
      async
      src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AN8BbEtWnE0f4MqP79NYSZYb_ObICoCUo&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"
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
