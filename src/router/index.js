// @ts-nocheck
import { createRouter, createWebHashHistory } from "vue-router";
import { useToken } from "@/stores/useInfo";
import pinia from "@/stores";
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
          meta: { requiresAuth: false, title: "首页" }
        },
        {
          path: "/KeyFrames",
          name: "KeyFrames",
          component: () => import("@/views/Key-frames.vue"),
          meta: { requiresAuth: true, title: "动画效果" }
        },

        {
          path: "/about",
          name: "About",
          component: () => import("@/views/AboutView.vue"),
          meta: { requiresAuth: false, title: "全局状态" }
        },
        {
          path: "/eventEmitter",
          name: "EventEmitter",
          component: () => import("@/views/EventEmitter/index.vue"),
          meta: { requiresAuth: false, title: "发布订阅者模式" }
        },
        {
          path: "/map",
          name: "百度地图",
          component: () => import("@/views/Map/index.vue"),
          meta: { requiresAuth: true, title: "百度地图" }
        },
      ]
    },
    {
      path: "/authRouter",
      name: "AuthRoute",
      component: () => import("@/views/AuthRouter.vue"),
      meta: { requiresAuth: true, savedPosition: true, title: "鉴权路由" }
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound404",
      component: () => import("@/views/NotFound404.vue"),
      meta: { requiresAuth: false, savedPosition: false, title: "404" }
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
  document.title = to.meta.title;
  if (to.meta.requiresAuth && !store.isLogin) {
    console.log("没有访问权限");
    // 去授权页面
    return { name: 'About' };
  }
});

export default router;
