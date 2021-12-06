<template>
  <section class="d-flex w-100 h-75 flex-grow-1 position-relative">
    <img class="w-100" src="~/assets/images/slider-bg-1.jpg" />
    <div class="position-absolute w-100 h-100 d-flex hero-container">
      <div class="container">
        <div class="row h-100">
          <div class="col offset-4 align-items-center d-flex justify-content-center">
            <h1 class="fw-bold">
              <span>Квадропрогулки</span>
              <br />
              в любое время года
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HeroComponent',
  }
</script>

<style scoped>
  .hero-container {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
