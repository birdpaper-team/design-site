<template>
  <bp-row class="the-title">
    <bp-col span="24">
      <h2 :class="['font-quick',{ 'bold-title': bold }]">
        <slot></slot>
      </h2>
      <p class="sub-title" v-if="subTitle !== ''" v-html="subTitle"></p>
    </bp-col>
  </bp-row>
</template>

<script lang="ts">
export default {
  name: "the-title",
  props: {
    bold: { type: Boolean, default: false },
    subTitle: { type: String, default: "" },
  },
};
</script>
