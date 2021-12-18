<template>
  <section class="container-fluid">
    Instafeed
    <div class="row">
      <div v-for="(image, index) in images" :key="index" class="col">
        <img class="img-thumbnail" :src="image.url" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'InstaFeed',
    data: () => ({
      images: [],
    }),
    async fetch() {
      const res = await this.$axios.$get('/api/instafeed/get')
      this.images = res.images
    },
  }
</script>

<style scoped></style>
