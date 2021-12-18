<template>
  <section
    class="d-flex fixed-top transition"
    :class="{
      scrolled: isScrolled,
    }"
  >
    <nav class="ct-menu flex-grow-1">
      <div class="navbar navbar-inverse py-0">
        <div class="container-fluid">
          <div class="navbar-header">
            <nuxt-link to="/" class="navbar-brand">
              <img src="~/assets/images/page-logo.png" alt="eXtremezone Logo" class="logo-inverse" />
            </nuxt-link>
          </div>
          <ul class="navbar-nav mb-2 mb-lg-0 flex-row">
            <li
              v-for="(route, key) in routes"
              :key="key"
              role="presentation"
              :class="['nav-item', 'pr-2', { dropdown: !!route.children }]"
            >
              <component
                :is="route.to ? 'nuxt-link' : 'a'"
                :to="route.to"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                :class="[
                  {
                    'dropdown-toggle': !!route.children,
                  },
                  'px-2 py-3 text-white',
                ]"
              >
                {{ route.title }}
              </component>
              <ul v-if="!!route.children" class="dropdown-menu position-absolute bg-dark border-0 p-1">
                <li v-for="(child, index) in route.children" :key="index" class="w-100 text-white">
                  <nuxt-link class="w-100 d-block p-2" :to="child.to">{{ child.title }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
  export default {
    name: 'HeaderNavigation',
    data() {
      return {
        products: [],
        routes: [],
        isScrolled: false,
        flag: {
          scroll: false,
        },
      }
    },
    async fetch() {
      const response = await this.$axios.$get('/api/vk/get')
      this.routes = [{ title: 'Главная', to: '/' }, { title: 'Фотогалерея' }, { title: 'Контакты' }]
      if (response.count) {
        this.routes.splice(1, 0, {
          title: 'Маршруты',
          to: '/routes',
          children: response.items.map((item) => ({
            title: item.title,
            to: `/routes/${item.id}`,
          })),
        })
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
      handleScroll() {
        if (this.flag.scroll || process?.server) {
          return
        }
        this.flag.scroll = true
        setTimeout(() => {
          const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop
          this.isScrolled = scrollPos > 10
          this.flag.scroll = false
        }, 100)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .transition {
    transition: all 0.4s ease;
  }
  .scrolled {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .dropdown-menu {
    max-height: 700px;
    overflow-y: auto;
  }
</style>
