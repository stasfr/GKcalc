import { defineStore } from 'pinia';

const state = () => {
  return {
    cards: [
      { id: 0, count: 0 },
      { id: 1, count: 0 }
    ],
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

    this.cards.push({ id, count: 0 });
  },

  deleteCard(id) {
    const cardIndex = this.cards.findIndex(element => {
      return element.id === id;
    });

    this.cards.splice(cardIndex, 1);
  }
};

export const useCalculatorStore = defineStore('calculatorStore', {
  state,
  getters,
  actions
});
