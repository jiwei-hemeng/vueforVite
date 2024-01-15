// @ts-nocheck
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
// 插件
import { visualizer } from "rollup-plugin-visualizer";
import importToCDN from "vite-plugin-cdn-import";
import VueDevTools from 'vite-plugin-vue-devtools'
export default ({ mode }) => {
  return {
    base: mode === "production" ? "./" : "./",
    plugins: [
      VueDevTools(),
      vue(),
      visualizer({ open: true }),
      importToCDN({
        modules: [
          {
            name: "vue",
            var: "Vue",
            path: "https://cdn.bootcdn.net/ajax/libs/vue/3.4.12/vue.global.min.js"
          },
          {
            name: "vue-demi",
            var: "VueDemi",
            path: "https://cdn.bootcdn.net/ajax/libs/vue-demi/0.14.6/index.iife.min.js"
          },
          {
            name: "vue-router",
            var: "VueRouter",
            path: "https://cdn.bootcdn.net/ajax/libs/vue-router/4.2.5/vue-router.global.min.js"
          },
          {
            name: "pinia",
            var: "Pinia",
            path: "https://cdn.bootcdn.net/ajax/libs/pinia/2.1.6/pinia.iife.min.js"
          },
          {
            name: "echarts",
            var: "echarts",
            path: "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js"
          },
        ]
      })
    ],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      }
    },
    server: {
      proxy: {
        "/api": {
          // target: "https://www.bilibili.com",
          target: "http://10.10.10.252:8002",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    }
  };
};
