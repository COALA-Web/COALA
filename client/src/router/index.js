import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import MypageView from "../views/MyPageView.vue";
import UserLevelCheckView from "../views/UserLevelCheckView.vue";
import ProblemView from "../components/problemSolvingView.vue";
import ProblemView2 from "../components/problemSolvingView2.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "start",
    component: () =>
      import(/* webpackChunkName: "start" */ "../views/StartPageView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/main",
    name: "main",
    component: MainView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/levelcheck",
    name: "levelcheck",
    component: UserLevelCheckView
  },
  {
    path: "/mypage",
    name: "mypage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 여기서 import 했더니 라우팅시 에러나서 수정
    component: MypageView
  },
  {
    path: "/ps",
    name: "ps",
    component: ProblemView
  },
  {
    path: "/ps2",
    name: "ps2",
    component: ProblemView2
  },
  {
    path: "/start",
    name: "start",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "start" */ "../views/StartPageView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
