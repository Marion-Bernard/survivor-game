import { Resource } from "./Partials/Resource"
import FoodIcon from "../assets/img/icons/fish-plate.svg"
import WoodIcon from "../assets/img/icons/wood.svg"
import TigerIcon from "../assets/img/icons/tiger-face.svg"
import StoneIcon from "../assets/img/icons/stone.svg"
import { useResource } from "../store/Resources"

export function ResourceBar() {
  const people = Math.max(0,useResource.getState().getAvailablePeople())
  return (
    <div className=" mb-4 w-fit px-6 py-2 bg-white/90 border border-gray-900 rounded-xl shadow-md">
      <div className="flex gap-6 items-center">
        <Resource type="people" img={TigerIcon} value={people} />
        <Resource type="wood" img={WoodIcon} value={useResource.getState().wood} />
        <Resource type="food" img={FoodIcon} value={useResource.getState().food} />
        <Resource type="stone" img={StoneIcon} value={useResource.getState().stone} />
      </div>
    </div>
  );
}