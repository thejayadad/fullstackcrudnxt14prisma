import React from 'react'

const SiteHeader = () => {
  return (
    <section>
        <div className='flex items-center flex-col space-y-2 justify-center'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>
                Game Log Tracker
            </h1>
            <p className='leading-relaxed text-gray-600 font-extralight tracking-tighter'>
                The home of little league game log
            </p>
        </div>
    </section>
  )
}

export default SiteHeader