// @ts-nocheck
import { createApp } from "vue";
// import { createPinia } from "pinia";
import pinia from "@/stores";
import App from "@/App.vue";
import router from "@/router";
import IndexDB from "@/utils/indexDB.js";
import "@/assets/main.css";
IndexDB.getIndexDB().then(() => {
  console.log("22244466666664")
  debugger;
  const app = createApp(App);
  app.use(pinia);
  app.use(router);
  app.mount("#app");
});
