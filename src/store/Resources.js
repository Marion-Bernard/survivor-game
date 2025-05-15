import { create } from "zustand";

export const useResource = create((set) => ({
  /*WOOD*/
  wood: 45,
  addWood: (x) => {
    set((state) => ({
      wood: Math.max(0, state.wood + x)
    }));
  },
  resetWood: () => set({ wood: 45 }),

  /*STONE*/
  stone: 0,
  addStone: (x) => {
    set((state) => ({
      stone: Math.max(0, state.stone + x)
    }));
  },

  /*FOOD*/
  food: 14,
  addFood: (x) => {
    set((state) => ({
      food: Math.max(0, state.food + x)
    }));
  },

  /*PEOPLE*/
  people: [2,2],
  addFreePeople: (x) => {
    set((state) => ({
      people: [
        Math.max(0, state.people[0] + x), 
        Math.max(0, state.people[1] + x),
      ]
    }));
  },
  
  addBusyPeople: (x) => {
    set((state) => ({
      people: [
        Math.max(0, state.people[1] + x),
      ]
    }));
  },

  initResource: (people = [2,2], food = 14, stone = 0, wood = 46) => set({ 
    people,
    food,
    stone,
    wood
  }),
}));