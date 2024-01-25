<template>
  <vue3-seamless-scroll :list="data.list" class="scroll" :step="0.5">
    <div class="item" v-for="(item, index) in data.list" :key="index">
      <span>{{ item.title }}</span>
      <span>{{ item.date }}</span>
    </div>
  </vue3-seamless-scroll>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll"
const data = reactive({
  list: [
    {
      title: "无缝滚动第一行无缝滚动第一行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第二行无缝滚动第二行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第三行无缝滚动第三行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第四行无缝滚动第四行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第五行无缝滚动第五行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第六行无缝滚动第六行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第七行无缝滚动第七行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第八行无缝滚动第八行",
      date: "2024-01-25",
    },
    {
      title: "无缝滚动第九行无缝滚动第九行",
      date: "2024-01-25",
    },
  ],
})
</script>

<style lang="less" scoped>
.scroll {
  height: 200px;
  width: 500px;
  margin: 100px auto;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>
