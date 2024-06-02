<template>
  <div class="w-full h-10 border-b-2 border-blue-500 flex">
    <TagWithTooltip
      tag="button"
      class="px-2"
      x-position="center"
      y-position="bottom"
      tooltip-classes="ml-3"
    >
      <v-icon name="md-menu-round" class="text-blue-500" />
      <template #tooltip>Menu</template>
    </TagWithTooltip>

    <HeaderTabs
      v-model="active"
      :tabs="tabs"
      class="relative mt-auto overflow-x-scroll flex-1 pr-10"
    />

    <div class="pl-2 pr-3.5 flex justify-end items-center col-span-1 relative">
      <div
        class="absolute h-full w-10 bg-gradient-to-l from-gray-900 via-75% via-gray-900/70 to-gray-900/10 opacity-95 left-px -translate-x-full"
      ></div>

      <TagWithTooltip
        class="text-green-400 hover:text-green-400/80 cursor-pointer"
        tag="button"
        x-position="left"
        y-position="center"
        @click="$emit('run')"
      >
        <v-icon class="rotate-90" name="bi-triangle-fill" scale="1" />

        <template #tooltip>Run</template>
      </TagWithTooltip>

      <TagWithTooltip
        class="text-blue-500 hover:text-blue-500/80 cursor-pointer"
        tag="button"
        x-position="center"
        y-position="bottom"
      >
        <v-icon class="rotate-90" name="bi-three-dots" scale="1" />

        <template #tooltip>more actions...</template>
      </TagWithTooltip>

      <HeaderButtons disabled class="ml-3.5" />
    </div>
  </div>
</template>
<script setup lang="ts">
import TagWithTooltip from "../TagWithTooltip.vue";
import HeaderButtons from "./HeaderButtons.vue";
import HeaderTabs from "./HeaderTabs.vue";

defineProps(["tabs"]);
defineEmits(["run"]);

const active = defineModel();
</script>
