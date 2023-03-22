<template>
  <div class="design-block">
    <bp-row class="explain-box">
      <bp-col :span="12" class="left">
        <h2>设计价值观</h2>
        <p>
          这是一段介绍文本介绍文本，这是一段介绍文本介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一段介绍文本介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一段介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一
        </p>
        <a class="detail-link">查看详情</a>
      </bp-col>
      <bp-col :span="12" class="right">
        <bp-image :src="logo"></bp-image>
      </bp-col>
    </bp-row>

    <!-- <div class="value-box">
      <div class="value-item">
        <div class="letter-img">
          <bp-image :src="img_s"></bp-image>
        </div>
        <div class="value-info">
          <p class="title">Simple<span>简约</span></p>
          <p class="second-title">这是一段介绍文本介绍文本</p>
        </div>
      </div>
      <div class="value-item">
        <div class="letter-img">
          <bp-image :src="img_a"></bp-image>
        </div>
        <div class="value-info">
          <p class="title">Agree<span>一致</span></p>
          <p class="second-title">这是一段介绍文本介绍文本</p>
        </div>
      </div>
      <div class="value-item">
        <div class="letter-img">
          <bp-image :src="img_n"></bp-image>
        </div>
        <div class="value-info">
          <p class="title">Naturally<span>自然</span></p>
          <p class="second-title">这是一段介绍文本介绍文本</p>
        </div>
      </div>
      <div class="value-item">
        <div class="letter-img">
          <bp-image :src="img_g"></bp-image>
        </div>
        <div class="value-info">
          <p class="title">Grow<span>生长性</span></p>
          <p class="second-title">这是一段介绍文本介绍文本</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/design_logo_light_dash.svg";
import img_s from "@/assets/S.png";
import img_a from "@/assets/A.png";
import img_n from "@/assets/N.png";
import img_g from "@/assets/G.png";
</script>
