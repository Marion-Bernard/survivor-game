import { useState } from "react"
import { ScoreBoard } from "./ScoreBoard"
import { usePlayground } from "../store/Playground"


export function SaveScore({scoreBoard, updateScoreBoard}){

  const { score } = usePlayground();
  const [name, setName] = useState("");
  const [isSubmit, setSubmit]= useState(false);

  function handleSubmit(e){
    e.preventDefault();
    updateScoreBoard(e.target.name.value, score);
    setSubmit(true);
  }

  function isTopScore({score}) {
    let allScores = [...scoreBoard, {name, score}];
    allScores.sort((a, b) => b.score - a.score);
    let index = allScores.findIndex(ref => 
      ref.name === name && ref.score === score
    );
    return index < 5;
}

  return (
    <div className={` mx-auto max-w-lg grid ${isSubmit ? 'grid-cols-1' : 'grid-cols-2'} `} >
      
      {!isSubmit && isTopScore({score}) && 
      <form className="max-w-sm mx-auto pr-4" onSubmit={handleSubmit}>
        <div className="mb-5 text-left">
          <label htmlFor="name" className="block mb-1 text-sm font-bold text-amber-900 dark:text-white">
            Pseudo* <span className="text-xs">(4 caractères min.)</span>
          </label>
          <input type="text" id="name" className="bg-gray-50 border border-amber-900 text-amber-900 text-sm rounded-lg block w-full p-2.5" placeholder="survivor-du-37" required  value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="flex items-center">
          <button disabled={name.length <= 3} type="submit" className={`text-white border-amber-900 bg-amber-800 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center   ${name.length > 3 ? ' border-amber-900 bg-amber-800 hover:bg-amber-700 cursor-pointer' : 'cursor-not-allowed border-gray-900 bg-gray-400'} `}>Enregistrer</button>
        </div>
      </form>
      }

      <ScoreBoard scoreBoard={scoreBoard}/>
  </div>
  )
}