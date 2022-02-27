import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import MainPage from "../views/MainPage"
const routes = [
  {
    path: "/home",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/main",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/register",
    name: "RegisterView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName:register "" */ "../views/RegisteredView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
