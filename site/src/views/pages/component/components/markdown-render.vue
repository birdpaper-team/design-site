<template>
  <!-- <div class="markdown-render" v-html="content.html" v-highlight></div> -->
  <div class="markdown-render"></div>
</template>

<script setup lang="ts" name="markdown-render">
import { useMarkdown } from "@/use/useMarkdown";
import { shallowRef, ref, watch, nextTick } from "vue";

const props = defineProps({
  resoure: { type: String, default: "" },
});

const content = shallowRef({ html: "" });
const loading = ref(true);

const init = async () => {
  if (!props.resoure) return;

  try {
    content.value = { html: "" };
    content.value = await useMarkdown().getContent("_component", props.resoure);

    loading.value = false;
  } catch (err) {
    console.log("[ err ]-25", err);
    console.error("文档解析失败：" + (err as Error).message);
  }
};

watch(
  () => props.resoure,
  () => {
    nextTick(() => {
      init();
    });
  },
  { immediate: true }
);
</script>
