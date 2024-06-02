<template>
  <div class="mx-5" style="display: inherit" ref="container">
    <div class="overflow-hidden my-8 border-2 border-blue-500 rounded-xl">
      <HeaderWindow
        @run="close = false"
        class="bg-gray-900 relative"
        v-model="active"
        :tabs="array.map((a) => a.title)"
      />

      <template v-for="({ code, lang }, i) in codes">
        <CodeBody
          v-if="i == active"
          class="overflow-scroll h-[600px] bg-gray-800 text-sm p-4"
          :lang="lang?.toString()"
          :code="code?.toString()"
        />
      </template>
    </div>

    <div
      v-show="!close"
      class="flex flex-col z-10 h-fit bg-gray-700 border-4 border-gray-700 rounded-lg shadow-lg min-w-52"
      :class="{
        '!top-full !left-full -translate-x-full -translate-y-full -ml-2 -mt-4':
          is_default && !minimize,
        'w-60 md:w-80 absolute min-h-40 shadow-black resize overflow-auto max-w-full max-h-full':
          !minimize,
        'fixed rotate-90 !top-1/2 !left-4 -translate-x-1/2 translate-y-1/2':
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
          <img src="../../assets/vue.svg" class="w-4 text-nowrap" />
          Simple Example
        </div>
        <HeaderButtons v-model:minimize="minimize" v-model:close="close" />
      </div>
      <div class="flex-1 overflow-auto" :class="{ hidden: minimize }">
        <component :is="component" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCardComposable } from "../../composables/useCardComposable";
import { computed, onMounted, ref } from "vue";
import HeaderButtons from "../window/HeaderButtons.vue";
import HeaderWindow from "../window/HeaderWindow.vue";
import CodeBody from "./CodeBody.vue";

defineProps(["lang", "component"]);

const minimize = ref(false);
const close = ref(true);
const active = ref(0);

const draggable = ref<HTMLElement>();
const container = ref<HTMLElement>();

const cardComposable = useCardComposable();
const dragging = computed(() => cardComposable.is_dragging.value);
const is_default = computed(() => cardComposable.is_default.value);

const codes = ref<Array<{ code: String; lang: String }>>([]);
const array = [
  { path: "src/components/PlanCard.vue", title: "PlanCard.vue", lang: "vue" },
  { path: "package.json", title: "package.json", lang: "json" },
  { path: "src/App.vue", title: "App.vue", lang: "vue" },
  { path: "src/components/TextInput.vue", title: "TextInput.vue", lang: "vue" },
  {
    path: "src/context/stepsContext.json",
    title: "stepsContext.json",
    lang: "json",
  },
];

onMounted(async () => {
  cardComposable.init(draggable.value, container.value);

  for (let i = 0; i < array.length; i++) {
    await fetch(
      "https://raw.githubusercontent.com/Saeed-Ayman/multi-step-form/master/" +
        array[i].path
    )
      .then((response) => response.text())
      .then((content) => {
        codes.value.push({ code: content, lang: array[i].lang });
        console.log(content);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
</script>
