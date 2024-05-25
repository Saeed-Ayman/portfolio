<script setup lang="ts">
import ResumeSection from "./ui/ResumeSection.vue";
import FocusBackgroundSection from "./ui/FocusBackgroundSection.vue";
import HeaderSection from "./ui/HeaderSection.vue";
import LandingSection from "./ui/LandingSection.vue";
import AboutSection from "./ui/AboutSection.vue";

import { useScrollStore } from "./store/useScrollStore";
import { onMounted } from "vue";

const scrollStore = useScrollStore();

onMounted(() => {
  scrollStore.registerRef("home", document.getElementById("app"));
  scrollStore.registerRef("about", document.getElementById("about"));
  scrollStore.registerRef("resume", document.getElementById("resume"));
  scrollStore.registerRef("contact", document.getElementById("contact"));
});
</script>

<template>
  <HeaderSection />

  <main>
    <LandingSection />
    <AboutSection id="about" />
    <ResumeSection id="resume" />

    <div id="contact" class="bg-gray-900 h-screen"></div>
  </main>

  <FocusBackgroundSection />
</template>
