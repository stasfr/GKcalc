<template>
  <button
    class="mx-[2px] w-6 rounded bg-secondary text-text"
    @click="changeCount"
  >
    {{ difference > 0 ? `+${difference}` : difference }}
  </button>
</template>

<script setup>
import { useCalculatorStore } from '@/store/calculator.js';
const store = useCalculatorStore();

const props = defineProps({
  id: {
    type: Number,
    require: true
  },
  difference: {
    type: Number,
    require: true
  }
});

const changeCount = () => {
  const cardIndex = store.cards.findIndex(element => {
    return element.id === props.id;
  });

  store.cards[cardIndex].count += props.difference;
};
</script>
