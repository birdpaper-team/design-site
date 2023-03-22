<template>
  <div
    :class="[
      'component-catalog-item',
      `${data.type}-item`,
      { 'has-children': data.children?.length },
      { 'is-active': isActive },
    ]"
    @click.stop="onClick(data)"
  >
    <!-- 主菜单 -->
    <template v-if="data.type === 'main'">
      <p :class="`${data.type}-text`" v-text="data.title"></p>
    </template>
    <!-- 菜单标题 -->
    <template v-if="data.type === 'title'">
      <p :class="`${data.type}-text`" v-text="data.title"></p>
    </template>

    <div class="component-catalog-item-children" v-if="data.children">
      <template v-for="v in data.children">
        <catalog-item :data="v" @click="onClick(v)"></catalog-item>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="component-catalog-item">
import { MenuItem } from "@/entry/pages/component";
import { computed, PropType } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  data: { type: Object as PropType<MenuItem>, default: () => null },
});

const emits = defineEmits<{
  (e: "click", data: MenuItem): void;
}>();

const isActive = computed<boolean>(() => {
  return route.params.doc && props.data.path === (route.params.doc as string);
});

const onClick = (data: MenuItem) => {
  if (data.type !== "main") {
    return;
  }
  emits("click", data);
};
</script>
