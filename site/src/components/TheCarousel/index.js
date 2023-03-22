/*
 * @Author: Sam
 * @Date: 2021-06-29 09:03:01
 * @Last Modified by: Sam
 * @Last Modified time: 2022-10-09 17:05:31
 */

import TheCarousel from './src/the-carousel.vue';

TheCarousel.install = function (Vue) {

    Vue.component(TheCarousel.name, TheCarousel);

}

export default TheCarousel;