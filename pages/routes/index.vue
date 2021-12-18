<template>
  <section class="container">
    <div class="row my-2">
      <div class="col-lg-3 col-12 mb-4">
        <p class="small">
          Любой маршрут можно изменить по Вашему желанию. Точные цены и свободные даты уточняйте по телефону
        </p>
      </div>
      <tour-card
        v-for="product of products"
        :key="product.id"
        :product="product"
        class="col-lg-3 col-md-4 col-12 mb-4"
      />
    </div>
  </section>
</template>

<script>
  import TourCard from '@/components/ui/tour/TourCard'
  export default {
    name: 'RoutesList',
    components: { TourCard },
    layout: 'inner',
    async asyncData(ctx) {
      const response = await ctx.$axios.$get('/api/vk/get')
      if (response.count) {
        ctx.store.dispatch('setTitle', 'Маршруты прогулок')
        return {
          products: response.items,
        }
      }
    },
    data: () => ({
      products: [],
    }),
    async fetch() {},
    head() {
      return {
        title: 'Маршруты прогулок',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description',
          },
        ],
      }
    },
  }
</script>

<style scoped></style>
