// @ts-nocheck
import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/index.vue"),
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
  const token = sessionStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    console.log("没有访问权限");
    alert("没有访问权限");
    return false;
  }
});

export default router;
