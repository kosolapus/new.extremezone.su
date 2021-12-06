<template>
  <section class="container-fluid">
    <h2 class="fs-2 fw-bold text-center mb-4">Популярные маршруты</h2>
    <div class="row mb-2">
      <tour-card v-for="i of 12" :key="i" class="col-lg-2 col-md-4 col-sm-3 col-xs-6 mb-4" />
    </div>
    <div class="d-flex my-2 text-center gap-2 justify-content-center">
      <nuxt-link class="ct-product-box__button ct-product-box__button--wide" to="/prices">Условия катания</nuxt-link>
      <nuxt-link class="ct-product-box__button ct-product-box__button--wide" to="/routes">Все маршруты</nuxt-link>
    </div>
  </section>
</template>

<script>
  import TourCard from '~/components/ui/tour/TourCard'
  export default {
    name: 'CatalogComponent',
    components: { TourCard },
  }
</script>

<style scoped></style>
