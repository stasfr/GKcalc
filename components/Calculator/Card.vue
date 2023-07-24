<template>
  <div
    class="mx-4 mb-8 flex h-64 w-48 flex-col items-center justify-between rounded bg-primary pb-1"
  >
    <div class="flex w-full flex-row-reverse rounded">
      <button @click="deleteCard" class="w-6 bg-secondary text-text">
        <XIcon />
      </button>
    </div>
    <input class="bg-primary text-center text-background" type="text" />
    <div class="w-1/2 rounded bg-secondary text-center text-text">
      {{ options.count }}
    </div>
    <div class="flex justify-around">
      <CalculatorCalcCountBtn :id="options.id" :difference="-4" />
      <CalculatorCalcCountBtn :id="options.id" :difference="-2" />
      <CalculatorCalcCountBtn :id="options.id" :difference="-1" />
      <CalculatorCalcCountBtn :id="options.id" :difference="+1" />
      <CalculatorCalcCountBtn :id="options.id" :difference="+2" />
      <CalculatorCalcCountBtn :id="options.id" :difference="+4" />
    </div>
    <div class="flex w-full justify-around">
      <button class="rounded bg-secondary px-1 text-text">Change Type</button>
      <button class="rounded bg-secondary px-1 text-text" @click="resetCounter">
        Reset
      </button>
    </div>
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

const resetCounter = () => {
  props.options.count = 0;
};
</script>
