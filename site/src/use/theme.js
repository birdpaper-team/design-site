/**
 * @Author: Sam
 * @Date: 2021-11-03 15:01:26
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2021-11-03 15:01:26
 */

import { useLocalStorage } from "./storage.js"

// 主题控制相关
export const useTheme = () => {
  const { local } = useLocalStorage();

  const themeMode = {};

  /**
   * 设置主题模式
   * @param {string} theme 主题
   * @return {string} 主题
   */
  themeMode.set = (theme = "light") => {
    document.querySelector("html").setAttribute("class", `${theme}-mode`);
    local.set("theme", theme);
      return theme;
  }

  /**
   * 获取当前的主题模式，初始化为 light
   * @return {string} 主题
   */
  themeMode.get = () => {
    const currentTheme = local.get("theme");
    return currentTheme ? themeMode.set(currentTheme) : themeMode.set("light");
  }

  return {
    themeMode
  }
}