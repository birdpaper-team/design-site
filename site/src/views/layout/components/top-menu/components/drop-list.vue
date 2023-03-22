<!-- 平板、移动端下展示的下拉菜单入口 -->
<template>
  <div v-clickOutside="onClickOutside">
    <li class="top-menu-list-item mini-padding" v-if="visible">
      <a :class="['more-menu', { 'icon-active': showDropMenu }]" @click="onDropMenuClick">
        <i class="ri-menu-line"></i>
      </a>
    </li>

    <drop-menu  :visibled="showDropMenu" @on-close="showDropMenu = false"></drop-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DropMenu from "./drop-menu.vue";
import { vClickOutside } from "@/directives/clickOutside";

const props = defineProps<{
  visible: boolean;
}>();

const showDropMenu = ref(false);

const onDropMenuClick = () => {
  showDropMenu.value = !showDropMenu.value;
};

const onClickOutside = ()=>{
  showDropMenu.value && (showDropMenu.value = false);
}
</script>

<script lang="ts">
export default { name: "drop-list" };
</script>
