<template>
  <div
    class="mx-4 mb-8 flex h-64 w-48 flex-col items-center justify-between rounded bg-primary"
  >
    <div class="flex w-full flex-row-reverse rounded">
      <button @click="deleteCard" class="w-6 bg-secondary text-text">
        <XIcon />
      </button>
    </div>
    <input class="bg-primary text-center text-background" type="text" />
    <button @click="count = 0">{{ count }}</button>
    <div class="flex justify-around">
      <button
        class="ml-1 w-6 rounded bg-secondary text-text"
        @click="count -= 4"
      >
        -4
      </button>
      <button
        class="ml-1 w-6 rounded bg-secondary text-text"
        @click="count -= 2"
      >
        -2
      </button>
      <button
        class="ml-1 w-6 rounded bg-secondary text-text"
        @click="count -= 1"
      >
        -1
      </button>
      <button
        class="ml-1 w-6 rounded bg-secondary text-text"
        @click="count += 1"
      >
        +1
      </button>
      <button
        class="ml-1 w-6 rounded bg-secondary text-text"
        @click="count += 2"
      >
        +2
      </button>
      <button
        class="ml-1 w-6 rounded bg-secondary text-text"
        @click="count += 4"
      >
        +4
      </button>
    </div>
    <button class="w-28 rounded bg-secondary text-text">Change Type</button>
  </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/outline';
import { useCalculatorStore } from '@/store/calculator.js';
const store = useCalculatorStore();

const props = defineProps({
  options: {
    type: Object,
    require: true
  }
});

const deleteCard = () => {
  store.deleteCard(props.options.id);
};

const count = ref(0);
</script>
