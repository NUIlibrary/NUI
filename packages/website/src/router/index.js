import { createRouter, createWebHashHistory } from 'vue-router';
import docsRouteGenerator from './router.js';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import NotFound from '../views/NotFound/NotFound.vue';
import DocNotFound from '../views/NotFound/DocNotFound.vue';
import Docs from '../views/Docs.vue';

const languageList = ['zh-CN', 'en-US'];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    // Docs 重定向，与路由前置守卫配合，
    // 当 docs 路径前不指定语言时，将重定向到本地语言 docs 路径。
    // eg. '/docs/button' -> '/zh-CN/docs/button'
    path: '/docs',
    name: 'Docs'
  },
  {
    path: '/:pathMatch(.*)*',
    Name: '404',
    component: NotFound,
  },
];

/**
 * 文档多语言
 */
languageList.forEach((language) => {
  routes.push({
    path: `/${language}/docs`,
    name: `${language}/Docs`,
    component: Docs,
    redirect: `/${language}/docs/Introduction`,
    children: [
      ...docsRouteGenerator(language),
      {
        path: ':pathMatch(.*)*',
        component: DocNotFound,
      },
    ],
  });
});

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Docs') {
    const userLanguage =
      localStorage.getItem('NUI_LANGUAGE') ||
      window.navigator.language ||
      'zh-CN';
    next({ name: `${userLanguage}/Docs` });
  } else {
    next();
  }
});

export default router;
