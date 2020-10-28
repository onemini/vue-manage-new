import Home from "@/views/Home.vue";
export default [
  {
    path: "/",
    alias: '/home_page',
    name: "Home",
    component: Home,
    props: route => ({
      food: route.query.food
    })
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login.vue')
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
];
