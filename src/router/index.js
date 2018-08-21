import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Sub from '@/components/Inner'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        // component: Home,
        component: () => import('@/components/Home' /* webpackChunkName: "pages/home" */).then(m => m.default || m),
        // children: [
        //   {
        //     path: 'sub',
        //     name: 'Sub',
        //     component: Sub
        //   }
        // ]
      },
      {
        path: '/next',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld' /* webpackChunkName: "pages/helloWorld" */).then((m) => {
          return m.default || m
        }),
        // component: HelloWorld
      }
    ]
  })
}
