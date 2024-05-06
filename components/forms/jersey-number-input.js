'use client'
import React from 'react'

const JerseyNumberInput = ({value, onChange}) => {
    //function to handle button clicks
    const handleButtonClick = (number) => {
        onChange(value + number)
    }
    //handle input change
    const handleInputChange = (event) => {
        onChange(event.target.value);
    }
    //clear input function
    const handleClear = () => {
        onChange('')
    }
  return (
    <div className='cursor-pointer'>
        <input
        type='text'
        placeholder='Jersey Number'
        value={value}
        onChange={handleInputChange}
        className='border border-gray-300 rounded-md px-3 py-2 mb-4'
        />
        <div className='grid grid-cols-3 gap-2'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
                <button
                key={index}
                type='button'
                onClick={() => handleButtonClick(number)}
                className='border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100'
                >
                {number}
                </button>
            ))}
            <button
            type='button'
            onClick={handleClear} 
            className='border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100'
            >
                Clear
            </button>
        </div>
    </div>
  )
}

export default JerseyNumberInput