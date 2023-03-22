<template>
  <div class="basic-block">
    <div class="action-section">
      <div class="left">
        <h2>基于 Vue3 的基础组件库</h2>
      </div>
      <div class="right">
        <bp-button type="primary">快速上手</bp-button>
      </div>
    </div>

    <div class="explain-box">
      <bp-row class="explain-box">
        <bp-col :span="12" class="left">
          <p>
            这是一段介绍文本介绍文本，这是一段介绍文本介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一段介绍文本介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一段介绍文本，这是一段介绍文本介绍文本这是一段介绍文本介绍文本，这是一
          </p>
          <a class="detail-link">查看详情</a>
        </bp-col>
        <bp-col :span="12" class="right">
          <bp-image :src="code" class="code-pic"></bp-image>
        </bp-col>
      </bp-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import code from "@/assets/code_light_clip.png";
</script>
