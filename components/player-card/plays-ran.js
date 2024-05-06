import React from 'react'
import { FaRunning } from 'react-icons/fa'

const PlaysRan = ({plays}) => {
  return (
    <div className='flex flex-col items-center'>
        <FaRunning className='h-4 w-4 text-gray-300' />
        {plays}        
    </div>
  )
}

export default PlaysRan