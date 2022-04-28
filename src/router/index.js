import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomeView.vue";
import RouterView from "../views/RouterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: RouterView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
