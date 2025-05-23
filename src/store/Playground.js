import { create } from "zustand";
import { useResource } from "./Resources";

export const usePlayground = create((set, get) => ({
  playground: [],

  /*****Volcans*****/
  volcano : 0,
  lastVolcanoEvent: null, // ou { timestamp, message }
  triggerVolcanoPopup: (message) => {
    set({
      lastVolcanoEvent: {
        timestamp: Date.now(),
        message: message || "Une personne a péri dans un volcan 🌋"
      }
    });
  },
  resetVolcanoEvent: () => {
    set({ lastVolcanoEvent: null });
  },

  /***** SAISONS ********/
  
  season : 'summer',
  updateSeason : (season) => {
    const newSeason = (season === 'summer' ? 'winter' : 'summer');
     set ({season : newSeason})
  },

  generateRandomCell : (nb,type,playground) => {
    for (let i = 0 ; i < nb ; i++) {
      let x = Math.floor(Math.random() * playground.length);
      let y = Math.floor(Math.random() * playground.length);
      playground[x][y] = {type:type, people:0};
    }
    return playground
  },
  generateVolcano: (playground) => {
    if ((Math.random()) < 0.4 ){
        set(() => ({ volcano: 1 }));
        return get().generateRandomCell(1,'volcano', playground);
    } else {
      set(()=> ({lastVolcanoEvent: null}));
      set(() => ({ volcano: 0 }));
      return playground
    }
  }, 

  initPlayground: (row,col) => {
    let newPlayground = Array.from({ length: row }, () => Array.from({ length: col }, () => ({type: "empty", people: 0 })));
    newPlayground = get().generateRandomCell(2,'forest',newPlayground);
    newPlayground = get().generateRandomCell(1,'mountain',newPlayground);
    newPlayground = get().generateRandomCell(1,'food',newPlayground);
    newPlayground = get().generateVolcano(newPlayground);
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
    } else if ((cell.type !== 'house' && cell.type !== 'empty') && useResource.getState().getAvailablePeople() >= 1 ) {
      cell.people += 1
      updatedPlayground[position.y][position.x] = cell;
    } else {
      return
    }

    set(() => ({
      playground: updatedPlayground})
    )
  },

  /******SCORE ********/
  score:0,
  changeScore : (time) => {
    set(() => ({
      score: time})
    )
  }
  
}))