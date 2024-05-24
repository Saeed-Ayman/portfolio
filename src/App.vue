<script setup lang="ts">
import ResumeSection from "./ui/ResumeSection.vue";
import FocusBackgroundSection from "./ui/FocusBackgroundSection.vue";
import HeaderSection from "./ui/HeaderSection.vue";
import LandingSection from "./ui/LandingSection.vue";
import AboutSection from "./ui/AboutSection.vue";
</script>

<template>
  <HeaderSection />

  <main>
    <LandingSection />
    <AboutSection id="About" />
    <ResumeSection id="Resume" />

    <div id="Contact" class="bg-gray-900 h-screen"></div>
  </main>

  <FocusBackgroundSection />
</template>
