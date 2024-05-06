'use client'

import React, {useState} from 'react'
import { FiTrash } from 'react-icons/fi'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { deletePlayer } from '@/lib/actions/delete-player'

const DeleteButton = ({playerId}) => {
    const [deleting, setDeleting] = useState(false)
    const router = useRouter()
    const handleDelete = async () => {
        try {
            setDeleting(true)
            await deletePlayer({id: playerId})
            router.push("/")
        } catch (error) {
            console.log('Error deleting player ' + error)

        } finally{
            setDeleting(false)
        }
    }
  return (
    <Button
    variant='light'
    onClick={handleDelete}
    disabled={deleting}
    >
        {deleting ? "Deleting...." : <FiTrash className='h-4 w-4' />}

    </Button>
  )
}

export default DeleteButton