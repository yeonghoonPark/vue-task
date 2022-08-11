import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/desk",
    name: "DeskView",
    component: () =>
      import(
        /* webpackChunkName: "table", webpackPrefetch: true */ "../views/DeskView.vue"
      ),
  },
  {
    path: "/desk2",
    name: "DeskView2",
    component: () =>
      import(
        /* webpackChunkName: "table", webpackPrefetch: true */ "../views/DeskView2.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
