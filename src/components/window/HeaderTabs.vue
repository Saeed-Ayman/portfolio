<template>
  <div class="scroll flex items-center translate-y-1.5 pb-0.25">
    <template v-for="(tab, i) in tabs">
      <template v-if="tab">
        <TabWindow
          :file-name="tab"
          @click="() => clickHandler(i)"
          :active="active === i"
          @close="() => closeHandler(i)"
        />

        <div
          class="min-w-0.5 h-4 bg-gray-800 last:hidden"
          :class="{ hidden: active === i || active === i + 1 }"
        ></div>
      </template>
    </template>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import TabWindow from "../editorWindow/TabWindow.vue";

const props = defineProps(["tabs"]);

const active = defineModel();
const tabs = reactive(props.tabs);

function clickHandler(i: number) {
  if (tabs[i] && active.value !== i) active.value = i;
}

function closeHandler(i: number) {
  delete tabs[i];

  if (active.value === i) {
    active.value = -1;

    for (let j = 0; j < tabs.length; j++) {
      if (!tabs[j]) continue;

      active.value = j;
      break;
    }
  }
}
</script>
