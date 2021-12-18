<template>
  <section class="ct-u-scratches--dark ct-u-scratches--top bg-black">
    <section class="container mt-lg-4">
      <h2 class="fs-1 fw-bold text-left text-white mb-4">Популярные маршруты</h2>
      <div class="row mb-2">
        <tour-card
          v-for="product of products"
          :key="product.id"
          :product="product"
          class="col-xl-3 col-md-4 col-sm-6 col-12 mb-4 mx-auto"
        />
      </div>
      <div class="d-flex my-2 text-center gap-2 justify-content-center">
        <span
          class="btn rounded-0 btn-link p-0 text-decoration-none ct-product-box__button ct-product-box__button--wide"
          @click="showMore = !showMore"
        >
          Условия катания
        </span>
        <nuxt-link
          class="btn rounded-0 btn-link p-0 text-decoration-none ct-product-box__button ct-product-box__button--wide"
          to="/routes"
        >
          Все маршруты
        </nuxt-link>
      </div>
      <div v-if="showMore" class="text-white my-4">
        <h4>Условия катания</h4>
        <p class="small">
          Что входит в стоимость? Бензин, аренда шлема, перчатки, сопровождение инструктора (на отдельном квадроцикле).
          Сопровождение инструктора на отдельном квадроцикле во всех случаях – обязательное условие.
        </p>
        <p class="small">
          Для получения максимального удовольствия от прогулки мы используем исключительно мощные квадроциклы, способные
          развивать большую скорость. В связи с этим есть ограничение по возрасту - от трех лет, причем
          несовершеннолетние пассажиры могут кататься только в присутствии законных представителей (родителей или
          опекунов) и с их разрешения, а к управлению квадроциклом допускаются только совершеннолетние гости.
        </p>
        <p class="small">
          Для того, чтоб прогулка началась ровно в срок, мы убедительно просим приезжать на прогулку заблаговременно (на
          20 минут раньше) и иметь при себе паспорт, необходимый для подписания договора аренды квадроцикла.
        </p>
      </div>
    </section>
  </section>
</template>

<script>
  import TourCard from '~/components/ui/tour/TourCard'
  export default {
    name: 'CatalogComponent',
    components: { TourCard },
    data: () => ({
      products: [],
      showMore: false,
    }),
    async fetch() {
      const response = await this.$axios.$get('/api/vk/get')
      if (response.count) {
        this.products = response.items.splice(0, 12)
      }
    },
  }
</script>

<style scoped></style>
