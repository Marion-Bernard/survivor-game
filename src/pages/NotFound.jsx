import { Title, Subtitle } from "../components/Partials/Titles"
import { Button } from "../components/Partials/Button";
import { useNavigate } from "react-router-dom"
import NotFoundIcon from "../assets/img/icons/utils/404.svg"

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-8">
      <div className="flex flex-col items-center gap-4">
        <img src={NotFoundIcon} className='w-20 object-center'/>
        <Subtitle text='Page Not Found'/>
        <div className="flex gap-4">
          <Button text="Retourner à la page d'accueil" onClick={()=>navigate('/')} color="light" />
        <Button text='Aller jouer' onClick={()=>navigate('/game')} color="dark"/>
        </div>
      </div>
    </div>
  )
}