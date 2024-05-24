<template>
  <div class="bg-gray-900 overflow-x-clip">
    <div class="h-full relative container mx-auto">
      <div class="relative z-10 md:grid md:grid-cols-12 gap-8 h-full pb-10">
        <div
          class="relative flex flex-col justify-center items-center py-20 gap-2 font-semibold col-span-5"
        >
          <div
            class="absolute mb-4 rounded-t-full blur-xl opacity-20 bg-white w-72 h-40"
          ></div>
          <div class="text-blue-300">Hello 👋</div>
          <div class="text-white text-3xl text-center">
            I am
            <span class="text-blue-500">Saeed Ayman</span>
          </div>
          <div class="text-blue-400 text-xl">FullStack Developer</div>
        </div>
        <div class="col-span-7 relative grid place-content-center">
          <div
            class="mb-12 md:mt-12 relative rounded-2xl shadow-xl shadow-slate-100/5"
          >
            <div
              class="absolute z-10 -bottom-8 -right-8 rounded-xl shadow-xl shadow-slate-100/5 bg-gray-900 border border-gray-800 overflow-hidden w-2/3"
            >
              <div
                class="border-b grid place-items-center border-gray-800 text-blue-400 font-semibold text-sm sm:text-base xl:text-lg py-2"
              >
                Browser
              </div>
              <ExampleCodeVue />
            </div>

            <div class="relative z-0">
              <HCode
                lang="vue"
                :copy="false"
                width="fit-content"
                height="fit-content"
                :code-value="codeVue"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute inset-0">
        <table class="w-full h-full">
          <tr
            v-for="i in 3"
            :key="i"
            class="border-gray-800 border-y first:border-t-0 last:border-b-0"
          >
            <td
              v-for="j in 5"
              :key="i * j"
              class="border-gray-700 border-x first:border-l-0 last:border-r-0"
            ></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExampleCodeVue from "../components/ExampleCodeVue.vue";

const codeVue = `<${"script"} setup lang="ts">
const todosProgramming: string[] = ["🍴 eat", "💤 sleep", "👨🏻‍💻 code", "🔁 repeat"];
</${"script"}>

<template>
  <div class="bg-gray-900 min-h-screen py-10 grid place-items-center">
    <div class="todos">
      <div class="todo-title">Programming Life</div>

      <ul class="mt-2">
        <li v-for="todo in todosProgramming" :key="todo">{{ todo }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.todos {
  color: #eee;
  text: {
    transform: capitalize;
    align: center;
  }

  .todo-title {
    font: {
      size: 1.5rem;
      weight: bold;
    }
  }
}
</style>`;
</script>

<style>
.code_header {
  border-bottom: 1px solid rgb(31 41 55) !important;
  font-style: italic !important;
}

.code {
  border: 1px solid rgb(31 41 55) !important;
}

.code,
.hljs {
  background-color: rgb(17 24 39) !important;
}

.code_header,
.code,
.hljs {
  font-size: 6px !important;

  @media (min-width: 640px) {
    font-size: 8px !important;
  }

  @media (min-width: 1024px) {
    font-size: 12px !important;
  }
}
</style>
