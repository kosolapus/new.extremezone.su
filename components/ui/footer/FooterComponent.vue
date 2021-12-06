<template>
  <section class="mt-auto mb-0">
    <!-- Footer-->
    <footer class="ct-footer">
      <div class="container">
        <div class="row">
          <!-- COLUMN-->
          <div class="col-md-3 col-sm-6">
            <img src="assets/images/content/page-logo.png" alt="Footer Logo" />
            <p class="ct-u-padding-both-20 ct-u-font-size--16">
              Прокат квадроциклов в Воронеже в eXtremeZone – это прогулки на квадроциклах (BRP, CFMOTO, STELS) в
              Воронеже. Не знаете чем заняться в будни или в выходные? Жаждите новых эмоций? Предлагаем увлекательные
              квадропрогулки по маршрутам различной сложности, зарядиться массой новых впечатлений, отличным
              настроением, полюбоваться природой и красивыми местами.
            </p>
            <ul class="ct-socials list-inline list-unstyled d-flex gap-2">
              <li class="ct-socials__item--facebook">
                <a href="https://www.facebook.com/createITpl"><fa name="fa-facebook" /></a>
              </li>
              <li class="ct-socials__item--twitter">
                <a href="https://twitter.com/createitpl"><i class="fa fa-twitter"></i></a>
              </li>
              <li class="ct-socials__item--instagram">
                <a href="#"><i class="fa fa-instagram"></i></a>
              </li>
              <li class="ct-socials__item--linkedin">
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <!-- COLUMN-->
          <div class="col-md-3 col-sm-6">
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
                <a href="tel:11234567890"><i class="fa fa-phone"></i></a>
              </div>
              <div class="media-body media-middle"><a href="tel:11234567890">+1 123 456 7890</a></div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="mailto:example@example.com"><i class="fa fa-envelope-o"></i></a>
              </div>
              <div class="media-body media-middle">
                <a href="mailto:example@example.com" class="ct-u-color--motive">example@example.com</a>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="www.example.com" target="_blank"><i class="fa fa-globe"></i></a>
              </div>
              <div class="media-body media-middle">
                <a href="www.example.com" target="_blank" class="ct-u-color--motive">www.example.com</a>
              </div>
            </div>
          </div>
          <!-- COLUMN-->
          <div class="col-md-3 col-sm-6">
            <div class="widget">
              <div class="widget-inner">
                <h4 class="widget-title">Quick Links</h4>
                <ul>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="shop.html">Shop</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- COLUMN-->
          <div class="col-md-3 col-sm-6">
            <div class="widget widget_news_letter">
              <div class="widget-inner">
                <h4 class="widget-title">Join newsletter</h4>
                <p>Join our newsletter to get info about latest events and deals!</p>
                <form
                  action="assets/form/send.php"
                  method="POST"
                  data-email-subject="Sporta Newsletter"
                  class="ct-js-validate ct-newsletter__form form-group"
                >
                  <input
                    id="widget_newsletter"
                    type="email"
                    placeholder="Email Address"
                    required="required"
                    name="field[]"
                    class="form-control"
                  />
                  <label for="widget_newsletter" class="sr-only">Email Address</label>
                  <button type="submit" class="btn btn-motive">Join Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="ct-footer-copyrights ct-u-background--white ct-u-scratches--top">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 text-center text-left-sm">
            <p class="ct-u-margin-bottom-0">
              &copy; {{ new Date().getFullYear() }} Shiftweb & eXtremeZone. Права защищены.
            </p>
          </div>
          <div class="col-sm-6 text-center text-right-sm">
            <ul class="list-inline d-flex gap-2 justify-content-end">
              <li><a href="#">Политика конфиденциальности</a></li>
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

<style scoped></style>
