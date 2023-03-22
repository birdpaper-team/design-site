<template>
  <div class="app-layout-index">
    <top-menu></top-menu>
    <app-main></app-main>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script setup lang="ts">
import TopMenu from "./components/top-menu/index.vue";
import AppMain from "./components/app-main.vue";
import AppFooter from "./components/app-footer/index.vue";
</script>

<script lang="ts">
export default { name: "app-layout-index" };
</script>
