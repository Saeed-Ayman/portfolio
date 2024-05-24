<script setup lang="ts">
import SocialDropdown from "../components/SocialDropdown.vue";
import LightDarkModButton from "../components/LightDarkModButton.vue";
import NavSection from "../ui/NavSection.vue";
</script>

<template>
  <nav
    class="overflow-x-clip sticky backdrop-blur-3xl z-30 top-0 bg-gray-900/80 shadow px-4"
  >
    <div
      class="container mx-auto h-16 md:h-20 flex justify-between items-center gap-2"
    >
      <SocialDropdown />
      <NavSection />
      <LightDarkModButton />
    </div>
  </nav>
</template>
