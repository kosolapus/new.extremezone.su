<template>
  <section>
    <div class="container mb-5">
      <div v-if="additionalPhotos" class="row mb-4">
        <div v-for="photo in additionalPhotos" :key="photo.url" class="col-6 col-md-4 m-0 p-0">
          <img class="w-100 h-100 thumb" :src="photo.thumb" :alt="routeData.title" @click="showModal(photo.url)" />
        </div>
      </div>
      <p class="small" v-html="parsedDescription" />
    </div>
    <div class="container mb-4"><h2>Оставьте свою заявку и мы с вами свяжемся</h2></div>
    <form-component />
    <!-- Modal -->
    <modal v-if="modalShown" :shown="modalShown" @close="modalShown = false">
      <img :src="fullImage" class="lightbox" alt="" width="1px" height="1px" />
    </modal>
  </section>
</template>

<script>
  import Modal from '@/components/ui/Modal'
  import FormComponent from '@/components/content/FormComponent'
  export default {
    name: 'RouteItem',
    components: { FormComponent, Modal },
    layout: 'inner',
    async asyncData({ $axios, route, redirect, store }) {
      const id = route.params.slug
      const response = await $axios.$get(`/api/vk/getById?ids=${id}`)
      if (!response?.count) {
        redirect('/404')
      }
      store.dispatch('setTitle', response.items[0].title)
      return {
        routeData: response.items[0],
      }
    },
    data: () => ({
      routeData: null,
      modalShown: false,
      fullImage: '',
    }),
    head() {
      return {
        title: this.$store.getters.title,
      }
    },
    computed: {
      parsedDescription() {
        if (!this.routeData?.description) {
          return ''
        }
        return this.routeData.description.replace(/[\r\n]/g, '<br />')
      },
      additionalPhotos() {
        if (!this.routeData?.photos) {
          return []
        }
        return this.routeData.photos.map((item) => {
          return {
            thumb: item.sizes?.find((photo) => photo.type === 'x')?.url,
            url: item.sizes?.find((photo) => photo.type === 'z')?.url,
          }
        })
      },
    },
    watch: {
      routeData: {
        handler(val) {
          if (val?.title) {
            this.$nuxt.$emit('change-title', this.routeData.title)
          }
        },
        deep: true,
        immediate: true,
      },
    },
    methods: {
      showModal(url) {
        this.fullImage = url
        this.modalShown = true
      },
    },
  }
</script>

<style lang="scss" scoped>
  .thumb {
    object-fit: cover;
    cursor: pointer;
  }

  .lightbox {
    max-height: 90vh;
    max-width: 90vw;
    width: 100%;
    height: 100%;
  }
</style>
