import { useResource } from "../../store/Resources"

export function Resource({img, value, type}) {
  let truc = type === 'people' ? useResource.getState().people : ""

  return (
    <div className="flex gap-1">
      <img src={img} alt={type} className="w-8"/>
      {type ==='people' && truc ? 
        <p className="text-amber-950 bg-amber-300 px-3 m-1 border-amber-500 font-bold rounded-xl">{value} / {truc} </p> 
      :
      <p className="text-amber-950 bg-amber-300 px-3 m-1 border-amber-500 font-bold rounded-xl">{value}</p>
      }
    </div>
    )
}