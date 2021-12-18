<template>
  <section class="container">
    <form class="row">
      <div class="mb-3 col-12 col-md-6">
        <input class="form-control rounded-0" placeholder="Ваше имя" type="text" />
      </div>
      <div class="mb-3 col-12 col-md-6">
        <input class="form-control rounded-0" placeholder="Email или телефон" type="text" />
      </div>
      <div class="mb-3 col-12">
        <textarea placeholder="Текст обращения" rows="5" class="form-control rounded-0" />
      </div>
      <div class="mb-4 col-12">
        <button type="button" class="btn btn-danger rounded-0 btn-block">Отправить</button>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'FormComponent',
  }
</script>

<style scoped></style>
