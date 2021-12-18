<template>
  <section id="ct-js-wrapper" class="ct-pageWrapper min-vh-100 d-flex flex-column">
    <header-navigation />
    <inner-header class="mb-4" />
    <Nuxt />
    <footer-component />
  </section>
</template>

<script>
  import HeaderNavigation from '@/components/ui/nav/HeaderNavigation'
  import FooterComponent from '@/components/ui/footer/FooterComponent'
  import InnerHeader from '@/components/ui/nav/InnerHeader'
  export default {
    name: 'Inner',
    components: { InnerHeader, FooterComponent, HeaderNavigation },
  }
</script>
