import React from 'react'
import {FaTshirt} from "react-icons/fa"

const JerseyNumber = ({number}) => {
  return (
    <div className='flex flex-col items-center'>
        <FaTshirt className='text-gray-300 h-4 w-4' />
        {number}
    </div>
  )
}

export default JerseyNumber