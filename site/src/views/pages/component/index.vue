<template>
  <div class="component-index">
    <div class="document-block">
      <!-- 左侧目录 -->
      <div class="document-block-catalog">
        <catalog @on-change="init"></catalog>
      </div>
      <!-- 文档内容区域 -->
      <div class="document-block-content">
        <!-- <bp-radio type="danger">测试</bp-radio> -->
        <markdown-render :resoure="doc?.resoure"></markdown-render>
      </div>
      <!-- 文档大纲 -->
      <div class="document-block-outline"></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="component-index">
import { MenuItem } from "@/entry/pages/component";
import { ref } from "vue";
import catalog from "./components/catalog.vue";
import markdownRender from "./components/markdown-render.vue";

const doc = ref<MenuItem>();

const init = async (data: MenuItem) => {
  doc.value = data;
};
</script>
