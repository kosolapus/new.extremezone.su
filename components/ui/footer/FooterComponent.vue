<template>
  <section class="mt-auto mb-0">
    <!-- Footer-->
    <footer class="ct-footer">
      <div class="container">
        <div class="row">
          <!-- COLUMN-->
          <div class="col-sm-6">
            <p class="ct-u-padding-both-20 ct-u-font-size--16">
              Прокат квадроциклов в Воронеже в eXtremeZone – это прогулки на квадроциклах (BRP, CFMOTO, STELS) в
              Воронеже. Не знаете чем заняться в будни или в выходные? Жаждите новых эмоций? Предлагаем увлекательные
              квадропрогулки по маршрутам различной сложности, зарядиться массой новых впечатлений, отличным
              настроением, полюбоваться природой и красивыми местами.
            </p>
            <div class="d-flex gap-2">
              <a class="soc-item" target="_blank" href="https://vk.com/prokat_kvadrov_voronezh">
                <fa :icon="['fab', 'vk']" />
              </a>
              <a
                class="soc-item"
                target="_blank"
                href="https://www.youtube.com/channel/UC8MSXkuW8MZYUZt3tHL-x1Q/videos"
              >
                <fa :icon="['fab', 'youtube']" />
              </a>
              <a class="soc-item" target="_blank" href="https://t.me/eXtremeZone_voronezh">
                <fa :icon="['fab', 'telegram-plane']" />
              </a>
            </div>
          </div>
          <!-- COLUMN-->
          <div class="col-sm-6">
            <div class="widget">
              <h4 class="widget-title ct-u-padding-bottom-5">Контакты</h4>
            </div>
            <div class="media">
              <div class="media-left">
                <address-component />
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="tel:+7 (473) 232-17-62"><i class="fa fa-phone"></i></a>
              </div>
              <div class="media-body media-middle"><a href="tel:+7 (473) 232-17-62">+7 (473) 232-17-62</a></div>
              <div class="media-left">
                <a href="tel:+7 (910) 732-17-62"><i class="fa fa-phone"></i></a>
              </div>
              <div class="media-body media-middle"><a href="tel:+7 (910) 732-17-62">+7 (910) 732-17-62</a></div>
            </div>
            <div class="media">
              <div class="media-left">
                <nuxt-link to="/contact"><i class="fa fa-envelope-o"></i></nuxt-link>
              </div>
              <div class="media-body media-middle">
                <nuxt-link to="/contact" class="ct-u-color--motive">2321762@mail.ru</nuxt-link>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <nuxt-link to="/"><i class="fa fa-globe"></i></nuxt-link>
              </div>
              <div class="media-body media-middle">
                <nuxt-link to="/" class="ct-u-color--motive">extremezone.su</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="ct-footer-copyrights ct-u-background--white ct-u-scratches--top">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 text-center text-sm-start">
            <p class="ct-u-margin-bottom-0">
              &copy; {{ new Date().getFullYear() }} Shiftweb & eXtremeZone. Права защищены.
            </p>
          </div>
          <div class="col-sm-6 text-center text-sm-end">
            <ul class="list-inline">
              <li><nuxt-link to="/policy">Политика конфиденциальности</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AddressComponent from '~/components/content/AddressComponent'
  export default {
    name: 'FooterComponent',
    components: { AddressComponent },
  }
</script>

<style lang="scss" scoped>
  .soc-item {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: $primary;
    }
  }
</style>
