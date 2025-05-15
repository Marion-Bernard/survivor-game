import HouseIcon from "../../assets/img/icons/cabin.svg"
import ForestIcon from "../../assets/img/icons/cabin.svg"

export function Cell({cell,onClick}){

  const icons = {
    forest: ForestIcon,
    house: HouseIcon,
}

  return (
    <button className= "hover:bg-gray-200 cursor-pointer w-15 h-15 cell border bg-white text-amber-700 p-2" onClick={onClick}>
       {icons[cell.type] && <img src={icons[cell.type]} className="w-10 h-10"/>}
    </button>
  )
}