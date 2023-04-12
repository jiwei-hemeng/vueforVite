<script setup>
import { ref, nextTick } from "vue";
let isDevelop = ref(false);
let reftDom = ref(null);
let rightDom = ref(null);
function developChange() {
  if (isDevelop.value) {
    reftDom.value.style.display = "block";
    rightDom.value.classList.add("sideRightIn");
    nextTick(() => {
      reftDom.value.classList.add("sideLeftIn");
    });
  } else {
    reftDom.value.classList.add("sideLeftOut");
    rightDom.value.classList.add("sideRightOut");
  }
}
function leftAnimationend() {
  isDevelop.value = !isDevelop.value;
  reftDom.value.classList.remove("sideLeftOut");
  reftDom.value.classList.remove("sideLeftIn");

  if (isDevelop.value) {
    reftDom.value.style.display = "none";
  } else {
    reftDom.value.style.display = "block";
  }
}
function rightAnimationend() {
  rightDom.value.classList.remove("sideRightOut");
  rightDom.value.classList.remove("sideRightIn");
  if (isDevelop.value) {
    rightDom.value.style.width = "calc(100% - 20px)";
  } else {
    rightDom.value.style.width = "calc(100% - 470px)";
  }
}
</script>
<template>
  <div class="contain">
    <div class="left" ref="reftDom" @animationend="leftAnimationend">left</div>
    <div class="mid sidebar" @click="developChange">
      {{ isDevelop ? "⬆️点击展开⬆️" : "⬇️点击收起⬇️" }}
    </div>
    <div class="right" ref="rightDom" @animationend="rightAnimationend">right</div>
  </div>
</template>
<style scoped>
.contain {
  display: flex;
}
.left {
  width: 450px;
  background-color: aquamarine;
}
.mid {
  width: 20px;
  height: 600px;
}
.right {
  width: calc(100% - 470px);
  background-color: cadetblue;
}
.sidebar {
  text-align: center;
  writing-mode: vertical-lr;
  background-color: #eee;
}
.sideLeftOut {
  animation: sideLeftOut 0.5s;
}
.sideLeftIn {
  animation: sideLeftIn 0.5s;
}

.sideRightIn {
  animation: sideRight 0.7s ease;
}
.sideRightOut {
  animation: sideRight 0.7s reverse;
}
@keyframes sideLeftOut {
  0% {
    width: 450px;
  }
  100% {
    width: 0;
  }
}
@keyframes sideLeftIn {
  0% {
    width: 0;
  }
  100% {
    width: 450px;
  }
}
@keyframes sideRight {
  0% {
    width: calc(100% - 20px);
  }
  100% {
    width: calc(100% - 470px);
  }
}
</style>
