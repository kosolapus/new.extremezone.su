<template>
  <section class="container">
    <form v-if="!sent" class="row">
      <div class="mb-3 col-12 col-md-6">
        <input v-model="name" required class="form-control rounded-0" placeholder="Ваше имя" type="text" />
      </div>
      <div class="mb-3 col-12 col-md-6">
        <input v-model="contact" required class="form-control rounded-0" placeholder="Email или телефон" type="text" />
      </div>
      <div class="mb-3 col-12">
        <textarea v-model="message" required placeholder="Текст обращения" rows="5" class="form-control rounded-0" />
      </div>
      <div class="mb-4 col-12">
        <button
          type="button"
          class="btn btn-danger rounded-0 btn-block"
          :class="{ disabled: isDisabled || loading }"
          @click="sendmail"
        >
          Отправить
        </button>
      </div>
    </form>
    <h2 v-else class="text-center fs-5 text-success my-4">Спасибо за Вашу заявку!</h2>
  </section>
</template>

<script>
  export default {
    name: 'FormComponent',
    data: () => ({
      name: '',
      contact: '',
      message: '',
      iambot: true,
      sent: false,
      loading: false,
    }),
    computed: {
      isDisabled() {
        return this.iambot || !this.name || !this.contact || !this.message ? 'disabled' : null
      },
    },
    mounted() {
      setTimeout(() => {
        this.iambot = false
      }, 1000)
    },
    methods: {
      sendmail() {
        if (this.iambot || !this.name || !this.contact || !this.message) {
          return
        }
        this.loading = true
        this.$mail
          .send({
            subject: 'Заявка со страницы ' + this.$store.getters.title,
            text: `Имя: ${this.name} \r\nКонтактная информация: ${this.name} \r\nСообщение: ${this.message}`,
          })
          .then(() => {
            this.sent = true
          })
          .finally(() => {
            this.loading = false
          })
      },
    },
  }
</script>

<style scoped></style>
