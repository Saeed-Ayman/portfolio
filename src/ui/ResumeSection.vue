<template>
  <div class="container mx-auto p-4">
    <div>
      <div
        class="text-3xl py-8 text-nowrap font-bold text-blue-500 md:bg-gray-900 text-center"
      >
        Resume
      </div>
    </div>

    <div class="flex relative">
      <div class="w-28 md:w-80 relative">
        <div class="h-screen sticky top-0">
          <div
            class="relative z-20 -rotate-90 -translate-x-5 flex flex-col justify-center items-center py-20 font-semibold h-full"
          >
            <div
              class="absolute mb-4 rounded-t-full blur-xl opacity-20 bg-white w-44 h-28"
            ></div>
            <div class="text-blue-500 sm:text-3xl text-center">Education</div>
          </div>
        </div>
      </div>

      <div class="relative my-16 w-0 z-20">
        <div
          class="z-10 sticky w-8 -mt-40 pt-40 top-0 flex justify-center items-center -translate-x-1/2"
        >
          <v-icon
            class="border border-blue-500 rounded-full bg-gray-800 text-blue-500 p-1"
            :name="resume[0].icon"
            scale="2"
          />
        </div>
      </div>

      <div class="flex-1 px-5 py-20">
        <div class="relative -mt-4 -translate-x-8 space-y-5">
          <div class="w-5 aspect-square bg-gray-800 rounded-full"></div>
          <div class="mx-2 w-1 h-10 bg-gray-800"></div>
          <div class="mx-2 w-1 h-10 bg-gray-800"></div>
          <div class="mx-2 w-1 h-10 bg-gray-800"></div>
          <div class="w-5 aspect-square bg-gray-800 rounded-full"></div>
        </div>

        <div class="group" v-for="{ info } in resume">
          <InfoUL
            class="flex flex-col justify-center gap-16 border-l-2 border-gray-800 border-dashed pl-10 -ml-[22px]"
            :info="info"
          />

          <div class="relative -translate-x-8 space-y-5">
            <div class="w-5 aspect-square bg-gray-800 rounded-full"></div>
            <div class="mx-2 w-1 h-10 bg-gray-800"></div>
            <div class="mx-2 w-1 h-10 bg-gray-800"></div>
            <div class="mx-2 w-1 h-10 bg-gray-800"></div>
            <div class="w-5 aspect-square bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import resume from "../context/resume.json";
import InfoUL from "../components/InfoUL.vue";
</script>
