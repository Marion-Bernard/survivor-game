export function Resource({img, value, type}) {

  return (
    <div className="flex gap-1">
      <img src={img} alt={type} className="w-8"/>
      {type ==='people' ? 
        <p className="text-amber-950 bg-amber-300 px-3 m-1 border-amber-500 font-bold rounded-xl">{value[0]} / {value[1]}</p> 
      :
      <p className="text-amber-950 bg-amber-300 px-3 m-1 border-amber-500 font-bold rounded-xl">{value}</p>
      }
    </div>
    )
}