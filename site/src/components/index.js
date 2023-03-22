/*
 * @Author: Sam
 * @Date: 2021-06-19 09:51:40
 * @Last Modified by: Sam
 * @Last Modified time: 2022-10-12 06:05:27
 */

// 导入组件
import AppLogo from './AppLogo'
import AppFooter from './AppFooter'
import LangsSelect from './LangsSelect'
import ThemeTrigger from './ThemeTrigger'
import TheTitle from './TheTitle'
import TheCarousel from './TheCarousel'

const components = [
  AppLogo,
  ThemeTrigger,
  TheTitle,
  AppFooter,
  LangsSelect,
  TheCarousel,
];

// install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {

  // 判断是否安装
  if (install.installed) {
    return;
  };

  // 遍历注册全局组件
  components.map(component => {
    Vue.component(component.name, component);
  });

}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // 具体的组件列表
  AppLogo,
  ThemeTrigger,
  LangsSelect,
  TheTitle,
  AppFooter,
  TheCarousel,
}