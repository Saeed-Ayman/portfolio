<template>
  <Layout>
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
        <CodeCard lang="vue" :code="codeVue" :component="ExampleCodeVue" />
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Layout from "../layouts/GridSquaresLayout.vue";
import ExampleCodeVue from "../components/code/ExampleCodeVue.vue";
import CodeCard from "../components/code/CodeCard.vue";

const codeVue = ref<string>(`<${"script"} setup lang="ts">
const todosProgramming: string[] = ["🍴 eat", "💤 sleep", "👨🏻‍💻 code", "🔁 repeat"];
</${"script"}>

<template>
  <div class="bg-gray-900 py-10 grid place-items-center">
    <div class="todos">
      <div class="todo-title text-sm sm:text-base xl:text-2xl">Programming Life</div>

      <ul class="mt-2 text-xs sm:text-sm xl:text-base">
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
      weight: bold;
    }
  }
}
</style>
`);

// fetch(
//   "https://raw.githubusercontent.com/Saeed-Ayman/test/main/ExampleCodeVue.vue"
// )
//   .then((response) => response.text())
//   .then((content) => {
//     codeVue.value = content;
//     console.log(content);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
</script>
