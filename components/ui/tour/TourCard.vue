<template>
  <div class="ct-product-box ct-product">
    <div class="ct-product-box__inner d-flex flex-column h-100">
      <div class="ct-product-box__pin ct-product-box__pin--sale">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,0 L 50,50 100,100 Z"></path>
        </svg>
        Новинка!
      </div>
      <div class="ct-product-box__image">
        <a href="shop.html">
          <img
            src="https://static.extremezone.su/web/brp_walk/i020.jpg"
            alt="Sporta Predator RX6"
            class="ct-product-box__img ct-product__img"
          />
        </a>
      </div>
      <div class="ct-product-box__heading">
        <a href="shop.html">
          <div class="ct-product-box__title ct-product__title">Белый колодец</div>
        </a>
        <div class="ct-product-box__price">
          <span class="ct-product-box__price--default ct-product__price">от 3000₽</span>
          <span class="ct-product-box__price--old">4600₽</span>
        </div>
      </div>
      <div class="ct-product-box__footer mt-auto mb-0 d-flex justify-content-center">
        <button class="ct-product-box__button ct-product-box__button--wide ct-product__add-to-cart">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TourCard',
  }
</script>

<style scoped></style>
