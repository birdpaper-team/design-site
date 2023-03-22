<template>
  <li v-for="v in menuStore.menuList" class="top-menu-list-item" v-if="visible">
    <router-link custom :to="(v as  any)" v-slot="{ href, navigate, isExactActive }">
      <a
        :class="[
          'top-menu-list-item-link',
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

<script setup lang="ts">
import { useMenu } from "@/store/useMenu";
import { useI18n } from "vue-i18n";
import { RouteRecordName, useRoute } from "vue-router";

const route = useRoute();
const { t } = useI18n();
const menuStore = useMenu();

const props = defineProps<{
  visible: boolean;
}>();

const isActive = (name: RouteRecordName, isExactActive: boolean) => isExactActive || name === route.name;
</script>
