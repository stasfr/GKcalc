import { defineStore } from 'pinia';

const state = () => {
  return {
    recipes_list: []
  };
};

const getters = {};

const actions = {
  async fetchSchemasList() {
    const { data } = await useFetch('/api/app/schemas');

    this.recipes_list = data.value;
  }
};

export const useRecipeList = defineStore('recipeListStore', {
  state,
  getters,
  actions
});
