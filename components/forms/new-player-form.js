'use client'
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'react-hot-toast'
import { Input, user } from '@nextui-org/react'
import JerseyNumberInput from './jersey-number-input'
import PlaysRanInput from './plays-ran-input'
import SportSelectionInput from './sport-selection-input'
import { createPlayer } from '@/lib/actions/new-player'
import { FaLeaf } from 'react-icons/fa'

const NewPlayerForm = () => {
    const [name, setName] = useState("")
    const[jerseyNumber, setJerseyNumber] = useState("")
    const [plays, setPlays] = useState(0)
    const [selectSport, setSelectSport] = useState("")
    const [submitting, setSubmitting] = useState(false)
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
    //ability to submit the player
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setSubmitting(true)
            await createPlayer({name, jersey: parseInt(jerseyNumber), plays, sport: selectSport})
            toast.success("Player created succesfully")
            router.push("/")
            setName("")
            setJerseyNumber("")
            setPlays(0)
            setSelectSport("")
        } catch (error) {
            toast.error("Failed to add player")
        } finally {
            setSubmitting(false)
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
        disabled={submitting}
        className='bg-gray-700 p-2 rounded-md text-white hover:bg-gray-200'
        >
            {submitting ? "Submitting..." : "Submit"}
        </button>
        <Toaster position='top-center' />
    </form>
  )
}

export default NewPlayerForm