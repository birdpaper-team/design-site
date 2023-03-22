<template>
  <div class="component-catalog">
    <template v-for="(v, k) in componentMenuList" :key="`component-${k}`">
      <catalog-item :data="v" @click="onCatalogClick"></catalog-item>
    </template>
  </div>
</template>

<script setup lang="ts" name="component-catalog">
import { MenuItem } from "@/entry/pages/component";
import { onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import componentMenuList from "../menu";
import catalogItem from "./catalog-item.vue";

const route = useRoute();
const router = useRouter();

const emits = defineEmits<{
  (e: "on-change", data: MenuItem): void;
}>();

const onCatalogClick = (data: MenuItem) => {
  data?.path && router.push(`/component/${data?.path}`);
  emits("on-change", data);
};

const init = () => {
  if (!(route.params.doc as string) && route.name === "component") {
    return onCatalogClick(componentMenuList[0]);
  }

  for (let i = 0; i < componentMenuList.length; i++) {
    if (componentMenuList[i].path === (route.params.doc as string)) {
      return emits("on-change", componentMenuList[i]);
    }
    if (componentMenuList[i].children) {
      for (let j = 0; j < componentMenuList[i].children.length; j++) {
        if (componentMenuList[i].children[j].path === (route.params.doc as string)) {
          return emits("on-change", componentMenuList[i].children[j]);
        }
      }
    }
  }
};

onMounted(() => {
  init();
});
</script>
