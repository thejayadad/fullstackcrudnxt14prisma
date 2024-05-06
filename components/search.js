'use client'
import React, {useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import { useSearchParams, useRouter } from 'next/navigation'

const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query') || '')
  const handleSearch = (event) => {
    const newQuery = event.target.value.trim()
    setQuery(newQuery)
    const params = new URLSearchParams(searchParams)
    params.set('query', newQuery)
    router.replace(`/?${params.toString()}`)
  }
  return (
    <div className='relative pt-4 w-full cursor-pointer'>
        <input

            type='text'
            placeholder='Search...'
            className='w-full py-2 pl-10 border border-primary rounded-md focus:outline-none fous:border-primary/60'
            onChange={handleSearch}
            value={query}
        />
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FiSearch  className='text-gray-400 mt-4'/>
        </div>
    </div>
  )
}

export default Search