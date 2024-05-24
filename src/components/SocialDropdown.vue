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
      <transition-group name="drop" tag="ul" class="space-y-2">
        <TagWithTooltip
          tag="li"
          v-show="showSocial"
          v-for="{ socialTitle, socialIcon, socialLink } in socialLinks"
          :key="socialTitle"
          x-position="right"
          y-position="center"
        >
          <a :href="socialLink" target="_blank" class="w-8 md:w-10 regular-btn">
            <v-icon :name="socialIcon" />
          </a>

          <template #tooltip>{{ socialTitle }}</template>
        </TagWithTooltip>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.drop-enter-active {
  transition: all 0.5s ease-out;
  transform: translateX(-100%);
  opacity: 0;
}

.drop-enter-to {
  transition: all 0.5s ease-out;
  transform: translateX(0%);
  opacity: 1;
}

.drop-leave-active {
  transition: all 0.4s ease;
  transform: translateX(-70%);
  opacity: 0;
}
</style>
