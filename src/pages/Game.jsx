import { Button } from "../components/Partials/Button.jsx";
import { Map } from "../components/Map.jsx";
import { QuestList } from "../components/QuestList.jsx";
import { ResourceBar } from "../components/ResourceBar.jsx"
import { useState, useEffect } from 'react';
import  ReturnIcon from "../assets/img/icons/utils/return.svg"
import { useResource} from "../store/Resources.js";
import { usePlayground} from "../store/Playground.js";
import { useNavigate } from "react-router-dom";

export function Game() {

  const navigate = useNavigate();
  
  const { food, addFood, addWood, people, getAvailablePeople } = useResource();
  const { changeScore } = usePlayground();

  const [time, setTime] = useState(0);
  const [quests, setQuests] = useState([
    {
      'id' :1,
      'title' : "Bien manger, c'est le début du bonheur",
      'subtitle' : "Récolter 3 nourritures",
      'done' : true
    },
    {
      'id' :2,
      'title' : "Apprentie déforestateur en herbe",
      'subtitle' : "Récolter 3 bois",
      'done' : true
    }, 
    {
      'id' :3,
      'title' : "Pierre ? Présent !",
      'subtitle' : "Récolter 3 cailloux",
      'done' : false
    },
    {
      'id' :4,
      'title' : "Pôle Emploi",
      'subtitle' : "Recruter un animal",
      'done' : false
    },
      {
      'id' :5,
      'title' : "France travail",
      'subtitle' : "Recruter un animal à partir du 1er janvier 2024",
      'done' : false
    },
  ])

 //Augmentation de time de 1 chaque seconde
  useEffect(() => {
    const timer = setInterval(()=> setTime(prev => prev + 1),1000)
    return () => clearInterval(timer);
    }, []
  );

  useEffect(() => {
    useResource.getState().initResource()
    usePlayground.getState().initPlayground(5,5)

  }, []);

  //Toute les 10 secondes, on diminue la nourriture de people, et on regarde si on a perdu
  useEffect(() => {
      if (time % 10 === 0 && time != 0) {
        addFood(- people)
        //if(food - people < 0) { setTimeout(() => {onGameOver(time)}, 2)}
        if(food - people < 0)   {
          changeScore(time)
          navigate('/gameover');
        }
      }

      if (time % 5 === 0 && time != 0) {
        const forestPeople = people - getAvailablePeople();
        addFood(forestPeople);
        addWood(forestPeople)
      }
    }
    ,[time])

  function handleValidateQuest(questToUpdate) {
    setQuests(prevQuests =>
      prevQuests.map(q =>
        q.id === questToUpdate.id
          ? { ...q, done: !q.done }
          : q
      )
    );
  }

  return (
    <div className="">
      <Button text='Retourner au menu' onClick={()=> navigate("/")} color="light" iconSrc={ReturnIcon} />
      <div className="grid grid-cols-5 mt-4">
        <QuestList quests={quests} validateQuest={handleValidateQuest}/>
        <div className="col-span-4 flex flex-col items-center">
          <div>
            <ResourceBar />
            <p className="mb-4 font-bold text-lg">Temps de survie : {time}s</p>
          </div>
          <Map />
        </div>
      </div>
    </div>
)}