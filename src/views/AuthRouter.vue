<template>
  <div class="auth">
    <div>鉴权路由</div>
  </div>
</template>
<script setup>
import { reactive, toRef } from "vue";
const state = reactive({
  foo: 1,
  bar: 2
});
// 双向 ref，会与源属性同步
const fooRef = toRef(state, "foo");
// 更改该 ref 会更新源属性
fooRef.value++;
console.log(state.foo); // 2
// 更改源属性也会更新该 ref
state.foo++;
console.log(fooRef.value); // 3
// const { foo } = toRefs(state);
// foo.value++;
// console.log("toRefs", foo.value); // 2
// foo.value++;
// console.log("reactiveState", state.foo); // 3
</script>
<style scoped>
.auth {
  height: 2000px;
}
</style>
