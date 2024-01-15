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
            path: "https://unpkg.com/vue@3.4.12/dist/vue.global.js"
          },
          {
            name: "vue-demi",
            var: "VueDemi",
            path: "https://unpkg.com/vue-demi@0.14.6/lib/index.iife.js"
          },
          {
            name: "vue-router",
            var: "VueRouter",
            path: "https://unpkg.com/vue-router@4.2.5/dist/vue-router.global.js"
          },
          {
            name: "pinia",
            var: "Pinia",
            path: "https://unpkg.com/pinia@2.1.7/dist/pinia.iife.js"
          },
          {
            name: "echarts",
            var: "echarts",
            path: "https://unpkg.com/echarts@5.4.3/dist/echarts.js"
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
