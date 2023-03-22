<template>
  <div class="home-index">
    <home-banner></home-banner>

    <hot-block></hot-block>

    <product-block></product-block>

    <!--
    <more-block></more-block> -->
  </div>
</template>

<script setup lang="ts">
import HomeBanner from "./components/home-banner.vue";
import HotBlock from "./components/hot-block.vue";
import ProductBlock from "./components/product-block/index.vue";
import MoreBlock from "./components/more-content-block.vue";
</script>
