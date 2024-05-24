<script setup lang="ts">
defineProps<{
  title: String;
  icon?: String;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center overflow-x-clip sticky backdrop-blur-3xl z-10 top-0 p-4"
  >
    <div
      class="flex gap-2 mx-auto my-4 w-fit text-2xl font-semibold text-blue-300"
    >
      <v-icon v-if="icon" :name="icon" scale="1.7" />
      <div class="relative">
        {{ title }}
        <hr class="absolute rounded-sm border-[3px] w-1/2 border-blue-300" />
      </div>
    </div>
  </div>
</template>
