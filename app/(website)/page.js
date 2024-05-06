import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";
import Box from '@/components/box';
import SiteHeader from '@/components/site-header';
import Search from '@/components/search';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import PlayerCard from '@/components/player-card/player-card';
import prisma from '@/lib/prisma';


const HomePage = ({searchParams}) => {
  const query = searchParams?.query || "";
  return (
    <section className='p-6'>
      <Box>
        <SiteHeader />
        <div className='flex items-center gap-2'>
          <Search />
          <Link 
          className='flex items-center'
          href={'/new'}>
            <FiPlus />
            Add Player
          </Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
          <PlayerList query={query} />
        </div>  
      </Box>
    </section>
  )
}

async function PlayerList({query}){
  let collections;
  if(query) {
    collections = await prisma.player.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive"
        }
      }
    })
  } else {
    collections = await prisma.player.findMany({})
  }
  console.log("collections " + collections)
  if(collections.length === 0){
    return (
      <div className='text-center col-span-4'>
        <div className='flex flex-col space-y-1'>
          <h2 className='font-bold'>No Players Added</h2>
          <p className='font-light'>Start Tracking Players Today</p>
        </div>
      </div>
    )
  }
 return collections.map((collection) => (
  <PlayerCard key={collection.id} collection={collection} />
 )) 
}

export default HomePage