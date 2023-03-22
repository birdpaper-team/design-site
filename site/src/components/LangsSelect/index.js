/*
 * @Author: Sam
 * @Date: 2021-07-02 08:45:50
 * @Last Modified by:   Sam
 * @Last Modified time: 2021-07-02 08:45:50
 */

import LangsSelect from './src/LangsSelect.vue';

LangsSelect.install = function (Vue) {

    Vue.component(LangsSelect.name, LangsSelect);

}

export default LangsSelect;