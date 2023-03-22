<template>
  <div class="the-tabs">
    <div
      :class="['tab-item', { active: k === currentTab }]"
      v-for="(v, k) in productStore.homeProductTabs"
      @click="onTabClick(v, k)"
    >
      <p class="main-title quick-font">{{ v.name }}</p>
      <p class="second-title">{{ v.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProduct } from "@/store/useProduct";

const productStore = useProduct();
const emits = defineEmits<{
  (e: "change", data: object);
}>();

const currentTab = ref<number>(0);

const onTabClick = (item: object, index: number) => {
  currentTab.value = index;
  emits("change", item);
};
</script>
