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
    meta: {
      title: "山葵組測驗-首頁",
      description: "這是首頁喔",
    },
  },
  {
    path: "/about",
    name: "about",
    component: RouterView,
    meta: {
      title: "山葵組測驗-切換頁面",
      description: "這是另外一頁喔",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router meta title產生
const DEFAULT_TITLE = "山葵組測驗";

router.afterEach((to) => {
  Vue.nextTick(() => {
    // 新增 title 若無採用預設
    document.title = to.meta.title || DEFAULT_TITLE;

    // 新增description 先搜尋是否已經存在desTag沒有則產生已經有則取代避免堆疊
    const desTag = document.querySelector(`head meta[name="description"]`);
    const desContent = to.meta.description;
    if (desTag) {
      desTag.content = desContent;
      return;
    }
    let meta = document.createElement("meta");
    meta.name = "description";
    meta.content = desContent;
    document.getElementsByTagName("head")[0].appendChild(meta);
  });
});

export default router;
