<script setup lang="ts">
defineProps<{ active: boolean }>();
</script>

<template>
  <a
    class="transition-colors duration-400 relative"
    :class="{
      'text-blue-300 hover:text-blue-400': !active,
      'text-blue-500': active,
    }"
  >
    <slot />
    <transition name="slid">
      <hr
        v-show="active"
        class="transition-colors duration-400 rounded-sm absolute border-2 w-1/2 border-blue-500"
      />
    </transition>
  </a>
</template>

<style scoped>
.slid-enter-active {
  transition: all 0.3s ease;
  width: 0;
  opacity: 0.2;
}

.slid-enter-to {
  transition: all 0.3s 0.1s ease-out;
  width: 50%;
  opacity: 1;
}
.slid-leave-active {
  transition: all 0.3s ease-out;
  width: 50%;
  opacity: 1;
}

.slid-leave-to {
  transition: all 0.3s ease;
  width: 0;
  opacity: 0.2;
}
</style>
