<template>
  <section id="ct-js-wrapper" class="ct-pageWrapper min-vh-100">
    <header-navigation />
    <Nuxt />
  </section>
</template>

<script>
  import HeaderNavigation from '../components/ui/nav/HeaderNavigation'
  export default {
    name: 'Default',
    components: { HeaderNavigation },
  }
</script>

<style scoped></style>
