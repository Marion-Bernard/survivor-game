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
  //people devient juste un chiffre pour représenter le nombre tot de gens
  addPeople: (nbPeople) => {
    set((state) => ({
      people:  Math.max(0, state.people + nbPeople)
    }));
  },
  getAvailablePeople: () => {
    const people = get().people
    const playground = usePlayground.getState().playground;
    const busyPeoples = playground.flat().filter(cell => cell.people > 0)
    const busyPeople = busyPeoples.reduce((acc, cell) => acc + cell.people, 0);
  
    return people - busyPeople
  },
  
  //  addFreePeople: (x) => {
  //   set((state) => ({
  //     people: [
  //       Math.max(0, state.people[0] + x),
  //       state.people[1],
  //     ]
  //   }));
  // },
  
  // addBusyPeople: (x) => {
  //   set((state) => ({
  //     people: [
  //       Math.max(0, state.people[1] + x),
  //     ]
  //   }));
  // },

  initResource: (people= 2, food= 14, stone= 0, wood= 46) => set({ 
    people,
    food,
    stone,
    wood
  }),
}));