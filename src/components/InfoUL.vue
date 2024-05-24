<script setup lang="ts">
defineProps<{
  info: Array<{
    title: String;
    description?: String;
    list?: Array<{
      key?: String;
      value: String | Array<String>;
    }>;
  }>;
}>();
</script>

<template>
  <ul>
    <li class="li" v-for="{ title, description, list } in info">
      <div class="my-1 text-xl font-semibold text-blue-400">
        {{ title }}
      </div>

      <div v-if="description" class="font-semibold text-blue-300">
        {{ description }}
      </div>

      <ul v-if="list?.length" class="text-blue-300 space-y-2">
        <li v-for="{ key, value } in list" class="flex flex-wrap gap-1">
          <template v-if="key"> {{ key }}: </template>

          <b v-if="Array.isArray(value)">
            <template v-for="(item, i) in value">
              <span class="text-nowrap">{{ item }}</span>
              <template v-if="i + 1 != value.length">, </template>
            </template>
          </b>

          <b v-else>{{ value }}</b>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.li {
  padding-top: 30px;
  position: relative;
}

li {
  margin-left: 40px;
}

.li:before {
  content: "";
  position: absolute;
  z-index: 10;
  width: 0.75rem;
  height: 0.75rem;
  top: 1rem;
  left: -5.4rem;
  @apply bg-gray-800 rounded-full;
}

.li::after {
  content: "";
  position: absolute;
  width: 4.5rem;
  height: 2rem;
  top: 1rem;
  left: -5.1rem;
  border-left: 2px dashed;
  border-bottom: 2px dashed;
  border-radius: 0 99999px;
  @apply border-gray-800;
}
</style>
