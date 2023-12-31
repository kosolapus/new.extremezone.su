<template>
  <section id="ct-js-wrapper" class="ct-pageWrapper min-vh-100 d-flex flex-column">
    <header-navigation />
    <Nuxt />
    <footer-component />
  </section>
</template>

<script>
  import HeaderNavigation from '../components/ui/nav/HeaderNavigation'
  import FooterComponent from '~/components/ui/footer/FooterComponent'
  export default {
    name: 'Default',
    components: { FooterComponent, HeaderNavigation },
    head() {
      return {
        link: [
          {
            rel: 'canonical',
            href: 'https://extremezone.su' + this.$route.path,
          },
        ],
      }
    },
  }
</script>

<style scoped></style>
