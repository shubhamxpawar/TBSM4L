import React, { useEffect, useState } from 'react'
import { Music_card } from '../components/Music_card'
import songdata from '../SongData.json'

export const Nayaab = () => {

  const [AllSongs, setAllSongs] = useState(null)

  useEffect(() => {
    setAllSongs(songdata[3])
  }, [])

  return (
    <div className='pb-0 flex justify-center absolute w-full h-full max-h-auto bg-[url(https://i.imgur.com/I4eY9s0.jpg)] bg-cover bg-center bg-no-repeat '>
      <div className='mx-6 mt-26 p-3 w-full h-full bg-slate-800/50 rounded-3xl backdrop-blur-2xs'> 
        {
          AllSongs && AllSongs.map((song) => 
            <Music_card 
              key={song.index} 
              songname={song.title} 
              artist={song.artists} 
              len={song.duration} 
              url={song.url} className=""/>
          )
        }
      </div>
    </div>
  )
}
