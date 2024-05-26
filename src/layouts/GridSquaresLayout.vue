<template>
  <div class="bg-gray-900 overflow-x-clip">
    <div class="h-full relative container mx-auto">
      <slot />

      <div class="absolute inset-0 opacity-30">
        <table class="flex flex-col h-full">
          <tr
            v-for="i in 3"
            :key="i"
            class="border-gray-800 border-y first:border-t-0 last:border-b-0 flex-1 flex"
          >
            <td
              v-for="j in 5"
              :key="i * j"
              class="flex-1 border-gray-700 border-x first:border-l-0 last:border-r-0 even:hidden md:even:block"
            ></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
