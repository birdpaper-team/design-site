<template>
  <div class="product-block">
    <div class="product-content">
      <the-title>设计语言&周边</the-title>

      <the-tabs @change="onChange"></the-tabs>

      <div class="intro-box">
        <component :is="blockObj[currentBlock]"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTabs from "./components/the-tabs.vue";
import DesignBlock from "./components/design-block.vue";
import BasicBlock from "./components/basic-block.vue";
import MoreBlock from "./components/more-block.vue";
import { ref } from "vue";

const currentBlock = ref<string>("Design");
const blockObj = {
  Design: DesignBlock,
  BirdpaperUI: BasicBlock,
  More: MoreBlock,
};

const onChange = (item: { name: string }) => {
  currentBlock.value = item.name;
};
</script>
