import React from 'react'

export const Lander = () => {
  return (
    <div className='h-screen w-full overflow-hidden absolute z-0 md:bg-[url("/main-bg.jpg")] bg-[url(https://i.pinimg.com/736x/f3/f6/69/f3f669ac4445df8577681e6c597aaeb1.jpg)] bg-cover bg-center bg-no-repeat '>
      <div className='h-screen w-full absolute z-0 inset-0 bg-gradient-to-t from-black via-black/80 to-transparent'></div>
      <div className='relative z-10 h-full text-white flex flex-col justify-end' > 
        <div className='russo-text mb-8 sm:mb-12 mx-8'>
          <p className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl md-6 hover:bg-gradient-to-tl from-red-900 to-white hover:text-transparent bg-clip-text inline-block' id='ul'> Tera Bhai Seedhe Maut !!</p> 
          <p className='text-lg sm:text-xl md:text-2xl text-white my-3 leading-relaxed'> Stream high quality Seedhe maut songs without any ads</p>
          {/* <p className='font-mono font-bold text-2xl'>Made by a seedhe maut fan, for a seedhe maut fan</p> */}
        </div>
      </div>
    </div>
  )
}
