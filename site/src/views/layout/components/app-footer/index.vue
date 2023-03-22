<!-- 通用底部栏 -->
<template>
  <div class="app-footer">
    <div class="footer-content">
      <div class="left">
        <div class="footer-menu-item">
          <h3 class="menu-name">资源</h3>
          <ul>
            <li class="footer-link">文字链接</li>
            <li class="footer-link">文字链接</li>
            <li class="footer-link">文字链接</li>
            <li class="footer-link">文字链接</li>
          </ul>
        </div>
        <div class="footer-menu-item">
          <h3 class="menu-name">社区</h3>
          <ul>
            <li class="footer-link">文字链接</li>
            <li class="footer-link">文字链接</li>
            <li class="footer-link">文字链接</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="qr-code-box">
          <img class="qr-code-inner" :src="qr" alt="" />

          <div class="qr-code-tip">
            <p class="qr-code-tip-inner">扫码关注「小纸鹤」公众号</p>
          </div>
        </div>
      </div>
    </div>

    <footer-bar></footer-bar>
  </div>
</template>

<script setup lang="ts">
import FooterBar from "./components/footer-bar.vue";
import qr from "@/assets/qr_code.png";
</script>
