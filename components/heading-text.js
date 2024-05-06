import React from 'react'

const HeadingText = ({title, description}) => {
  return (
    <div className='flex flex-col'>
        <h1 className='title-font font-medium sm:text-xl md:text-2xl lg:text-3xl text-gray-800'>{title}</h1>
        <p className='leading-relaxed text-gray-500 font-extralight tracking-tight'>{description}</p>
    </div>
  )
}

export default HeadingText