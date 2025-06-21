import React, { useEffect, useState } from 'react'
import { Music_card } from '../components/Music_card'
import { getSongsByAlbum } from '../utils/FetchSongs'
import { getCachedAlbum, setCachedAlbum } from '../utils/AlbumSongs'

export const Dl91 = () => {

  const [AllSongs, setAllSongs] = useState(null)

  useEffect(() => {
    const loadSongs = async () => {
      const cached = getCachedAlbum('DL91')
      if (cached) {
        setAllSongs(cached)
        return
      }

      const fresh = await getSongsByAlbum('DL91')
      setAllSongs(fresh)
      setCachedAlbum('DL91', fresh)
    }

    loadSongs()
  }, [])

  return (
    <div className='pb-0 flex justify-center absolute w-full h-full max-h-auto bg-[url(https://i.ytimg.com/vi/mSkIMP-uOOs/maxresdefault.jpg)] bg-cover bg-center bg-no-repeat '>
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
