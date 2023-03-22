/*
 * @Author: Sam
 * @Date: 2021-06-19 09:51:04
 * @Last Modified by:   Sam
 * @Last Modified time: 2021-06-19 09:51:04
 */

import AppLogo from './src/AppLogo.vue';

AppLogo.install = function (Vue) {

    Vue.component(AppLogo.name, AppLogo);

}

export default AppLogo;