/*
 * @Author: Sam
 * @Date: 2023-02-13 16:32:17
 * @Last Modified by: Sam
 * @Last Modified time: 2023-02-15 14:44:40
 */

export type MenuType = "main" | "group" | "title";

export interface MenuItem {
  /** 标题 */
  title: string;
  /** 菜单类型 */
  type: MenuType;
  /** 跳转路径 */
  path?: string;
  /** 文档资源路径（相对于 package） */
  resoure?: string;
  /** 子集 */
  children?: MenuItem[];
}
