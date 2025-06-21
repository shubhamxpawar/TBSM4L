import React, { useEffect, useState } from 'react'
import { Music_card } from '../components/Music_card'
import { getSongsByAlbum } from '../utils/FetchSongs'
import { getCachedAlbum, setCachedAlbum } from '../utils/AlbumSongs'

export const N = () => {

  const [AllSongs, setAllSongs] = useState(null)

  useEffect(() => {
    const loadSongs = async () => {
      const cached = getCachedAlbum('N')
      if (cached) {
        setAllSongs(cached)
        return
      }

      const fresh = await getSongsByAlbum('N')
      setAllSongs(fresh)
      setCachedAlbum('N', fresh)
    }

    loadSongs()
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
              url={song.url} className=""/>
          )
        }
      </div>
    </div>
  )
}
