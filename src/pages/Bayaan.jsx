import React from 'react'
import { Music_card } from '../components/Music_card'

export const Bayaan = () => {
  return (
    <div className='pb-0 flex justify-center absolute w-full h-full max-h-auto bg-[url(https://i.ytimg.com/vi/FgkkRPu4a0s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwHQSLzrT_aHQQrwYsMRT33BCTFw)] bg-cover bg-center bg-no-repeat '>
      <div className='mx-6 mt-26 p-3 w-full h-full bg-slate-800/50 rounded-3xl backdrop-blur-xs'> 
        <Music_card no="1" songname="Intro" artist="Seedhe Maut" len="0:25" className=""/>
      </div>
    </div>
  )
}
