<template>
  <section>
    <hero-component />
    <center-link />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CenterLink from '~/components/index/CenterLink.vue'
  import HeroComponent from '~/components/index/HeroComponent.vue'

  export default Vue.extend({
    components: { HeroComponent, CenterLink },
    layout: 'default',
  })
</script>
