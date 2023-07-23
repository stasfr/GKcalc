import { defineStore } from 'pinia';

const state = () => {
  return {
    cards: [{ id: 1 }, { id: 2 }],
    recipes: []
  };
};

const getters = {};

const actions = {
  addCard() {
    let id = 0;

    if (this.cards.length === 0) {
      id = 0;
    } else {
      id = this.cards.at(-1).id + 1;
    }

    this.cards.push({ id });
  },

  deleteCard(id) {
    this.cards.splice(
      this.cards.findIndex(element => {
        return element.id === id;
      }),
      1
    );
  }
};

export const useCalculatorStore = defineStore('calculatorStore', {
  state,
  getters,
  actions
});
