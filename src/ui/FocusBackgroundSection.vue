<script setup lang="ts">
import { useFocusBackgroundStore } from "../store/useFocusBackgroundStore";

const store = useFocusBackgroundStore();
</script>

<template>
  <transition name="focus">
    <div
      v-if="store.show"
      @click="store.expireShow"
      class="fixed z-20 top-0 left-0 w-screen h-screen bg-gray-900/75"
      :class="{ 'md:hidden': !store.visibleInBigScreens }"
    ></div>
  </transition>
</template>

<style scoped>
.focus-enter-active {
  transition: all 0.5s ease;
  opacity: 0;
}

.focus-enter-to {
  transition: all 0.5s ease;
  opacity: 1;
}

.focus-leave-active {
  opacity: 1;
}

.focus-leave-active {
  transition: all 1.5s ease;
  transition-delay: 0.2s;
  opacity: 0;
}
</style>
