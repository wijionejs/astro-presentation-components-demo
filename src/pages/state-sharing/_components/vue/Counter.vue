<template>
  <div class="p-6 bg-[#effbf5] border-2 border-[#42d392] rounded-lg shadow-md">
    <h1 class="text-3xl text-center font-bold text-[#42d392] mb-5">Vue</h1>
    <p class="text-9xl text-center font-bold text-gray-800 mb-5">
      {{ $counter }}
    </p>
    <div class="flex space-x-4 justify-center">
      <button
        class="px-4 py-2 bg-[#42d392] text-white rounded cursor-pointer hover:opacity-70 transition"
        @click="counter.set($counter + 1)"
      >
        Increment
      </button>
      <button
        class="px-4 py-2 bg-[#42d392] text-white rounded cursor-pointer hover:opacity-70 transition"
        @click="counter.set($counter - 1)"
      >
        Decrement
      </button>
      <button
        class="px-4 py-2 bg-gray-300 text-gray-800 rounded cursor-pointer hover:opacity-70 transition"
        @click="counter.set(0)"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { counter } from "../../_store/counterStore";
import { useStore } from "@nanostores/vue";

const $counter = useStore(counter);
</script>
