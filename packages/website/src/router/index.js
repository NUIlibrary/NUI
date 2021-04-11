import { createRouter, createWebHashHistory } from 'vue-router'
import generateRutersByDir from './router.js'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Docs from '../views/Docs.vue'

let userLanguage = localStorage.getItem('NUI_LANGUAGE')
  || window.navigator.language
  || "zh-CN";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    children: generateRutersByDir(userLanguage)
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
