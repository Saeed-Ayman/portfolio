<script setup lang="ts">
defineProps<{ dir: "TOP" | "BOTTOM" }>();
</script>

<template>
  <div
    class="wave absolute w-full h-10"
    :class="{
      'top-0 -translate-y-1/2': dir == 'TOP',
      'bottom-0 translate-y-1/2': dir == 'BOTTOM',
    }"
  ></div>
</template>

<style scoped>
.wave {
  background-image: url("../assets/wave.svg");
  background-repeat: repeat-x;
  background-size: contain;
}
</style>
