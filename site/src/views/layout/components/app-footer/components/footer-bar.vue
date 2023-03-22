<template>
  <footer class="footer-bar">
    <div class="left">
      <div class="logo-box">
        <img class="footer-logo-pic" :src="logo" alt="">
      </div>
      <div class="copyright-info">
        <p class="copyright-info-inner">© Copyright 小纸鹤 2022  Designed & Developed by 木亦Sam</p>
      </div>
    </div>

    <div class="right">
      <p class="filling-no">粤ICP备17015354号</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from "@/assets/design-text-logo-light.svg"
</script>