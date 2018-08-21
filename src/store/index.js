// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      storeInner: 'storeInner'
    },
    mutations: {
      changeUser(state, title) {
        state.home.user.title = title
      },
      changeInner(state, inner) {
        state.storeInner = inner
      }
    }
  })
}
