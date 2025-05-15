import { create } from "zustand";
import { useResource } from "./Resources";


const newPlayground = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => ({type: "empty", people:0 })));
newPlayground[1][2] = {type:'forest', people:0};
newPlayground[2][3] = {type:'forest', people:0};

export const usePlayground = create((set, get) => ({
  playground: newPlayground,
  initPlayground: (row,col) => {

    const newPlayground = Array.from({ length: row }, () => Array.from({ length: col }, () => ({type: "empty", people: 0 })));
    newPlayground[1][2] = {type:'forest', people:0};
    newPlayground[2][3] = {type:'forest', people:0};
    set({ playground: newPlayground });
  },

  updatePlayground : (position) => {
    const playground = get().playground
    const updatedPlayground = playground.map((row) => row.map((cell) => ({ ...cell })));
    const cell = updatedPlayground[position.y][position.x];
    
    // if (cell.type != 'empty') return
        
    if (cell.type === 'empty' && useResource.getState().wood >= 5){
      cell.type = 'house'
      useResource.getState().addWood(-5)
      useResource.getState().addPeople(2)
      updatedPlayground[position.y][position.x] = cell;
    } else if (cell.type === 'forest' && useResource.getState().getAvailablePeople() >= 1 ) {
      cell.people += 1
      updatedPlayground[position.y][position.x] = cell;
    } else {
      return
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