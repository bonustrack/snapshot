import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Space from '@/views/Space.vue';
import Proposals from '@/views/Proposals.vue';
import Proposal from '@/views/Proposal.vue';
import Create from '@/views/Create.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/:key/proposal/:id', name: 'proposal', component: Proposal },
  { path: '/:key/create', name: 'create', component: Create },
  { path: '/(~):key', name: 'space', component: Space },
  { path: '/:key', name: 'proposals', component: Proposals },
  { path: '/:key/:tab', name: 'proposals-tab', component: Proposals },
  { path: '/', name: 'home', component: Home },
  { path: '/*', name: 'error-404', beforeEnter: (to, from, next) => next('/') }
];

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
