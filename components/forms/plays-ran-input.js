'use client'
import React from 'react'

const PlaysRanInput = ({value, onChange}) => {
    //increment & decrement functionality
    //increment
    const incrementPlays = () => {
        onChange(value + 1)
    }
    //decrement
    const decrementPlays = () => {
        onChange(value - 1)
    }
  return (
    <div className='flex items-center pt-1 w-full'>
        <button
        type='button'
        onClick={decrementPlays}
        className='px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-400'
        >
            -
        </button>
        <input
        type='number'
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        className='border border-gray-500 rounded-none px-3 text-center w-full'
        />
               <button
        type='button'
        onClick={incrementPlays}
        className='px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-400'
        >
            +
        </button>
    </div>
  )
}

export default PlaysRanInput