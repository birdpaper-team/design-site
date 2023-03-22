import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./router/index";
import pinia from "@/store/store";

import packages from "@/components/index";
import "@/components/style/index.less";

// import i18n from "@/locales/I18n";
import VueWechatTitle from "vue-wechat-title";

export function createMainApp() {
  const app = createApp(App);

  app.use(router).use(packages).use(VueWechatTitle).use(pinia);
  return { app, router };
}
