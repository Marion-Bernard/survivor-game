import { Cell } from "./Partials/Cell";
import { usePlayground } from "../store/Playground";

export function Map(){
  const {updatePlayground, playground} = usePlayground()

  return (
    <div className= "">
      {playground.map((row, rowIndex) => (
        <div key= {rowIndex} className= "flex flex-row">
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}+${colIndex}`} cell={cell} onClick={()=>updatePlayground({x:colIndex, y:rowIndex})}/>
          ))}
        </div>
      ))}
    </div>
  );
}



