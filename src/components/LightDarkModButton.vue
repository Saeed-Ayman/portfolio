<script setup lang="ts">
import TagWithTooltip from "./TagWithTooltip.vue";
</script>
<template>
  <TagWithTooltip
    tag="button"
    class="regular-btn h-9 md:h-12"
    x-position="center"
    y-position="bottom"
  >
    <v-icon :name="false ? 'bi-moon-stars-fill' : 'bi-sun-fill'" />
    <template #tooltip>{{ false ? "dark" : "light" }}</template>
  </TagWithTooltip>
</template>
