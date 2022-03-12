import { createRouter, createWebHistory } from "vue-router";

import mainPage from "../views/mainPage"
import recomendView from "../views/recomendView"
import Login from "../components/Login";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    name: "mainPage",
    component: mainPage,
    children: [
      // {
      //   path: '/recomend',
      //   component: () => import("../views/recomendView"),
      // },
      {
        path: '/recomend',
        component: () => import("../views/recomendView"),
      },
      {
        path: '/detail',
        component: () => import("../views/dynamicDetail"),

      },
      {
        path: "/hotlist",
        name: "HotList",
        component: () => import("../views/hotList"),
      },
      {
        path: "/profile",
        component: () => import("../views/modifyProfile"),
      },
      {
        path: "/note",
        component: () => import("../views/userNote"),
      },
      {
        path: "/personal",
        component: () => import("../views/personalPage"),
      },
      {
        path: "/question",
        component: () => import("../views/Question"),
        children: [
          {
            path: '/myquestion',
            component: () => import("../views/question/Myquestion"),

          }, {
            path: '/myanswer',
            component: () => import("../views/question/Myanswer"),
          }
        ]
      },
      {
        path: '/publish',
        component: () => import("../views/publishView"),

      }
    ]
  },
  // {
  //   path: "/recomend",
  //   name: "recomendView",
  //   component: RecomendView,
  // },
  // {
  //   path: "/hotlist",
  //   name: "HotList",
  //   component: () => import("../views/HotList"),
  // },
  {
    path: "/lookfor",
    name: "lookFor",
    component: () => import("../views/recommend/lookFor"),
  },
  {
    path: "/setting",
    component: () => import("../views/settingView"),
  },
  {
    path: "/message",
    component: () => import("../views/messageView"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/Register"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
