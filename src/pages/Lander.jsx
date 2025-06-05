import React from 'react'

export const Lander = () => {
  return (
    <div className='h-screen w-full overflow-hidden absolute z-0 bg-[url("/main-bg.jpg")] bg-cover bg-center bg-no-repeat object-contain'>
      <div className='h-screen w-full absolute z-0 inset-0 bg-gradient-to-t from-black via-black/80 to-transparent'></div>
      <div className='relative z-10 h-full text-white flex flex-col justify-end' > 
        <div className='russo-text my-12 mx-8'>
          <p className='md:text-8xl text-5xl md-6'> Tera Bhai Seedhe Maut !!</p> 
          <p className='text-2xl text-white my-3'> Stream high quality Seedhe maut songs without any ads</p>
          {/* <p className='font-mono font-bold text-2xl'>Made by a seedhe maut fan, for a seedhe maut fan</p> */}
        </div>
      </div>
    </div>
  )
}
