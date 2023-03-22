/*
 * @Author: Sam
 * @Date: 2022-09-23 21:26:21
 * @Last Modified by: Sam
 * @Last Modified time: 2022-09-23 21:37:25
 */

/** 顶部导航类型，lg-PC 尺寸下，md-介于 PC 和移动端之间，sm-移动端 */
export type TopMenuType = "lg" | "md" | "sm";

/** 顶部菜单 */
export interface MenuItem {
  name: string;
  query?: object;
  params?: object;
}

/** 更多选项 */
export interface MoreOptionItem {
  label: string;
  value: string;
  link?: string;
}
