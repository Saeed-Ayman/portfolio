<script setup lang="ts">
import TagWithTooltip from "./TagWithTooltip.vue";
</script>

<template>
  <div class="relative w-1 bg-blue-300 rounded-full m-5">
    <div
      class="w-full h-1/3 bg-gradient-to-b from-blue-300 via-80% via-blue-400 to-95% to-blue-500 rounded-full"
    ></div>

    <TagWithTooltip
      tag="a"
      href="#Education"
      x-position="right"
      y-position="center"
      class="!absolute z-20 grid place-items-center w-10 h-10 rounded-xl border border-blue-500 text-blue-500 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-900 shadow"
    >
      <v-icon name="fa-graduation-cap" />
      <template #tooltip>Education</template>
    </TagWithTooltip>

    <TagWithTooltip
      tag="a"
      href="#Achievements"
      x-position="right"
      y-position="center"
      class="!absolute z-20 grid place-items-center w-10 h-10 rounded-xl border border-blue-400 text-blue-400 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-900 shadow-lg shadow-white/40"
    >
      <v-icon name="ri-tools-fill" />
      <template #tooltip>Achievements</template>
    </TagWithTooltip>

    <TagWithTooltip
      tag="a"
      href="#Skills"
      x-position="right"
      y-position="center"
      class="!absolute z-20 grid place-items-center w-10 h-10 rounded-xl border border-blue-300 text-blue-300 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-900 shadow"
    >
      <v-icon name="bi-award-fill" />
      <template #tooltip>Skills</template>
    </TagWithTooltip>
  </div>
</template>
