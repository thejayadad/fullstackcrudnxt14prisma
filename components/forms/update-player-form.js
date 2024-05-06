'use client'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import { updatePlayer } from '@/lib/actions/update-player'
import { Input } from '@nextui-org/react'
import JerseyNumberInput from './jersey-number-input'
import PlaysRanInput from './plays-ran-input'
import SportSelectionInput from './sport-selection-input'
import { Toaster } from 'react-hot-toast'

const UpdatePlayerForm = ({player}) => {
    const [name, setName] = useState(player.name)
    const[jerseyNumber, setJerseyNumber] = useState(player.jersey)
    const [plays, setPlays] = useState(player.plays)
    const [selectSport, setSelectSport] = useState(player.sport)
    const [updating, setUpdating] = useState(false)
    const router = useRouter()
       //Handle name change function
       const handleNameChange = (event) => {
        setName(event.target.value)
    }

    //Handle jersey number change
    const handleJerseyNumberChange = (value) => {
        setJerseyNumber(value)
    }
    //handle player plays ran
    const handlePlayschange = (value) => {
        setPlays(value)
    }
    //function to select sport
    const handleSportSelection = (sport) => {
        setSelectSport(sport)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setUpdating(true)
            await updatePlayer({id: player.id, name, jersey: parseInt(jerseyNumber), plays, sport:selectSport})
            router.push("/")
        } catch (error) {
            console.log("Failed to update player " + error)
        } finally {
            setUpdating(false)
        }
    }
  return (
    <form
    onSubmit={handleSubmit}
    className='mt-4 flex flex-col gap-4 cursor-pointer'
    >
            <div>
            <span className='text-primary'>Enter The players name</span>
            <Input
                type='text'
                placeholder='Name'
                value={name}
                onChange={handleNameChange}
            />
        </div>
        <div>
        <span className='text-primary'>Enter The players jersey number</span>
            <JerseyNumberInput
                value={jerseyNumber}
                onChange={handleJerseyNumberChange}
            />
        </div>
        <div>
        <span className='text-primary'>Enter the amount of plays by the player</span>
            <PlaysRanInput
            value={plays}
            onChange={handlePlayschange}
            />
        </div>
        <div>
        <span className='text-primary'>Select the players sport below</span>
            <SportSelectionInput
                onSelect={handleSportSelection}
            />
        </div>
        <button
        disabled={updating}
        className='bg-gray-700 p-2 rounded-md text-white hover:bg-gray-200'
        >
            {updating ? "Updating..." : "Update"}
        </button>
        <Toaster position='top-center' />
    </form>
  )
}

export default UpdatePlayerForm