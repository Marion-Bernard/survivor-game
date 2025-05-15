import { Cell } from "./Partials/Cell";
import { usePlayground } from "../store/Playground";

export function Map({onAddHouse}){
  const {playground} = usePlayground()
  
  function handleClick(position){
    onAddHouse('house',position)
  }

   return (
    <div className= "">
      {playground.map((row, rowIndex) => (
        <div key= {rowIndex} className= "flex flex-row">
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}+${colIndex}`} cell={cell} onClick={()=>handleClick({x:colIndex, y:rowIndex})}/>
          ))}
        </div>
      ))}
    </div>
  );
}



