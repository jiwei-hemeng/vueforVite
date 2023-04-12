// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutView.vue")
    },
    {
      path: "/KeyFrames",
      name: "KeyFrames",
      component: () => import("@/views/Key-frames.vue")
    }
  ]
});

export default router;
