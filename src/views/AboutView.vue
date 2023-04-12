<script setup>
// @ts-ignore
import { useToken } from "@/stores/counter";
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useToken();
function setToken() {
  store.setToken(Date.now());
}
</script>
<template>
  <div class="about">
    <h1>AboutView 页</h1>
    <div>token:{{ store.token }}</div>
    <button @click="setToken">设置token</button>
  </div>
</template>
