<template>
  <header class="ct-page-header ct-u-scratches--bottom ct-u-scratches--inner ct-u-background--black">
    <div class="inner">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="fs-1 ct-page-header__title">{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'InnerHeader',
    computed: {
      ...mapGetters(['title']),
    },
  }
</script>

<style lang="scss" scoped>
  .ct-page-header {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.4) 100%),
      url(~/assets/images/header-bg-min.jpg);
  }
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    & > li {
      margin-right: 12px;
    }
  }

  .ct-page-header__title {
    width: auto;
  }
</style>
