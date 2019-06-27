import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import EditTablePage from '@/pages/EditTablePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'table',
      component: HomePage,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditTablePage,
    },
  ],
});
