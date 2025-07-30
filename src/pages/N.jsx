import React, { useEffect, useState } from 'react'
import { Music_card } from '../components/Music_card'
import songdata from '../SongData.json'

export const N = () => {

  const [AllSongs, setAllSongs] = useState(null)

  useEffect(() => {
    setAllSongs(songdata[2])
  }, [])

  return (
    <div className='pb-0 flex justify-center absolute w-full h-full max-h-auto bg-[url(https://i.ytimg.com/vi/x06EOpzffuI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBBIQvhGqNgDN8t-KSZbIsLVtw4Wg)] bg-cover bg-center bg-no-repeat '>
      <div className='mx-6 mt-26 p-3 w-full h-full bg-slate-800/50 rounded-3xl backdrop-blur-2xs'> 
        {
          AllSongs && AllSongs.map((song) => 
            <Music_card 
              key={song.index} 
              songname={song.title} 
              artist={song.artists} 
              len={song.duration} 
              url="https://scpsqyfmefnohijyjnjl.supabase.co/storage/v1/object/sign/albums/Nayaab/Seedhe%20Maut%20-%20Batti.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ZGExZWY2OS04MWIwLTQyMTgtOTlkMC05MDg0N2Y2MDllZjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhbGJ1bXMvTmF5YWFiL1NlZWRoZSBNYXV0IC0gQmF0dGkubXAzIiwiaWF0IjoxNzUxMzAzMjIzLCJleHAiOjE3NTE5MDgwMjN9.1fl1pENrQ2KI-WCQpCnQfNkP7fsISWSxJ0IRahkFQk8" className=""/>
          )
        }
      </div>
    </div>
  )
}
