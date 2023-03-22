<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script lang="ts">
export default { name: "app-main" };
</script>
