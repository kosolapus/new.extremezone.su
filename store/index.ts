import { NuxtState } from '@nuxt/types/app'
import { Commit } from 'vuex'

export const state = () => ({
  title: '',
})
export const mutations = {
  setTitle(state: NuxtState, title: string) {
    state.title = title
  },
}
export const actions = {
  setTitle({ commit }: { commit: Commit }, title: string) {
    commit('setTitle', title)
  },
}

export const getters = {
  title: (state: NuxtState) => state.title,
}
