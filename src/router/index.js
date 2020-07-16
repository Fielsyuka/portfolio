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
    name: 'About me',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/works',
    component: () => import(/* webpackChunkName: "Works" */ '../views/Works.vue'),
    children: [
      {
        path: '',
        name: 'Works',
        component: () => import(/* webpackChunkName: "HtmlAndCss" */ '../views/WorksTop.vue')
      },
      {
        path: 'html-and-css',
        name: 'HTML & CSS',
        component: () => import(/* webpackChunkName: "HtmlAndCss" */ '../views/HtmlAndCss.vue')
      },
      {
        path: 'javascript',
        name: 'Javascript',
        component: () => import(/* webpackChunkName: "HtmlAndCss" */ '../views/Javascript.vue')
      },
      {
        path: 'vue',
        name: 'Vue',
        component: () => import(/* webpackChunkName: "HtmlAndCss" */ '../views/Vue.vue')
      },
      {
        path: 'wordpress',
        name: 'Wordpress',
        component: () => import(/* webpackChunkName: "HtmlAndCss" */ '../views/Wordpress.vue')
      },
      {
        path: 'react',
        name: 'React',
        component: () => import(/* webpackChunkName: "HtmlAndCss" */ '../views/React.vue')
      },    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
