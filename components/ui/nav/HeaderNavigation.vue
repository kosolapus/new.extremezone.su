<template>
  <section class="d-flex">
    <nav class="ct-menu flex-grow-1">
      <div class="navbar navbar-inverse py-0">
        <div class="container-fluid">
          <div class="navbar-header">
            <a href="index.html" class="navbar-brand">
              <img src="assets/images/content/page-logo.png" alt="Sporta Logo" class="logo-default" />
              <img src="assets/images/content/page-logo-2.png" alt="Sporta Logo" class="logo-inverse" />
            </a>
          </div>
          <ul class="navbar-nav mb-2 mb-lg-0 flex-row">
            <li
              v-for="(route, key) in routes"
              :key="key"
              role="presentation"
              :class="['nav-item', 'pr-2', { dropdown: !!route.children }]"
            >
              <a
                data-toggle="dropdown"
                href="index.html"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                :class="[
                  {
                    'dropdown-toggle': !!route.children,
                  },
                  'px-2 py-3',
                ]"
              >
                {{ route.title }}
              </a>
              <ul v-if="!!route.children" class="dropdown-menu position-absolute bg-transparent border-0">
                <li v-for="(child, index) in route.children" :key="index">
                  <a class="d-block" href="index.html">{{ child.title }}</a>
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
        { title: 'Главная' },
        {
          title: 'Маршруты',
          children: [
            {
              title: 'Маршрут 1',
            },
          ],
        },
        { title: 'Контакты' },
      ],
    }),
  }
</script>

<style scoped></style>
