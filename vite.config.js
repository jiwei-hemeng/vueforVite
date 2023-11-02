// @ts-nocheck
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
// 插件
import { visualizer } from "rollup-plugin-visualizer";
import importToCDN from "vite-plugin-cdn-import";

export default ({ mode }) => {
  return {
    base: mode === "production" ? "/vueforVite/" : "./",
    plugins: [
      vue(),
      visualizer({ open: true }),
      importToCDN({
        modules: [
          {
            name: "vue",
            var: "Vue",
            path: "https://unpkg.com/vue@3.2.47/dist/vue.global.js"
          },
          {
            name: "vue-demi",
            var: "VueDemi",
            path: "https://unpkg.com/vue-demi@0.13.11/lib/index.iife.js"
          },
          {
            name: "vue-router",
            var: "VueRouter",
            path: "https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js"
          },
          {
            name: "pinia",
            var: "Pinia",
            path: "https://unpkg.com/pinia@2.0.34/dist/pinia.iife.js"
          }
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
