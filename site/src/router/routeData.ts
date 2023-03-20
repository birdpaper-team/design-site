/**
 * @Author: Sam
 * @Date: 2022-05-22 09:32:57
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2022-05-22 09:32:57
 */

interface RouteItem {
  title: string;
  name: string;
  page?: string;
  alias?: string;
  path: string;
}

/**
 * 公共路由
 */
const commonPages: RouteItem[] = [];

/**
 * 应用路由
 */
const appPages: RouteItem[] = [
  { title: `主页`, name: "home", page: "index", path: "index" },
  { title: `设计`, name: "design", page: "index", path: "index" },
  { title: `发现`, name: "discover", page: "index", path: "index" },
  { title: `赞赏`, name: "donate", page: "index", path: "index" },
];

export { appPages, commonPages };
