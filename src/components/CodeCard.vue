<template>
  <div class="relative" ref="container">
    <div
      class="absolute z-10 right-3 top-2 flex justify-center items-center gap-2"
    >
      <TagWithTooltip
        class="text-green-400 hover:text-green-400/80 cursor-pointer"
        tag="button"
        @click="
          () => {
            minimize = false;
            close = false;
          }
        "
        x-position="left"
        y-position="center"
      >
        <v-icon class="rotate-90" name="bi-triangle-fill" scale="1" />

        <template #tooltip>Run</template>
      </TagWithTooltip>

      <div class="flex gap-1">
        <span class="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        <span class="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
        <span class="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
      </div>
    </div>

    <div class="relative z-0">
      <HCode
        v-if="code"
        :lang="lang"
        :copy="false"
        width="fit-content"
        height="fit-content"
        :code-value="code"
      />
    </div>
    <div
      v-show="!close"
      class="flex flex-col z-10 h-fit bg-gray-700 border-4 border-gray-700 rounded-lg shadow-lg min-w-52"
      :style="!minimize && { top: `${top}px`, left: `${left}px` }"
      :class="{
        'top-full left-full -translate-x-full -translate-y-full -ml-2 -mt-4':
          top == Infinity && left == Infinity && !minimize,
        'w-60 md:w-80 absolute min-h-40 shadow-black resize overflow-auto max-w-full max-h-full':
          !minimize,
        'fixed rotate-90 top-1/2 left-4 -translate-x-1/2 translate-y-1/2':
          minimize,
      }"
    >
      <div
        class="px-2 py-1 flex justify-between items-center overflow-visible"
        :draggable="!minimize"
        ref="draggable"
        :class="{
          'bg-blue-500': dragging,
          'border-b-2 border-gray-900': !minimize,
        }"
      >
        <div class="text-sm font-medium text-white flex gap-2 items-center">
          <img src="../assets/vue.svg" class="w-4 text-nowrap" />
          Simple Example
        </div>
        <div class="flex gap-1">
          <TagWithTooltip
            tag="button"
            @click="() => (minimize = !minimize)"
            class="w-2.5 h-2.5 bg-green-500 rounded-full"
            x-position="center"
            :y-position="minimize ? 'top' : 'bottom'"
            :tooltip-classes="{
              '-translate-x-3/4 -bottom-3': !minimize,
              '-top-4': minimize,
            }"
          >
            <template #tooltip>{{
              minimize ? "restore" : "minimize"
            }}</template>
          </TagWithTooltip>
          <TagWithTooltip
            tag="button"
            @click=""
            class="w-2.5 h-2.5 bg-yellow-500 rounded-full"
            x-position="center"
            :y-position="minimize ? 'top' : 'bottom'"
            :key="`${minimize}`"
            :tooltip-classes="{
              '-translate-x-3/4 -bottom-3': !minimize,
              '-top-4': minimize,
            }"
          >
            <template #tooltip>maximize</template>
          </TagWithTooltip>
          <TagWithTooltip
            tag="button"
            @click="close = true"
            class="w-2.5 h-2.5 bg-red-500 rounded-full"
            x-position="center"
            :y-position="minimize ? 'top' : 'bottom'"
            :tooltip-classes="{
              '-translate-x-3/4 -bottom-3': !minimize,
              '-top-4': minimize,
            }"
          >
            <template #tooltip>close</template>
          </TagWithTooltip>
        </div>
      </div>
      <div class="flex-1 overflow-auto" :class="{ hidden: minimize }">
        <component :is="component" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TagWithTooltip from "./TagWithTooltip.vue";
import { onMounted, ref } from "vue";

defineProps(["code", "lang", "component"]);

const draggable = ref<HTMLElement>();
const container = ref<HTMLElement>();

const left = ref(Infinity);
const top = ref(Infinity);
const mClientX = ref(Infinity);
const mClientY = ref(Infinity);
const dragging = ref(false);
const minimize = ref(true);
const close = ref(true);

onMounted(() => {
  window.addEventListener("resize", () => {
    left.value = Infinity;
    top.value = Infinity;

    draggable.value?.parentElement?.style.removeProperty("left");
    draggable.value?.parentElement?.style.removeProperty("top");
  });

  draggable.value?.addEventListener(
    "dragstart",
    (e) => {
      dragging.value = true;

      mClientX.value = e.offsetX;
      mClientY.value = e.offsetY;

      var img = new Image();
      img.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
      e.dataTransfer?.setDragImage(img, 0, 0);
    },
    false
  );

  draggable.value?.addEventListener(
    "dragend",
    () => {
      dragging.value = false;

      mClientX.value = Infinity;
      mClientY.value = Infinity;
    },
    false
  );

  container.value?.addEventListener("dragover", (e) => {
    if (mClientX.value == Infinity || mClientY.value == Infinity) return;

    const offset = container.value?.getBoundingClientRect();
    const offset2 = draggable.value?.parentElement?.getBoundingClientRect();

    if (!offset || !offset2) return;

    const maxOffsetX = offset.width - offset2.width / 2;
    const maxOffsetY = offset.height - offset2.height / 2;

    const _left = Math.max(
      e.clientX - offset.left - mClientX.value,
      -offset2.width / 2
    );
    const _top = Math.max(
      e.clientY - offset.top - mClientY.value,
      -offset2.height / 2
    );

    left.value = Math.min(_left, maxOffsetX);
    top.value = Math.min(_top, maxOffsetY);
  });
});
</script>
<style>
.code_header {
  border-bottom: 1px solid rgb(31 41 55) !important;
  font-style: italic !important;
}

.code {
  border: 1px solid rgb(31 41 55) !important;
}

.code {
  background-color: rgb(17 24 39) !important;
}

code.hljs {
  @apply !bg-gray-800;
}

.code_area {
  @apply pr-4 border-2 !rounded-t-none border-blue-500  bg-gray-800 !-mt-[4px];
}

.code_header,
.code,
.hljs {
  font-size: 6px !important;

  @media (min-width: 640px) {
    font-size: 8px !important;
  }

  @media (min-width: 1024px) {
    font-size: 12px !important;
  }
}

.TL {
  @apply mt-2 px-[5.5rem] border-2 border-b-0 border-blue-500 rounded-tl-xl relative z-10 bg-gray-800;
}
.TL::after {
  @apply absolute right-4 font-mono font-bold text-white not-italic cursor-pointer  aspect-square w-4 px-1 py-0  flex justify-center items-center rounded-full text-[10px];
  content: "X";
}

.TL::before {
  content: "";
  background-image: url("../assets/vue.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @apply absolute left-4 font-mono font-bold aspect-square w-4 top-1/2 -translate-y-1/2;
}

.TL > .TL_word {
  @apply relative text-gray-800 select-none;
}

.TL > .TL_word::before {
  content: "Example.vue";
  @apply absolute inset-0 bg-gray-800 text-white text-sm flex justify-center items-center -ml-4 not-italic;
}

.code pre {
  @apply bg-gray-800 relative z-10;
}
</style>
