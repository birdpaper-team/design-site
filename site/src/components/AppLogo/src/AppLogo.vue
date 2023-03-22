<template>
  <div class="app-logo">
    <h1>
      <router-link to="/" class="font-quick">
        <img :src="logo" class="logo-img" />

        <transition name="mode-fade" mode="out-in">
          <img key="light" class="logo-text" v-if="theme === 'light'" :src="logoTextLight" />
          <img v-else key="dark" class="logo-text" :src="logoTextDark" />
        </transition>
      </router-link>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue";
import { useTheme } from "@/use/theme";
import emitter from "@/model/mitt";
import logoImg from "@/assets/icon.svg";
import logoTextLight from "@/assets/design-text-logo-light.svg";
import logoTextDark from "@/assets/design-text-logo-dark.svg";
const { themeMode } = useTheme();

const currentTheme = ref("");
const logo = ref(logoImg);

const theme = ref("");

onMounted(() => {
  nextTick(() => {
    currentTheme.value = themeMode.get();
    theme.value = themeMode.get();
    emitter.on("theme-change", (e) => {
      theme.value = e;
    });
  });
});
</script>

<script lang="ts">
export default { name: "app-logo" };
</script>
