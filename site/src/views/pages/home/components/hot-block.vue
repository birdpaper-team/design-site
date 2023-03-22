<!-- 首页-推荐位 -->
<template>
  <div class="hot-block">
    <div class="hot-content">
      <the-title>推荐</the-title>

      <div class="carousel-area">
        <div class="left">
          <the-carousel :list="banner"></the-carousel>
        </div>
        <div class="right">
          <div class="second-item">
            <img class="second-image" src="https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/cover/3/%E7%94%BB%E6%9D%BF%201.png" alt="">
          </div>
          <div class="second-item">
            <img class="second-image" src="https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/cover/3/%E7%94%BB%E6%9D%BF%204.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const banner = [
  {
    src: "https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/cover/1/%E7%94%BB%E6%9D%BF%201.png",
    type: "banner",
  },
  {
    src: "https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/cover/1/%E7%94%BB%E6%9D%BF%204.png",
    type: "banner",
  },
  {
    src: "https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/cover/1/%E7%94%BB%E6%9D%BF%203.png",
    type: "banner",
  },
  {
    src: "https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/cover/1/%E7%94%BB%E6%9D%BF%204.png",
    type: "banner",
  },
];
</script>
