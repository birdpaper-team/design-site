<template>
  <a href="javascript:;" @click="setCurrentThemeMode" class="app-theme-trigger">
    <transition name="mode-fade" mode="out-in">
      <i v-if="currentTheme === 'light'" key="light" class="ri-sun-line"></i>
      <i v-else key="dark" class="ri-moon-line"></i>
    </transition>
  </a>
</template>

<script>
import { computed, nextTick, onMounted, ref } from "vue";
import { useTheme } from "@/use/theme";
import emitter from "@/model/mitt";
export default {
  name: "theme-trigger",
  emits: ["change"],
  setup(props, { emit }) {
    const currentTheme = ref("");
    const { themeMode } = useTheme();
    currentTheme.value = themeMode.get();

    // 手动触发主题切换
    const setCurrentThemeMode = () => {
      const val = currentTheme.value === "light" ? "dark" : "light";
      const setThemeMode = themeMode.set(val);
      currentTheme.value = val;
      emitter.emit("theme-change", val);

      emit("change", setThemeMode);
    };

    // 按钮图标
    const themeIcon = computed(() => {
      return currentTheme.value === "light" ? "ri-sun-line" : "ri-moon-line";
    });

    // 监听系统主题变化
    let listeners = {
      dark: (mediaQueryList) => {
        if (mediaQueryList.matches) {
          const setThemeMode = themeMode.set("dark");
          emit("change", setThemeMode);
        }
      },
      light: (mediaQueryList) => {
        if (mediaQueryList.matches) {
          const setThemeMode = themeMode.set("light");
          emit("change", setThemeMode);
        }
      },
    };

    onMounted(() => {
      nextTick(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addListener(listeners.dark);
        window.matchMedia("(prefers-color-scheme: light)").addListener(listeners.light);
      });
    });

    return {
      themeIcon,
      currentTheme,
      setCurrentThemeMode,
    };
  },
};
</script>
