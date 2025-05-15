export function Button({text=null, onClick, color, iconSrc=null}) {
  let className = "";

  switch (color) {
    case "light":
      className =
        "text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300";
      break;

    case "dark":
      className =
        "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300";
      break;

    default:
      className =
        "text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300";
      break;
  }

   return(
    <button type="button" className={`${className} font-medium rounded-lg cursor-pointer flex gap-2 py-2.5 me-2 mb-2 text-sm px-5`} onClick={onClick}> 
      {iconSrc && <img src={iconSrc} className="w-4"/> }
      {text} 
    </button>
  )
}