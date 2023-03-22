import { MenuItem } from "@/entry/pages/component";

/*
 * @Author: Sam
 * @Date: 2023-02-13 17:04:27
 * @Last Modified by: Sam
 * @Last Modified time: 2023-02-15 14:45:14
 */

const componentMenuList: MenuItem[] = [
  {
    title: "更新日志",
    type: "main",
    path: "log",
    resoure: "",
  },
  {
    title: "开发指南",
    type: "title",
    children: [
      {
        title: "安装",
        type: "main",
        path: "install",
        resoure: "",
      },
      {
        title: "快速上手",
        type: "main",
        path: "easystart",
        resoure: "",
      },
    ],
  },
  {
    title: "设计",
    type: "title",
    children: [
      {
        title: "颜色 Color",
        type: "main",
        path: "color",
        resoure: "",
      },
      {
        title: "图标 Icon",
        type: "main",
        path: "icon",
        resoure: "",
      },
    ],
  },
  {
    title: "基础",
    type: "title",
    children: [
      {
        title: "布局 Layout",
        type: "main",
        path: "layout",
        resoure: "",
      },
      {
        title: "间距 Space",
        type: "main",
        path: "space",
        resoure: "space",
      },
      {
        title: "按钮 Button",
        type: "main",
        path: "button",
        resoure: "packages/bp-button/template",
      },
    ],
  },
];

export default componentMenuList;
