import { NuxtState } from '@nuxt/types/app'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const state = () => ({
  list: [],
})

export const mutations = {
  set(state: NuxtState, list: []) {
    state.list = list
  },
  reset(state: NuxtState) {
    state.list = []
  },
}

export const actions = {
  async fetchRoutes(ctx: any, { $axios }: { $axios: NuxtAxiosInstance }) {
    const response = await $axios.$get('/api/vk/get')
    if (response.count) {
      ctx.commit('set', response.items)
    }
  },

  async getRoutes(ctx: any, { $axios }: { $axios: NuxtAxiosInstance }) {
    if (!ctx?.state?.list?.length) {
      await ctx.dispatch('fetchRoutes', { $axios })
    }
    return ctx.state.list
  },
}
