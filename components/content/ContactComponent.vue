<template>
  <section class="container mt-5">
    <h2 class="fs-2 fw-bold text-center mb-4">Обратная связь</h2>
    <div class="row mb-4">
      <div class="col">
        <form-component />
      </div>
    </div>
  </section>
</template>

<script>
  import FormComponent from '~/components/content/FormComponent'
  export default {
    name: 'ContactComponent',
    components: { FormComponent },
  }
</script>

<style scoped></style>
