/*
 * @Author: Sam
 * @Date: 2022-10-12 06:04:22
 * @Last Modified by: Sam
 * @Last Modified time: 2022-10-12 06:04:57
 */

import { defineStore } from "pinia";

export const useProduct = defineStore("product", {
  state: () => {
    return {
      homeProductTabs: [
        { title: "设计价值观", name: "Design" },
        { title: "基础组件库", name: "BirdpaperUI" },
        { title: "更多内容", name: "More" },
      ],
    };
  },
});
