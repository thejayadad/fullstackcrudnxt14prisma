import React from 'react'

const SportName = ({sport}) => {
    let backgroundColor;
    switch(sport.toLowerCase()){
        case "football":
            backgroundColor = "bg-green-300";
            break;
        case "basketball":
            backgroundColor = "bg-orange-300";
            break;
        case "baseball":
            backgroundColor = "bg-blue-300";
            break;
        case "soccer":
            backgroundColor = "bg-purple-300";
            break;
        case "track & field":
            backgroundColor = "bg-gray-300";
            break;
        default:
            backgroundColor = bg-red-300;
    }
  return (
    <div
    className={`inline-block p-1 rounded-md ${backgroundColor} text-white text-xs`}
    >
        {sport}
    </div>
  )
}

export default SportName