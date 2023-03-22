<!-- 移动端下的下拉菜单组件 -->
<template>
  <div class="drop-menu">
    <transition name="option-slide">
      <div class="drop-menu-box" v-show="visibled && menuStore.topMenuType !== 'lg'">
        <div class="option-arrow"></div>

        <div class="drop-menu-container">
          <ul class="drop-menu-ul route-ul" v-if="menuStore.topMenuType === 'sm'">
            <!-- 菜单项 -->
            <template v-for="(v, k) in menuStore.menuList" :key="`drop-menu-${k}`">
              <li class="drop-menu-item route-item">
                <!-- 菜单路由 -->
                <router-link :to="(v as  any)" custom v-slot="{ href, navigate, isExactActive }">
                  <a
                    :class="[
                      'drop-menu-list-item-link',
                      {
                        'router-link-exact-active': isActive(v.name, isExactActive),
                      },
                    ]"
                    :href="href"
                    @click="navigate"
                  >
                    {{ t(`layout.topMenu.${v.name}`) }}
                  </a>
                </router-link>
              </li>
            </template>
          </ul>
          <ul class="drop-menu-ul">
            <!-- 「更多」选项 -->
            <template v-for="(item, index) in MoreOptions[t(`layout.topMenu.mode`)]" :key="`more-${index}`">
              <li class="drop-menu-item">
                <span class="drop-menu-list-item-link">{{ item.label }}</span>
              </li>
            </template>
            <!-- 操作按钮 -->
            <li class="drop-btn">
              <div class="drop-button lang-btn">
                <langs-select></langs-select>
              </div>
              <div class="drop-button theme-btn">
                <theme-trigger></theme-trigger>
              </div>
              <div class="drop-button" @click="menuStore.onJumpToGit">
                <i class="ri-github-fill"></i>
              </div>
            </li>
            <!-- 版本号 -->
            <li class="drop-menu-item drop-version font-quick">
              <span>{{ menuStore.version }}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  visibled: { type: Boolean, default: false },
});

const emit = defineEmits(["on-close", "on-theme-change"]);

const route = useRoute();
const { t } = useI18n();
const menuStore = useMenu();

const MoreOptions: Langs = {
  cn: menuStore.moreMenuList_Cn,
  en: menuStore.moreMenuList_En,
};

const isActive = (name: RouteRecordName, isExactActive: boolean) => isExactActive || name === route.name;
</script>

<script lang="ts">
import { Langs } from "@/entry/common";
import { useMenu } from "@/store/useMenu";
import { useI18n } from "vue-i18n";
import { RouteRecordName, useRoute } from "vue-router";
export default { name: "drop-menu" };
</script>
