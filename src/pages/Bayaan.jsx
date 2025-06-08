import React from 'react'
import { Music_card } from '../components/Music_card'

const allSongs = [
  { index: 1, title: "Intro", artists: "Seedhe Maut", len: "0:25" },
  { index: 2, title: "Shaktimaan", artists: "Seedhe Maut, Sez on the Beat", len: "3:05" },
  { index: 3, title: "Gehraiyaan", artists: "Seedhe Maut, Sez on the Beat, Vaksh", len: "3:42" },
  { index: 4, title: "Uss Din", artists: "Seedhe Maut, Sez on the Beat", len: "3:02" },
  { index: 5, title: "Jolly (skit)", artists: "Seedhe Maut, Sez on the Beat", len: "0:23" },
  { index: 6, title: "Meri Baggi", artists: "Seedhe Maut, Sez on the Beat", len: "3:18" },
  { index: 7, title: "Dehshat", artists: "Seedhe Maut, Sez on the Beat", len: "2:56" },
  { index: 8, title: "Pnp", artists: "Seedhe Maut, Sez on the Beat", len: "3:01" },
  { index: 9, title: "Pankh", artists: "Seedhe Maut, Sez on the Beat, Bawari Basanti", len: "3:47" },
  { index: 10, title: "Edokdog (skit)", artists: "Seedhe Maut, Sez on the Beat", len: "0:37" },
  { index: 11, title: "Kyu", artists: "Seedhe Maut, Sez on the Beat", len: "5:08" },
  { index: 12, title: "Chalta Reh", artists: "Seedhe Maut, Sez on the Beat", len: "3:50" }
];

export const Bayaan = () => {
  return (
    <div className='pb-0 flex justify-center z-0 bg-fixed w-full min-h-screen max-h-auto bg-[url(https://i.ytimg.com/vi/FgkkRPu4a0s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwHQSLzrT_aHQQrwYsMRT33BCTFw)] bg-cover bg-center bg-no-repeat '>
      <div className='mx-6 mt-26 p-3 w-full h-full max-h-auto z-10 bg-slate-800/50 rounded-3xl backdrop-blur-xs'> 

      {
        allSongs.map((item) => 
          <Music_card no={"item.index"} songname={item.title} artist={item.artists} len={item.len} className=""/>
        )
      }
       
      </div>
    </div>
  )
}
