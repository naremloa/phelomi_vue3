import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
} from 'vue-router';
import Home from '@/views/home.vue';

// const pages = import.meta.glob('../views/*.vue');

// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\.\/views(.*)\.vue$/)[1].toLowerCase();
//   return {
//     path: name === '/home' ? '/' : name,
//     name: name.replace(/\//g, ''),
//     component: pages[path], // () => import('./pages/*.vue')
//   };
// });

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: () => import('@/views/room.vue'),
  },
  {
    path: '/news/:id',
    name: 'News',
    component: () => import('@/views/news.vue'),
  },
  {
    path: '/follow/:id',
    name: 'Follow',
    component: () => import('@/views/follow.vue'),
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('@/views/location.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      if (to.hash) {
        return new Promise((res) => {
          setTimeout(() => { res({ el: to.hash, behavior: 'smooth' }); }, 100);
        });
      }
      // 預設 始終滾動頂部
      return { top: 0 };
    },
  });
}
