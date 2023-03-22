<template>
  <div class="the-carousel">
    <div class="carousel-content">
      <swiper
        ref="mySwiper"
        class="content-box"
        :modules="[EffectFade, Autoplay, Mousewheel]"
        :autoplay="(swiper_options.autoplay as any)"
        :mousewheel="(swiper_options.mousewheel as any)"
        effect="fade"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(v, k) in list" :key="`item-${k}`">
          <img class="hot-image" :src="v.src" />
        </swiper-slide>

        <!-- 翻页箭头 -->
        <div class="arrow-box" v-if="list.length > 1">
          <div class="arrow-item left" @click="onArrowClick('prev')">
            <i class="ri-arrow-left-s-line"></i>
          </div>
          <div class="arrow-item right" @click="onArrowClick('next')">
            <i class="ri-arrow-right-s-line"></i>
          </div>
        </div>

        <!-- 指示器 -->
        <div class="indicator-box" v-if="list.length > 1">
          <div
            v-for="(v, k) in list"
            :class="['indicator-item', { active: k === currentPage }]"
            @mouseenter="setPage(k)"
          >
            <span></span>
          </div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { CarouselItem } from "@/entry/common";
import { EffectFade, Autoplay, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";

interface Prop {
  list: CarouselItem[];
}
const props = withDefaults(defineProps<Prop>(), {
  list: () => [],
});

let mySwiper = ref(null);
const onSwiper = (swiper: any) => {
  mySwiper.value = swiper;
};

const onSlideChange = (v: any) => {
  currentPage.value = v.activeIndex;
};

let swiper_options = reactive({
  mousewheel: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 4000,
  },
});

const currentPage = ref(0);

const onArrowClick = (type: "next" | "prev") => {
  let num = currentPage.value;
  // 上翻滚动
  if (num === 0 && type === "prev") {
    return setPage(props.list.length - 1);
  }
  // 下翻滚动
  if (num === props.list.length - 1 && type === "next") {
    return setPage(0);
  }
  // 上下翻页
  type === "prev" ? num-- : num++;
  setPage(num);
};

const setPage = (page: number) => {
  currentPage.value = page;
  mySwiper.value.slideTo(currentPage.value);
};
</script>

<script lang="ts">
export default { name: "the-carousel" };
</script>
