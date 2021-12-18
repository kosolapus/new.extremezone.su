<template>
  <section class="d-flex flex-column">
    <hero-component />
    <welcome-component />
    <catalog-component />
    <park-component />
    <center-link class="d-none d-md-block" />
    <reviews />
    <special-prices />
    <contact-component />
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
  import ContactComponent from '~/components/content/ContactComponent.vue'

  export default Vue.extend({
    components: {
      ContactComponent,
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
