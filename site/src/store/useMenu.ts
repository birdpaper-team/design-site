/*
 * @Author: Sam
 * @Date: 2022-09-23 21:38:53
 * @Last Modified by: Sam
 * @Last Modified time: 2023-02-14 20:10:34
 */

import { defineStore } from "pinia";
import { cfg } from "@/config";

export const useMenu = defineStore("menu", {
  state: () => {
    return {
      /** 顶部导航类型 */
      topMenuType: "lg",
      /** 当前版本号 */
      version: "1.0.9",
      /** 默认版本号 */
      defaultVersion: cfg.VITE_BIRDPAPER_UI_VERSION,
      /** 历史版本列表 */
      versionList: [],
      /** 导航菜单 */
      menuList: [{ name: "design" }, { name: "component" }, { name: "discover" }, { name: "donate" }],
      /** 更多菜单 */
      moreMenuList_Cn: [
        {
          label: "Gitee 项目地址",
          value: "gitee-repo",
          link: cfg.VITE_GITEE_REPO,
        },
        {
          label: "语雀文档",
          value: "yuque",
          link: "https://www.yuque.com/birdpaper.design",
        },
        {
          label: "Vue3 组件库开发实战",
          value: "practice",
          link: "https://juejin.cn/column/6961573445586911245",
        },
      ],
      moreMenuList_En: [
        {
          label: "Gitee Repositories",
          value: "gitee-repo",
          link: cfg.VITE_GITEE_REPO,
        },
        {
          label: "Yuque document",
          value: "yuque",
          link: "https://www.yuque.com/birdpaper.design",
        },
        {
          label: "Vue3 Development practice",
          value: "practice",
          link: "https://juejin.cn/column/6961573445586911245",
        },
      ],
    };
  },
  actions: {
    /** 根据屏幕宽度返回对应的菜单展示模式 */
    getMenuType() {
      const width = document.body.clientWidth;
      if (width > 960) return "lg";
      if (width <= 960 && width > 575) return "md";
      if (width <= 575) return "sm";
    },
    /** 项目地址跳转 */
    onJumpToGit: () => {
      window.location.href = "";
    },
  },
});
