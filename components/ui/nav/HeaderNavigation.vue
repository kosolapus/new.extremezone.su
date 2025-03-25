<template>
  <section
    class="d-flex fixed-top transition"
    :class="{
      scrolled: isScrolled,
      'mobile-open': flag.mobileOpen,
    }"
  >
    <nav class="flex-grow-1">
      <div class="navbar navbar-inverse py-0">
        <div class="container-fluid">
          <div class="navbar-header">
            <nuxt-link to="/" class="navbar-brand">
              <img src="~/assets/images/page-logo.png" alt="eXtremezone Logo" class="logo-inverse" />
            </nuxt-link>

            <div>
              <iframe
                src="https://yandex.ru/sprav/widget/rating-badge/202653998478?type=rating"
                width="150"
                height="50"
                frameborder="0"
                style="margin-top: 20px"
              ></iframe>
            </div>
          </div>
          <ul class="navbar-nav mb-2 mb-lg-0 flex-row d-none d-md-flex">
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
          <div
            v-if="!flag.mobileOpen"
            class="d-block d-md-none text-white ct-icon text-center"
            @click="flag.mobileOpen = true"
          >
            <fa class="close-icon" :icon="['fas', 'bars']" />
          </div>
        </div>
      </div>
    </nav>
    <!-- Mobile Menu //-->
    <div class="ct-menu-mobile">
      <div class="ct-mobile-toggle">
        <a class="ct-icon" @click="flag.mobileOpen = false">
          <fa :icon="['fas', 'times']" class="close-icon" />
        </a>
      </div>
      <div class="inner">
        <ul class="ct-menu-mobile__nav">
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
              class="px-2 py-3 text-white"
              @click="flag.mobileOpen = false"
            >
              {{ route.title }}
            </component>
          </li>
        </ul>
      </div>
    </div>
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
          mobileOpen: false,
        },
      }
    },
    async fetch() {
      const response = await this.$store.dispatch('routes/getRoutes', { $axios: this.$axios })
      this.routes = [
        { title: 'Главная', to: '/' },
        { title: 'Фотогалерея', to: '/gallery' },
        { title: 'Контакты', to: '/contact' },
      ]
      if (response.length) {
        this.routes.splice(1, 0, {
          title: 'Маршруты',
          to: '/routes',
          children: response.map((item) => ({
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
  .close-icon {
    width: 20px;
  }
  .ct-mobile-toggle {
    z-index: 2;
  }

  .navbar-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 24px;
  }

  .navbar-brand {
    padding-top: 10px;
  }
</style>
