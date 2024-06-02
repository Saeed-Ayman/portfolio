<template>
  <div class="relative z-0">
    <HCode
      v-if="code"
      :lang="lang"
      :copy="false"
      width="fit-content"
      height="fit-content"
      :code-value="code"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
});
</script>

<style>
.code_header {
  display: none !important;
}

.hljs {
  background-color: inherit !important;
}

.code div {
  padding: inherit !important;
}

.hljs {
  font-size: inherit !important;
}

.code pre {
  display: flex;
}
</style>
