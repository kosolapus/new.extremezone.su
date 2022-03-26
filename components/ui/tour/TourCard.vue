<template>
  <div v-if="product" class="ct-product-box ct-product">
    <div class="ct-product-box__inner d-flex flex-column h-100 mx-auto">
      <div v-if="false" class="ct-product-box__pin ct-product-box__pin--sale">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,0 L 50,50 100,100 Z"></path>
        </svg>
        Новинка!
      </div>
      <div class="ct-product-box__image overflow-hidden">
        <nuxt-link :to="`/routes/${product.id}`">
          <img :src="product.thumb_photo" :alt="product.title" class="ct-product-box__img ct-product__img" />
        </nuxt-link>
      </div>
      <div class="ct-product-box__heading">
        <nuxt-link :to="`/routes/${product.id}`">
          <div class="ct-product-box__title ct-product__title" v-html="product.title" />
        </nuxt-link>
        <div class="ct-product-box__price">
          <span class="ct-product-box__price--default ct-product__price">от {{ product.price.amount / 100 }}₽</span>
        </div>
      </div>
      <div class="ct-product-box__footer mt-auto mb-0 d-flex justify-content-center">
        <nuxt-link
          :to="`/routes/${product.id}`"
          class="ct-product-box__button ct-product-box__button--wide ct-product__add-to-cart"
        >
          Подробнее
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TourCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  }
</script>
