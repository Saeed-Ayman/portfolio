<script setup lang="ts">
import { ref } from "vue";
import { useFocusBackgroundStore } from "../store/useFocusBackgroundStore";
import TagWithTooltip from "./TagWithTooltip.vue";
import socialLinks from "../context/socialsContext.json";

const showSocial = ref(false);
useFocusBackgroundStore().registerRef(showSocial);
</script>

<template>
  <div class="relative z-50">
    <TagWithTooltip
      tag="button"
      @click="showSocial = !showSocial"
      class="grid place-items-center"
      x-position="right"
      y-position="center"
    >
      <img
        class="w-9 md:w-12 regular-btn"
        src="../assets/avatar-placeholder.jpg"
      />
      <template #tooltip>Social Media</template>
    </TagWithTooltip>

    <div class="absolute left-1/2 -bottom-2 -translate-x-1/2 translate-y-full">
      <ul class="space-y-2">
        <TagWithTooltip
          tag="li"
          v-for="({ socialTitle, socialIcon, socialLink }, i) in socialLinks"
          :key="socialTitle"
          x-position="right"
          y-position="center"
        >
          <transition>
            <a
              v-if="showSocial"
              :href="socialLink"
              target="_blank"
              class="w-8 md:w-10 regular-btn"
              :style="{
                '--enter-transition-duration': `${(i + 1) * 0.15 + 0.1}s`,
                '--leave-transition-duration': `${
                  (socialLinks.length - i) * 0.1
                }s`,
              }"
            >
              <v-icon :name="socialIcon" />
            </a>
          </transition>
          <template #tooltip>{{ socialTitle }}</template>
        </TagWithTooltip>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

.v-enter-to {
  transition: all var(--enter-transition-duration) ease-in-out;
  transform: translateX(0%);
  opacity: 1;
}

.v-leave-active {
  transform: translateX(0%);
  opacity: 1;
}

.v-leave-to {
  transition: all var(--leave-transition-duration) ease-in-out;
  transform: translateX(-100px);
  opacity: 0;
}
</style>
