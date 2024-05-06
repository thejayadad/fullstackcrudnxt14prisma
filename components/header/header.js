import React from 'react'
import Box from '../box'
import ThemeToggle from './theme-toggle'

const Header = () => {
  return (
    <header className='p-6 border-b'>
        <Box >
            <div className='flex justify-between w-full items-center'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>
                    LOGO
                </h1>
                <ThemeToggle />
            </div>
        </Box>
    </header>
  )
}

export default Header