import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Top',
    component: Index
  },
  {
    path: '/about-me',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/skills',
    component: () => import(/* webpackChunkName: "Skills" */ '../views/Skills.vue'),
    children: [
      { 
        path: '',
        redirect: 'html-and-css',
        name: 'Skills',
      },
      {
        path: ':slug',
        name: 'SkillsDetail',
        component: () => import(/* webpackChunkName: "SkillsDetail" */ '../views/SkillsDetail.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes,
  
})

export default router
