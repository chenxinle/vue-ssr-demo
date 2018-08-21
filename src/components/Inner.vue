<template>
  <div id="inner">
    <div>{{inner}}</div>
    <div @click="update">{{storeInner}}</div>
    <div @click="update">{{user}}</div>
  </div>
</template>
<style>

</style>

<script>
  import InnerStore from '../store/modules/inner'
  import homeApi from '../api/home'

  export default {
    asyncData ({ store, route }) {
      // 触发 action 后，会返回 Promise
      if (store) {
        store.registerModule('inner', InnerStore)
        return store.dispatch('inner/getUser3')
      } else {
        return homeApi.getUserById(3).then((res) => {
          return {
            staticUser: res.data,
            user1: res.data
          }
        })
      }
    },
    methods: {
      update() {
        this.$store.commit('changeInner', 'update inner')
      }
    },
    data() {
      return {
        inner: 'inner component',
        staticUser: '',
        user1: ''
      }
    },
    computed: {
      storeInner() {
        return this.$store && this.$store.state.storeInner
      },
      user() {
        if (this.$store) {
          let inner = this.$store.state.inner
          return inner && inner.user3 && inner.user3.title
        } else {
          return this.staticUser.title
        }
      }
    }
  }
</script>
