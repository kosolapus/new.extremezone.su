<template>
  <section>
    <hero-component />
    <welcome-component />
    <center-link />
    <catalog-component />
    <special-prices />
    <park-component />
    <reviews />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CenterLink from '~/components/index/CenterLink.vue'
  import HeroComponent from '~/components/index/HeroComponent.vue'
  import WelcomeComponent from '~/components/index/WelcomeComponent.vue'
  import CatalogComponent from '~/components/index/CatalogComponent.vue'
  import ParkComponent from '~/components/index/ParkComponent.vue'
  import SpecialPrices from '~/components/index/SpecialPrices.vue'
  import Reviews from '~/components/index/Reviews.vue'

  export default Vue.extend({
    components: {
      Reviews,
      SpecialPrices,
      ParkComponent,
      CatalogComponent,
      WelcomeComponent,
      HeroComponent,
      CenterLink,
    },
    layout: 'default',
  })
</script>
