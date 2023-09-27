<script setup name="HomeView">
// @ts-ignore
import requet from "@/utils";
import { useRouter } from "vue-router";
// @ts-ignore
import MenuLsit from "@/components/menuList.vue";
// @ts-ignore
const router = useRouter();
try {
  // @ts-ignore
  // const res = await requet({ url: "/index/recommend.json" });
  const res = await requet({ url: "/license/info" });
  console.log("相应结果", res);
} catch (error) {
  console.log(error);
}

function changePage(path) {
  router.push(path);
}
// @ts-ignore
</script>
<template>
  <div>
    <div>编程式导航</div>
    <MenuLsit :list="[{ name: 'About', path: '/about' }]" @changePage="changePage" />
  </div>
</template>
