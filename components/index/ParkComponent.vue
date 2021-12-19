<template>
  <section class="container mt-5">
    <h2 class="fs-2 fw-bold text-center mb-4">Наша техника</h2>
    <div class="row mb-4">
      <div class="col">
        <tech-item v-for="item in techItems" :key="item.id" :inverted="item.id % 2 === 0" :item="item">
          <template #image>
            <picture>
              <source type="image/webp" :srcset="item.webp" />
              <source type="image/jpeg" :srcset="item.img" />
              <img :src="item.img" :alt="item.name" />
            </picture>
          </template>
        </tech-item>
      </div>
    </div>
  </section>
</template>

<script>
  import TechItem from '~/components/content/tech/TechItem'
  export default {
    name: 'ParkComponent',
    components: { TechItem },
    data: () => ({
      techItems: [
        {
          id: 1,
          name: 'BRP Outlander 400',
          description: `Квадроцикл BRP Outlander 400 является лидером по мощности среди представителей
            своего класса и предназначен для активных экстремальных поездок`,
          img: require('~/assets/images/tech/brp.png'),
          webp: require('~/assets/images/tech/brp.webp'),
        },
        {
          id: 2,
          name: 'CFMOTO 500A',
          description: `Квадроцикл CFMOTO 500A — это надежный вариант для активного отдыха, сочетающий в себе высокую
          мощность, превосходные ходовые качества и непревзойденную проходимость`,
          img: require('~/assets/images/tech/cf.png'),
          webp: require('~/assets/images/tech/cf.webp'),
        },
      ],
    }),
  }
</script>

<style scoped></style>
