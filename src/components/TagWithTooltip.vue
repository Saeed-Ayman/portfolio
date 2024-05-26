<script setup lang="ts">
defineProps(["tag", "xPosition", "yPosition", "tooltipClasses"]);
</script>

<template>
  <component :is="tag" class="group relative">
    <slot />
    <span
      class="hidden group-hover:block absolute regular-tooltip z-50 shadow-md"
      :class="[
        {
          '-left-1 -translate-x-full': xPosition == 'left',
          '-right-1 translate-x-full': xPosition == 'right',
          'left-1/2 -translate-x-1/2': xPosition == 'center',

          '-top-1 -translate-y-full': yPosition == 'top',
          '-bottom-1 translate-y-full': yPosition == 'bottom',
          'top-1/2 -translate-y-1/2': yPosition == 'center',
        },
        tooltipClasses,
      ]"
    >
      <slot name="tooltip" />
    </span>
  </component>
</template>
