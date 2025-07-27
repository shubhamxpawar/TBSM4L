import React, { useEffect, useState } from 'react'
import { Music_card } from '../components/Music_card'
import { Music_loading } from '../components/Music_loading'
//import { getCachedAlbum, setCachedAlbum } from '../utils/AlbumSongs'
import songdata from '../SongData.json'

export const Bayaan = () => {

  const [AllSongs, setAllSongs] = useState(null)

  useEffect(() => {
    // const loadSongs = async () => {
    //   const cached = getCachedAlbum('Bayaan')
    //   if (cached) {
    //     setAllSongs(cached)
    //     return
    //   }

    //   const fresh = await getSongsByAlbum('Bayaan')
    //   setAllSongs(fresh)
    //   setCachedAlbum('Bayaan', fresh)
    // }

    // loadSongs()

    setAllSongs(songdata[0])
  }, [])

  return (
    <div className='pb-0 flex justify-center z-0 bg-fixed w-full min-h-screen max-h-auto bg-[url(https://i.ytimg.com/vi/FgkkRPu4a0s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwHQSLzrT_aHQQrwYsMRT33BCTFw)] bg-cover bg-center bg-no-repeat '>
      <div className='mx-6 mt-26 p-3 w-full h-full max-h-auto z-10 bg-slate-800/50 rounded-3xl backdrop-blur-xs'> 

      {
        AllSongs &&
         AllSongs.map((song, index) => 
          <Music_card 
            key={song.index} 
            songname={song.title} 
            artist={song.artists} 
            len={song.duration} 
            url={song.source}
          />
        ) 
        // : 
        // (Array.from({ length: 10 }).map((_, index) => (
        //       <Music_loading key={index}/>
        //     )))
      }
       
      </div>
    </div>
  )
}
