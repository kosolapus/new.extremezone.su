<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12">
        <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
        <h1 v-else>An error occurred</h1>
        <div class="ct-separator"></div>
        <p>Похоже, произошла ошибка. Давайте попробуем с главной?</p>
        <NuxtLink class="btn btn-motive" to="/">Вернуться</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'minimal',
    props: {
      error: {
        type: Object,
        required: true,
      },
    },
  }
</script>
