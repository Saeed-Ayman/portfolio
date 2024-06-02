<template>
  <v-icon :name="iconName ?? 'fa-regular-file'" class="size-4" />

  <div class="text-sm text-white font-semibold">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps({
  iconName: String,
  title: String,
});
</script>
