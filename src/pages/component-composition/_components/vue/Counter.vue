<template>
  <div class="p-6 bg-[#effbf5] border-2 border-[#42d392] rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-xl text-center font-bold text-[#42d392]">
        Vue: <span>{{ $counter }}</span>
      </h1>
      <div class="flex gap-2">
        <button
          class="py-2 px-4 bg-[#42d392] text-white rounded cursor-pointer hover:opacity-70 transition"
          @click="counter.set($counter + 1)"
        >
          +
        </button>
        <button
          class="py-2 px-4 bg-[#42d392] text-white rounded cursor-pointer hover:opacity-70 transition"
          @click="counter.set($counter - 1)"
        >
          -
        </button>
        <button
          class="py-2 px-4 bg-gray-300 text-gray-800 rounded cursor-pointer hover:opacity-70 transition"
          @click="counter.set(0)"
        >
          ↺
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { counter } from "../../_store/counterStore";
import { useStore } from "@nanostores/vue";

const $counter = useStore(counter);
</script>
