import {home} from '../../api/'

export default {
  namespaced: true,
  state: () => ({
    user3: null
  }),
  actions: {
    getUser3({commit}) {
      /**
       * 这里一定要return，因为一个route的所有component的asyncData都resolve之后
       * 才会执行renderer.renderToString，所以async中dispatch执行的结果应该是一个
       * promise
       */
      let req = home.getUserById(3)
      req.then((user) => {
        commit('getUser3', user.data)
      }, (err) => {
        console.log('this is err' + err)
      })
      return req
    },
  },
  mutations: {
    getUser3(state, user) {
      state.user3 = user
    },
  }
}
