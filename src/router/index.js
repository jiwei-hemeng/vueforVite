// @ts-nocheck
import { createRouter, createWebHashHistory } from "vue-router";
import { useToken } from "@/stores/counter";
import pinia from "@/stores/store";
const store = useToken(pinia);
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/index.vue"),
      name: "Index",
      children: [
        { path: "/", redirect: "/home" },
        {
          path: "/home",
          name: "Home",
          component: () => import("@/views/HomeView.vue"),
          meta: { requiresAuth: false }
        },
        {
          path: "/KeyFrames",
          name: "KeyFrames",
          component: () => import("@/views/Key-frames.vue"),
          meta: { requiresAuth: true }
        },

        {
          path: "/about",
          name: "About",
          component: () => import("@/views/AboutView.vue"),
          meta: { requiresAuth: false }
        }
      ]
    },
    {
      path: "/authRouter",
      name: "AuthRoute",
      component: () => import("@/views/AuthRouter.vue"),
      meta: { requiresAuth: true, savedPosition: true }
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.meta.savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.token) {
    console.log("没有访问权限");
    alert("没有访问权限");
    return false;
  }
});

export default router;
