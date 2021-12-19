<template>
  <section class="hero-wrapper">
    <section class="d-flex w-100 h-75 flex-grow-1 position-relative hero">
      <picture class="w-100 img" role="presentation" height="70vh">
        <source type="image/webp" srcset="~/assets/images/slider-bg-1.webp" />
        <source type="image/jpeg" srcset="~/assets/images/slider-bg-1.jpg" />
        <img class="w-100 img" src="~/assets/images/slider-bg-1.jpg" height="70vh" />
      </picture>
      <div class="position-absolute w-100 h-100 d-flex hero-container">
        <div class="container">
          <div class="row h-100">
            <div class="col offset-sm-4 align-items-start d-flex flex-column justify-content-center">
              <h1 class="fw-bold text-white">
                <span>Квадропрогулки</span>
                <br />
                в любое время года
              </h1>
              <div class="actions">
                <nuxt-link class="btn rounded-0 btn-lg btn-motive" to="/contact">Хочу участвовать!</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'HeroComponent',
  }
</script>

<style lang="scss" scoped>
  .hero-wrapper {
    background-color: $primary;
  }
  .hero {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 40% 100%, 0% 85%);
  }
  .hero-container {
    background: rgba(0, 0, 0, 0.25);
  }
  .img {
    height: calc(270 / 629 * 100vw);
    width: 100vw;
    box-sizing: border-box;
    min-height: 90vh;
    object-fit: cover;
  }
</style>
