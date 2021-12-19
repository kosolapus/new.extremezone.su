<template>
  <section>
    <div class="container">
      <h2 class="text-center">Телефоны</h2>

      <div class="row my-4">
        <div class="col-12 col-md">
          <h3 class="fs-5 text-center"><a href="tel:+7 (910) 732-17-62">+7 (910) 732-17-62</a></h3>
        </div>
        <div class="col-12 col-md">
          <h3 class="fs-5 text-center"><a href="tel:+7 (473) 232-17-62">+7 (473) 232-17-62</a></h3>
        </div>
      </div>
    </div>
    <h2 class="text-center">Написать нам</h2>
    <form-component />
    <h2 class="text-center">Мы на карте</h2>
    <map-component />
  </section>
</template>

<script>
  import FormComponent from '~/components/content/FormComponent'
  import MapComponent from '~/components/ui/MapComponent'
  export default {
    name: 'Contact',
    components: { MapComponent, FormComponent },
    layout: 'inner',
    asyncData(ctx) {
      ctx.store.dispatch('setTitle', 'Обратная связь')
    },
  }
</script>

<style scoped></style>
