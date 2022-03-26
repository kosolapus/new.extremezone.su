<template>
  <section class="container-fluid mt-5">
    <h2 class="fs-2 fw-bold text-center mb-4">Особые предложения</h2>
    <div
      v-for="(item, index) of items"
      :key="index"
      :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      class="row special-price__item"
    >
      <div class="col-12 col-sm-10">
        <tech-item :inverted="index % 2 !== 0" :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
  import TechItem from '~/components/content/tech/TechItem'
  export default {
    name: 'SpecialPrices',
    components: { TechItem },
    data: () => ({
      items: [
        {
          id: '0',
          name: 'Защитная непромокаемая одежда',
          description: 'предоставляется за дополнительную плату: 450р - ветро/влагозащитный комбинезон, 200р - сапоги.',
        },
        {
          id: '1',
          name: 'Квадропрогулка по индивидуальной программе',
          description: 'Согласуем и проведем квадротур по маршруту, не указанному на сайте.',
        },
        {
          id: '2',
          name: 'Подарочный сертификат  ',
          description: 'на часовую квадропрогулку для 2 человек.  В наличии сертификаты на 1, 2 и 3 часа.',
        },
        {
          id: '3',
          name: 'Прокат зоны отдыха ',
          description: 'С беседкой(на 12-15 человек), мангалом, детской площадкой',
        },
        { id: '4', name: 'Фото и видео с квадропрогулки', description: 'Сделаем клип с наложением музыки' },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .special-price {
    &__item {
      margin-top: -40px;
    }
  }
</style>
