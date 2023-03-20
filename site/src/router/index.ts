// @ts-nocheck
/**
 * @Author: Sam
 * @Date: 2022-05-22 09:28:49
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-05-22 09:28:49
 */

import { createMemoryHistory, createRouter as _createRouter, createWebHashHistory } from "vue-router";
import { appPages, commonPages } from "./routeData";
import { cfg } from "@/config/index";
import Layout from "@/views/layout/index";

const routes = [{ path: "/", component: Layout, children: [] }];

/** 处理公共页面路由 */
for (let i = 0; i < commonPages.length; i++) {
  const { title, name } = commonPages[i];
  routes.push({
    name: `${name}`,
    path: `/${name}`,
    component: () => import(`../views/pages/common/${name}.vue`),
    meta: { title: `${title} - ${cfg.VITE_APP_TITLE}` },
  });
}

/** 处理 App 应用程序路由 */
let appRoutes = [];
for (let i = 0; i < appPages.length; i++) {
  const { title, name, page, path } = appPages[i];

  appRoutes.push({
    name: `${name}`,
    path: name === "home" ? "/" : `/${name}/${path}`,
    component: () => import(`../views/pages/${name}/${page}.vue`),
    meta: { title: `${title} - ${cfg.VITE_APP_TITLE}` },
  });
}
routes[0].children = appRoutes;

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHashHistory(),
    routes,
  });
}

const router = createRouter();

export { router };
