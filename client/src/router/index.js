import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Users/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Users',
      name: 'Users',
      component: UserIndex
    }
  ]
})
