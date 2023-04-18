<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// @ts-nocheck
import requet from "@/utils";
import { useRouter } from "vue-router";
import MenuLsit from "@/components/menuList.vue";
const res = await requet({ url: "/index/recommend.json" });
console.log("相应结果", res);
const router = useRouter();
function changePage(path) {
  router.push(path);
}
</script>
<template>
  <div>
    <div>编程式导航</div>
    <MenuLsit :list="[{ name: 'About', path: '/about' }]" @changePage="changePage" />
  </div>
</template>
