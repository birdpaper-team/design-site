<template>
  <bp-dropdown
    trigger="click"
    :options="MoreOptions[t(`layout.topMenu.mode`)]"
    @change="onMoreMenuClick"
    :option-arrow-left="80"
  >
    {{ t(`layout.topMenu.more`) }}
  </bp-dropdown>
</template>

<script setup lang="ts">
import { Langs } from "@/entry/common";
import { MoreOptionItem } from "@/entry/menu";
import { useMenu } from "@/store/useMenu";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const menuStore = useMenu();

const MoreOptions: Langs = {
  cn: menuStore.moreMenuList_Cn,
  en: menuStore.moreMenuList_En,
};

const onMoreMenuClick = (item: MoreOptionItem) => {
  return window.open(item.link);
};
</script>
