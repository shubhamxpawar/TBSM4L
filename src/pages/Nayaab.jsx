import React from 'react'
import { Music_card } from '../components/Music_card'

export const Nayaab = () => {
  return (
    <div className='pb-0 flex justify-center absolute w-full h-full max-h-auto bg-[url(https://i.imgur.com/I4eY9s0.jpeg)] bg-cover bg-center bg-no-repeat '>
      <div className='mx-6 mt-26 p-3 w-full h-full bg-slate-800/50 rounded-3xl backdrop-blur-2xs'> 
        <Music_card no="1" songname="Intro" artist="Seedhe Maut" len="0:25" className=""/>
      </div>
    </div>
  )
}
