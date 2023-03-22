<template>
  <a class="langs-select font-quick" @click="setLocals(locale === 'zh_CN' ? 'en' : 'zh_CN')">
    {{ t(`layout.topMenu.lang`) }}
  </a>
</template>

<script setup>
const { t, locale } = useI18n();
const { local } = useLocalStorage();

const getLocals = () => local.get("lang") || locale.value;

const currentLocale = ref("");

const setLocals = (lang = "") => {
  locale.value = lang;
  local.set("lang", lang);
  emitter.emit("lang-change", locale.value);
};

onMounted(() => {
  nextTick(() => {
    currentLocale.value = getLocals();
    if (!local.get("lang")) {
      setLocals(currentLocale.value);
    } else {
      if (currentLocale.value !== locale.value) {
        setLocals(currentLocale.value);
      }
    }
  });
});
</script>

<script>
import emitter from "@/model/mitt";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { useLocalStorage } from "../../../use/storage.js";
import { nextTick, onMounted } from "vue";
export default { name: "langs-select" };
</script>
