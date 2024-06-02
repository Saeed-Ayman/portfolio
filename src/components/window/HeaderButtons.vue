<template>
  <div class="flex gap-1">
    <TagWithTooltip
      v-for="{ color, tooltip, onclick } in bts_array"
      tag="button"
      @click="onclick"
      class="w-2.5 h-2.5 rounded-full"
      :class="color"
      x-position="center"
      :y-position="minimize ? 'top' : 'bottom'"
      :tooltip-classes="{
        '-translate-x-3/4 -bottom-3': !minimize,
        '-top-4': minimize,
      }"
    >
      <template #tooltip>{{ tooltip }}</template>
    </TagWithTooltip>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import TagWithTooltip from "../TagWithTooltip.vue";

const minimize = defineModel("minimize", { default: false, type: Boolean });
const close = defineModel("close", { default: false, type: Boolean });
// const maximize = defineModel("maximize", { default: false, type: Boolean });

const props = defineProps({ disabled: { default: false, type: Boolean } });

const bts_array = computed(() => [
  {
    color: "bg-green-500",
    tooltip: minimize.value ? "restore" : "minimize",
    onclick: () => (!props.disabled ? (minimize.value = !minimize.value) : {}),
  },
  {
    color: "bg-yellow-500",
    tooltip: "maximize",
  },
  {
    color: "bg-red-500",
    tooltip: "close",
    onclick: () => (!props.disabled ? (close.value = true) : {}),
  },
]);
</script>
