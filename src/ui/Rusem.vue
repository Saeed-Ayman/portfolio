<script setup lang="ts">
import ScrollbarWithCheckpoints from "../components/ScrollbarWithCheckpoints.vue";
import TitleSection from "../components/TitleSection.vue";
import InnerPage from "../components/InnerPage.vue";
import SectionLayoutMargins from "../components/SectionLayoutMargins.vue";
import HeaderBlur from "../components/HeaderBlur.vue";
import InfoUL from "../components/InfoUL.vue";
import resume from "../context/resume.json";
import { Ref, ref } from "vue";

const refs = ref<Array<{ title: String; icon: String; _ref: Ref }>>([]);

function addRef(title: String, icon: String): Ref {
  const _ref = ref();

  refs.value.push({
    title,
    icon,
    _ref,
  });

  setTimeout(() => console.log(_ref), 1000);

  return _ref;
}
</script>

<template>
  <SectionLayoutMargins>
    <TitleSection>Resume</TitleSection>

    <div class="flex my-8 gap-2 h-80">
      <ScrollbarWithCheckpoints />

      <InnerPage>
        <template v-for="{ title, icon, info } in resume">
          <HeaderBlur :id="title" :title="title" :icon="icon" />
          <InfoUL :info="info" :ref="addRef(title, icon)" />
        </template>
      </InnerPage>
    </div>
  </SectionLayoutMargins>
</template>
