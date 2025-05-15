import { RandSubtitle, Title } from '../components/Partials/Titles';
import { Button } from '../components/Partials/Button';
import GameIcon from '../assets/img/icons/tiger-face.svg'
import { useNavigate } from 'react-router-dom';

export function Menu({version,}) {

  const navigate = useNavigate();

  const subtitles = [
    "Survivre n’est que le début",
    "À la lisière du monde", 
    "Un seul choix : tenir bon", 
    "Quand la nature reprend ses droits"
  ]

  function handleClick(){
    alert("© Jeu créé par Marion B.");
  }

  function navigateGame() {
    navigate('/game')
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-8">
      <div className="flex flex-col items-center gap-4">
        <img src={GameIcon} className='w-20 object-center'/>
        <Title text='The eye of the tiger'/>
        <RandSubtitle subtitles={subtitles}/>
        <div className="flex gap-4">
          <Button text='Play' onClick={navigateGame} color="light" />
          <Button text='Credits' onClick={handleClick} color="dark"/>
        </div>
      </div>
      <p className='mb-4 text-sm'>Version : {version}</p>
    </div>

)}