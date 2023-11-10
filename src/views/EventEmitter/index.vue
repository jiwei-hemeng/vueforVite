<template>
  <div>
    <PageTop />
    <PageBotton />
  </div>
</template>
<script>
export default {
  name: "EventEmitter"
};
</script>
<script setup>
import PageTop from "./pageTop.vue";
import PageBotton from "./pagebotton.vue";
import IndexDB from "@/utils/indexDB.js";
const allData = await IndexDB.readAll();
const timeList = await IndexDB.getDataByIndex('moduleType', 'timeStarp');
console.log("all-data", allData)
console.log("timeList", timeList)
</script>
