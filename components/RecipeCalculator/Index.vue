<template>
  <div class="flex h-full">
    <div class="w-[50%] bg-primary">{{ store.recipes_list }}</div>
    <div class="w-2 bg-accent"></div>
    <div class="w-[50%] bg-primary">recipe</div>
  </div>
</template>

<script setup>
import { useRecipeList } from '@/store/recipes_lists.js';
const store = useRecipeList();

store.fetchSchemasList();
</script>
