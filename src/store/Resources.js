import { create } from "zustand";
import { usePlayground } from "./Playground";

export const useResource = create((set, get) => ({
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
  people: 2,
  addPeople: (nbPeople) => {
    set((state) => ({
      people:  Math.max(0, state.people + nbPeople)
    }));
  },
  getAvailablePeople: () => {
    const people = get().people
    const workers = get().getWorkers()
    const nbBusyPeople = Object.values(workers).reduce((acc, worker) => acc + worker, 0);
  
    return people - nbBusyPeople
  },

  getWorkers : () => {
    const playground = usePlayground.getState().playground;
    const workers = playground.flat().reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = 0;
      }
      acc[item.type] += item.people;
      return acc;
    }, {});
    
    return workers
  },
  
  initResource: (people= 2, food= 14, stone= 0, wood= 46) => set({ 
    people,
    food,
    stone,
    wood
  }),
}));