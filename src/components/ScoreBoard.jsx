export function ScoreBoard({scoreBoard}){
  return (
    <div className="relative overflow-x-auto mx-auto max-w-lg">
      <p className="font-bold text-lg text-amber-800 pb-3">HightScore</p>
      <table className="mx-auto text-sm text-left rtl:text-right text-gray-500 bg-white rounded-2xl">
        <thead className="text-xs text-gray-700 uppercase bg-gray-5">
          <tr>
            <th scope="col" className="px-6 py-2 border-b-amber-800 border-b-2"> Nom </th>
            <th scope="col" className="px-6 py-2  border-b-amber-800 border-b-2"> Score </th>
          </tr>
        </thead>
        <tbody>
          {scoreBoard.map((line,index)=> (
            <tr key={index}>
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap "> {line.name} </th>
              <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"> {line.score} </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  )
}