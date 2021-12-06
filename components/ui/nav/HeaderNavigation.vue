<template>
  <section class="d-flex bg-black">
    <nav class="ct-menu flex-grow-1">
      <div class="navbar navbar-inverse py-0">
        <div class="container-fluid">
          <div class="navbar-header">
            <nuxt-link to="/" class="navbar-brand">
              <img src="~/assets/images/page-logo.png" alt="Sporta Logo" class="logo-inverse" />
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
              <ul v-if="!!route.children" class="dropdown-menu position-absolute bg-transparent border-0">
                <li v-for="(child, index) in route.children" :key="index">
                  <nuxt-link :to="child.to">{{ child.title }}</nuxt-link>
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
    data: () => ({
      routes: [
        { title: 'Главная', to: '/' },
        {
          title: 'Маршруты',
          children: [
            {
              title: 'Маршрут 1',
              to: '/routes/slug1',
            },
          ],
        },
        { title: 'Фотогалерея' },
        { title: 'Контакты' },
      ],
    }),
  }
</script>

<style scoped></style>
