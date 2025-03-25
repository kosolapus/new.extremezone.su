<template>
  <section class="ct-u-scratches--dark ct-u-scratches--top bg-black">
    <div class="container mt-4">
      <h2 class="fs-2 fw-bold text-left mb-4 text-white">Отзывы о работе</h2>
      <div class="row mb-4 text-white">
        <div class="col-12 mb-4 small">
          Ежегодно мы катаем сотни любителей экстремального отдыха и просто физически не можем разместить все отзывы.
          Однако, если Вы хотите увидеть больше свежих оценок, Вы можете посетить наши странички в соцсетях
        </div>
        <div class="col-12 col-md-6">
          <iframe class="reviews__frame" src="https://yandex.ru/maps-reviews-widget/202653998478?comments"></iframe>
        </div>
        <div class="col-12 col-md-6">
          <img src="~/assets/images/google-reviews.png" alt="Отзывы гугл" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Reviews',
  }
</script>

<style lang="scss" scoped>
  .reviews__frame {
    width: 100%;
    height: 100%;
    min-height: 400px;
  }
</style>
