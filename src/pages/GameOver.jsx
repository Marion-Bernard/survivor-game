import { Button } from "../components/Partials/Button"
import { Title, RandSubtitle } from "../components/Partials/Titles";
import { SaveScore } from "../components/SaveScore";
import GameOverIcon from "../assets/img/icons/grave.svg"
import { useNavigate } from "react-router-dom";
import { usePlayground } from "../store/Playground";

export function GameOver({ scoreBoard, updateScoreBoard}){

 const navigate = useNavigate();
 const { score } = usePlayground();

  let subtitles = [
    "Darwin a validé ta sortie.",
    "Tu étais à deux clics de réussir. Dommage.",
    "Survivre, c’est surfait.",
    "Bravo, tu as débloqué le succès 'Snack ambulant'.",
    "RIP, aventurier en carton",
    "La prochaine fois, lis le manuel.",
    "Si tu es un chat, il te reste 8 vies. Sinon, too bad!"
  ];

  function navigateTo(path){
    navigate("/"+path)
  }

  return(
    <div className="flex flex-col justify-between mt-3">
      <div className=" text-amber-800"> 
        <span className="flex justify-center">
          <img className="w-24 mr-7"src={GameOverIcon}/>
          <Title text="Perdu"/>
          <img className="w-24 ml-7"src={GameOverIcon}/>
        </span>
        <RandSubtitle subtitles={subtitles}/>
      </div>
      
      <div className="flex-grow w-full flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4">Ton score : {score}</h2>
        <SaveScore scoreBoard={scoreBoard} updateScoreBoard={updateScoreBoard} />
      </div>
      
      <div className="flex flex-row gap-4 pt-4 mx-auto">
        <Button text='Rejouer' onClick={() => navigateTo('/game')} color="light" />
        <Button text='Retourner au menu' onClick={() => navigateTo('')} color="light" />
      </div> 
    </div>
  )
}