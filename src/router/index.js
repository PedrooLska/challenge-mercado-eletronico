import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../App.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
