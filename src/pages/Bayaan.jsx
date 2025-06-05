import React from 'react'
import { Music_card } from '../components/Music_card'

export const Bayaan = () => {
  return (
    <div className='mt-26 pb-6 flex justify-center absolute w-full h-full max-h-auto'>
      <div className='mx-6 p-3 w-full h-full bg-slate-800 rounded-3xl'> 
        <Music_card no="1" songname="Intro" artist="Seedhe Maut" len="0:25" />
      </div>
    </div>
  )
}
