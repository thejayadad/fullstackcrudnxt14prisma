import Box from '@/components/box'
import DeleteButton from '@/components/delete-button'
import UpdatePlayerForm from '@/components/forms/update-player-form'
import HeadingText from '@/components/heading-text'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

const SingleCollection = async ({params}) => {
  const {id} = params
  const player = await prisma.player.findUnique({
    where: {
      id: id
    }
  })
  return (
    <section className='p-6'>
      <Box>
        <div className='flex items-center justify-between mb-6'>
          <Link 
          className='flex items-center gap-1'
          href={'/'}>
            <FiArrowLeft /> Back
          </Link>
          <div>
            <DeleteButton playerId={player.id}/>
          </div>
        </div>
        <HeadingText
          title={'Players Page'}
          description={'Update the players information below'}
        />
        <div className='flex flex-col gap-8 mt-8'>
          <UpdatePlayerForm
          player={player}
          />
        </div>
      </Box>
    </section>
  )
}

export default SingleCollection