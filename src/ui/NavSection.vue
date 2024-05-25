<script setup lang="ts">
import { ref } from "vue";
import TagWithTooltip from "../components/TagWithTooltip.vue";
import { useFocusBackgroundStore } from "../store/useFocusBackgroundStore";
import NavLink from "../components/NavLink.vue";
import { useScrollStore } from "../store/useScrollStore";

const showNav = ref();
useFocusBackgroundStore().registerRef(showNav, false);

const scrollStore = useScrollStore();
</script>

<template>
  <div class="flex-grow flex justify-end md:justify-center">
    <transition name="sidebar" mode="in-out">
      <div
        v-show="showNav"
        class="grid md:!grid place-items-center fixed z-40 md:relative h-screen md:h-auto bg-gray-900 md:bg-transparent top-0 right-0 w-3/4 md:w-auto shadow md:shadow-none"
        @focusout="showNav = false"
      >
        <div class="absolute top-4 right-4">
          <TagWithTooltip
            tag="button"
            class="md:hidden w-9 regular-btn"
            @click="showNav = false"
            x-position="left"
            y-position="center"
          >
            <v-icon name="co-x" />
            <template #tooltip>close</template>
          </TagWithTooltip>
        </div>

        <ul
          class="flex gap-8 flex-col md:flex-row justify-center items-center font-semibold"
        >
          <li v-for="link in scrollStore.links">
            <NavLink
              @click="() => scrollStore.scrollToSection(link)"
              :active="scrollStore.isActiveSection(link)"
            >
              {{ link }}
            </NavLink>
          </li>
        </ul>
      </div>
    </transition>

    <TagWithTooltip
      tag="button"
      @click="showNav = !showNav"
      class="md:hidden regular-btn h-9 md:h-12"
      x-position="center"
      y-position="bottom"
    >
      <v-icon name="md-menu-round" />

      <template #tooltip>menu</template>
    </TagWithTooltip>
  </div>
</template>

<style scoped>
.sidebar-enter-active {
  transition: all 0.5s ease;
  transform: translateX(100%);
  opacity: 1;
}

.sidebar-enter-to {
  transition: all 0.5s ease;
  transform: translateX(0%);
}

.sidebar-leave-active {
  transition: all 0.4s ease;
  transform: translateX(70%);
  opacity: 0;
}
</style>
