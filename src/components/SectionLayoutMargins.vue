<script setup lang="ts">
import MarginsSections from "./MarginsSections.vue";
</script>

<template>
  <div class="relative overflow-x-clip bg-gray-800">
    <MarginsSections dir="TOP" />
    <MarginsSections dir="BOTTOM" />

    <div class="container mx-auto py-10 px-4">
      <slot />
    </div>
  </div>
</template>
