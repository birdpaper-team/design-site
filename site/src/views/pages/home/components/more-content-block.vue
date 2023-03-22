<!-- 首页-更多内容 -->
<template>
  <div class="more-content-block">
    <div class="more-content">
      <the-title>更多内容</the-title>

      <div class="content-box">
        <div class="more-item" v-for="v in 4">
          <div class="more-pic-inner">
            <img
              class="more-pic-image"
              src="https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/cover/3/%E7%94%BB%E6%9D%BF%201.png"
            />
          </div>
          <div class="more-info-inner">
            <h3 class="info-title">详解｜组件库可以替代 B 端设计师么？</h3>
            <p class="info-intro">这是一段描述文本这是一段描述文本这是一段描述文本</p>
          </div>
          <div class="more-info-footer">
            <p class="info-date">2022-01-22</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
