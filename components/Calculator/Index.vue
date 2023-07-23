<template>
  <div class="flex w-screen flex-col text-background">
    <div class="flex h-[4%] w-screen items-center justify-around py-3">
      <button @click="addCard" class="w-24 rounded bg-primary">Add</button>
    </div>
    <div class="flex flex-wrap items-center justify-around">
      <CalculatorCard v-for="card in cards" :key="card.id" :options="card" />
    </div>
  </div>
</template>

<script setup>
import { useCalculatorStore } from '@/store/calculator.js';
const store = useCalculatorStore();

const cards = store.cards;

const addCard = () => {
  store.addCard();
};
</script>
