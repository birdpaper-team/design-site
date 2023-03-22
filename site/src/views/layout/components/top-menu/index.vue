<!-- 顶部导航菜单 -->
<template>
  <div class="top-menu">
    <div class="top-menu-container">
      <bp-row type="flex" justify="space-around" style="width: 100%">
        <bp-col span="4">
          <!-- 左侧 LOGO -->
          <app-logo></app-logo>
        </bp-col>
        <bp-col span="20">
          <ul class="menu-list">
            <!-- 路由导航 -->
            <menu-list :visible="menuStore.topMenuType !== 'sm'"></menu-list>

            <template v-if="menuStore.topMenuType === 'lg'">
              <!-- 「更多」选项 -->
              <li class="top-menu-list-item mini-padding">
                <more-list></more-list>
              </li>
              <!-- 版本切换 -->
              <li class="top-menu-list-item mini-padding">
                <bp-select v-model="version" size="mini" :option-list="menuStore.versionList"></bp-select>
              </li>
              <!-- 语言选择 -->
              <li class="top-menu-list-item mini-padding">
                <langs-select></langs-select>
              </li>
              <!-- 主题切换 -->
              <li class="top-menu-list-item mini-padding">
                <theme-trigger></theme-trigger>
              </li>
              <!-- 仓库地址 -->
              <li class="top-menu-list-item mini-padding">
                <a href="javascript:;" class="git-repo" @click="menuStore.onJumpToGit">
                  <i class="ri-github-fill"></i>
                </a>
              </li>
            </template>
            <!-- 折叠菜单开关 -->
            <drop-list :visible="menuStore.topMenuType !== 'lg'"></drop-list>
          </ul>
        </bp-col>
      </bp-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from "@/store/useMenu";
import { nextTick, onMounted, onUnmounted, ref } from "vue";
import MoreList from "./components/more-list.vue";
import MenuList from "./components/menu-list.vue";
import DropList from "./components/drop-list.vue";
import { throttle } from "lodash-es";

const menuStore = useMenu();

const version = ref("");

const init = () => {
  menuStore.topMenuType = menuStore.getMenuType();
};

onMounted(() => {
  nextTick(() => {
    init();
    // 监听页面宽度变化，动态调整菜单展示类型
    window.addEventListener(
      "resize",
      throttle(() => init(), 200),
      false
    );
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => init(), false);
});
</script>

<script lang="ts">
export default { name: "top-menu" };
</script>
