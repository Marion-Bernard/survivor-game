export function QuestList({quests, validateQuest}) {
  
  const filteredQuest = quests.filter((quest,index) => {
     // Si c'est la dernière quête ou si la suivante n'est pas terminée, on la garde
    return !quests[index + 1]?.done
  }).slice(0,3)

  const gameCompleted = quests.filter((quest) => {return !quest.done}).length === 0 

  function renderQuest(quest, index, lastQuest){
    
    let commonClass="inline-flex  px-4 py-2  text-xs font-medium border border-gray-200  focus:z-10"
    let color = quest.done ? 'bg-gray-200 text-gray-600' : 'bg-white text-gray-800 hover:bg-gray-200'

    if (index === 0) 
      commonClass = commonClass + "border-b-0 rounded-t-lg"
    if (index === lastQuest-1) {
      commonClass = commonClass + " border border-t-0 rounded-b-lg"
    }

    return (
      <button key={quest.title} type ='button'  className={`${commonClass} ${color}`} onClick={ ()=>validateQuest(quest)} disabled={quest.done}> 
        <div className="flex items-start w-full">
          <div className="mr-4 mt-1">
            <input type="checkbox" id={quest.title} name={quest.title} checked={quest.done} 
              readOnly disabled={quest.done}/>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm text-left font-semibold">{quest.title}</p>
            <p className="text-left">{quest.subtitle}</p>
          </div>
        </div>
      </button>
    );
  }

  return(
    
    <div>
      <div className="inline-flex flex-col rounded-md shadow-xs" role="group">
        {filteredQuest.map((quest, index) => renderQuest(quest, index, filteredQuest.length))}
      </div>
      { gameCompleted && 
        <div className="p-4 mb-4 text-sm text-amber-600 font-semibold" role="alert">
          <span className="font-bold">Bravo ! </span> Vous avez terminé toutes les quêtes.
        </div> }
    </div>
  )
}