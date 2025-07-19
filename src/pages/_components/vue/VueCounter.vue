<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["initialValue"]);

const count = ref(props.initialValue);

function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
</script>
