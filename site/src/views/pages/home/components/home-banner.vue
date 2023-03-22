<template>
  <div class="home-banner">
    <div class="banner-content">
      <bp-image class="banner-logo" :src="logo_light"></bp-image>
      <div class="banner-text">
        <p>提供组件库和设计语言，打造独树一帜的前端解决方案</p>
      </div>
      <div class="banner-button">
        <bp-button type="primary">开始使用</bp-button>
        <bp-button>项目地址</bp-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo_light from "@/assets/design_logo_light.svg";
</script>
