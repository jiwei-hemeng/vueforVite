<template>
  <canvas
    ref="canvas"
    :width="canvasWidth"
    :height="canvasHeight"
    @mousedown="startDrawing"
    @mousemove="draw"
    @mouseup="stopDrawing"
    @mouseleave="stopDrawing"
    @touchstart="startDrawing"
    @touchmove="draw"
    @touchend="stopDrawing"
  ></canvas>
  <div class="controls">
    <button @click="clearCanvas">清除</button>
    <button @click="saveCanvas">保存签名</button>
  </div>
</template>

<script setup>
import { ref, onMounted, defineOptions } from "vue";
import { fancyConsole } from "@/utils/fancy-console.js";
defineOptions({
  inheritAttrs: false,
  name: "ElectronicSignature"
});

const isDrawing = ref(false);
const ctx = ref(null);
const canvas = ref();
const canvasWidth = ref();
const canvasHeight = ref();
onMounted(() => {
  const { width, height } = canvas.value.getBoundingClientRect();
  canvasWidth.value = width;
  canvasHeight.value = height;
  ctx.value = canvas.value.getContext("2d");
  // 设置画笔粗细
  ctx.value.lineWidth = 2;
  ctx.value.lineCap = "round"; // 设置线条端点样式
  ctx.value.strokeStyle = "#000"; // 设置线条颜色
});
function startDrawing(event) {
  isDrawing.value = true;
  const { x, y } = getCanvasCoordinates(event);
  ctx.value.beginPath();
  ctx.value.moveTo(x, y);
}
function draw(event) {
  if (!isDrawing.value) return;
  const { x, y } = getCanvasCoordinates(event);
  ctx.value.lineTo(x, y);
  ctx.value.stroke();
}
function stopDrawing() {
  if (!isDrawing.value) return;
  isDrawing.value = false;
  ctx.value.closePath();
}
function clearCanvas() {
  ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
}
function saveCanvas() {
  fancyConsole.info("系统加载完毕，准备起飞~");
  fancyConsole.warn("内存占用超过80%，该清缓存了！");
  fancyConsole.error("服务器炸了！快跑啊！");
  return;
  // const dataURL = canvas.value.toDataURL("image/png");
  // const link = document.createElement("a");
  // link.href = dataURL;
  // link.download = "signature.png";
  // link.click();
}
function getCanvasCoordinates(event) {
  const rect = canvas.value.getBoundingClientRect();
  const isTouch = event.type.includes("touch");
  const clientX = isTouch ? event.touches[0].clientX : event.clientX;
  const clientY = isTouch ? event.touches[0].clientY : event.clientY;
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}
</script>

<style scoped>
canvas {
  width: 100%;
  border: 1px solid #000;
  cursor: crosshair;
}
.controls {
  margin-top: 10px;
}
button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
