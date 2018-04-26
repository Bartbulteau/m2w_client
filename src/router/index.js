import Vue from 'vue'
import Router from 'vue-router'

import Menu from '@/components/Menu'
import Add from '@/components/Add'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/secret/admin',
      name: 'Admin',
      component: Admin
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
