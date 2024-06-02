<script setup lang="ts">
const todosProgramming: string[] = [
  "🍴 eat",
  "💤 sleep",
  "👨🏻‍💻 code",
  "🔁 repeat",
];
</script>

<template>
  <div class="bg-gray-900 py-10 grid place-items-center min-h-full">
    <div class="todos">
      <div class="todo-title text-sm sm:text-base xl:text-2xl">
        Programming Life
      </div>

      <ul class="mt-2">
        <li
          class="text-xs sm:text-sm xl:text-base"
          v-for="todo in todosProgramming"
          :key="todo"
        >
          {{ todo }}
        </li>
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
