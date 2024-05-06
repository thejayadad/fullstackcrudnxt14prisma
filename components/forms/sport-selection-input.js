'use client'
import React, {useState} from 'react'

const SportSelectionInput = ({onSelect}) => {
    const sports = ['Football', 'Baseball', 'Basketball', 'Soccer', 'Track & Field']
    const [selectedSport, setSelectedSport] = useState('')
    //function handle sport selection
    const handleSportSelect = (sport)=> {
        setSelectedSport(sport)
        onSelect(sport)
    }
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 w-full lg:grid-cols-5 gap-2'>
        {
            sports.map((sport, index) => (
                <button
                key={index}
                type='button'
                onClick={() => handleSportSelect(sport)}
                className={`border border-gray-300 rounded-md p-3 hover:bg-gray-100 ${selectedSport === sport ? 'bg-pruple-200' : ''}`}
                >
                    {sport}
                </button>
            ))
        }
    </div>
  )
}

export default SportSelectionInput