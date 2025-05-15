import { create } from "zustand";
import { useResource } from "./Resources";

let id=1;
const newPlayground = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => ({id: id++, type: "empty" })));

export const usePlayground = create((set, get) => ({
  playground: newPlayground,
  initPlayground: (row,col) => {
    let id=1;
    const newPlayground = Array.from({ length: row }, () => Array.from({ length: col }, () => ({id: id++, type: "empty" })));
    set({ playground: newPlayground });
  },

  updatePlayground : (newType , position) => {
    const playground = get().playground
    const updatedPlayground = playground.map((row) => row.map((cell) => ({ ...cell })));
    const cell = updatedPlayground[position.y][position.x];
    
    if (cell.type != 'empty') return
        
    if (newType === 'house' && useResource.getState().wood >= 5){
      cell.type = 'house'
      useResource.getState().addWood(-5)
      useResource.getState().addFreePeople(2)
      updatedPlayground[position.y][position.x] = cell;
    }

    set(() => ({
      playground: updatedPlayground})
    )
  },
  score:0,
  changeScore : (time) => {
    set(() => ({
      score: time})
    )

  }
  
}))