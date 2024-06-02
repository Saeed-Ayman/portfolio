<template>
  <div
    :class="{
      'bg-gray-800 flex items-center gap-1.5 px-2 py-1 rounded-t-lg border-2 border-blue-500 border-b-0 curser-default select-none':
        active,
      'cursor-pointer': !active,
    }"
    @click.middle="$emit('close')"
    @mousedown.middle="(e) => e.preventDefault()"
  >
    <div
      class="flex items-center gap-1.5 px-2"
      :class="{ 'py-1 border-gray-800 border-b-0': !active }"
    >
      <TabTitle :icon-name="icon" :title="fileName" />
    </div>
    <button v-if="active">
      <v-icon
        name="bi-x"
        class="text-white font-bold size-5 hover:bg-gray-900 rounded-full"
        @click="$emit('close')"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import TabTitle from "./TabTitle.vue";

const props = defineProps({
  fileName: String,
  active: Boolean,
});

defineEmits(["close"]);

const icon = computed(() => {
  let filename = props.fileName?.split(".")[1];

  switch (filename) {
    case "ts":
      filename = "typescript";
      break;
    case "js":
      filename = "javascript";
      break;
  }

  return props.fileName ? "vi-file-type-" + filename : undefined;
});
</script>
