<template>
  <section class="container mb-4">
    <p>
      У нас в архивах более 1Tb фото с заездов. Здесь мы отобрали наиболее интересные. Хотите посмотреть больше?
      Приезжайте к нам или напишите!
    </p>
    <div class="container">
      <div v-for="(route, index) in routeLine" :key="index" class="row my-4 mx-0">
        <h2 v-if="route.photos" class="col-12">{{ route.h1 }}</h2>
        <div v-for="image in route.photos" :key="image" class="col-6 col-md-4 col-lg-3 mx-0 px-0">
          <img class="img" :src="`https://static.extremezone.su/thumbs/${image}`" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Gallery',
    layout: 'inner',

    async asyncData(ctx) {
      ctx.store.dispatch('setTitle', 'Галерея')
      const db = ctx.$fire.firestore
      const routesCollection = await db.collection('routes').get()
      const routeLine = routesCollection.docs.map((item) => item.data())
      return { routeLine }
    },
    data: () => ({
      routeLine: [],
    }),
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
