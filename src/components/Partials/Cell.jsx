import HouseIcon from "../../assets/img/icons/cabin.svg"
import ForestIcon from "../../assets/img/icons/tree.svg"
import FoodIcon from "../../assets/img/icons/fish-plate.svg"
import MountainIcon from "../../assets/img/icons/mountain.svg"
import VolcanoIcon from "../../assets/img/icons/volcano.svg"

export function Cell({cell,onClick}){
  const icons = {
    forest: ForestIcon,
    house: HouseIcon,
    food: FoodIcon,
    mountain : MountainIcon, 
    volcano : VolcanoIcon
  }

  return (
    <button className= " hover:bg-gray-200 cursor-pointer w-15 h-15 cell border bg-white text-amber-700 p-2" onClick={onClick}>
      {icons[cell.type] && 
        <div className="relative">
          <img src={icons[cell.type]} className="relative w-10 h-10"/>
          {cell.people >0 &&
          <div className="absolute -top-1 -end-1 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-amber-600 bg-white border-2 border-amber-600 rounded-full  dark:border-gray-900">
            {cell.people}
          </div>}
        </div>
      }
    </button>
  )
}