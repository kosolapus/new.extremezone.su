<template>
  <main class="ct-blank-page">
    <div class="inner">
      <Nuxt />
    </div>
  </main>
</template>

<script>
  export default {
    name: 'MinimalLayout',
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
