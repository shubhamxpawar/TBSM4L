import React, { useState, useRef } from 'react'

export const Music_card = (props) => {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlayback = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(props.url)
    }

    if (!playing) {
      audioRef.current.play()
      setPlaying(true)
    } else {
      audioRef.current.pause()
      setPlaying(false)
    }
  }

  return (
    <div className='w-full my-2 mx-auto py-2 px-4 bg-slate-800/30 hover:bg-slate-700/50 h-16 flex justify-between text-white rounded-2xl select-none backdrop-blur-xs'>
      <div className='flex'>
        <p className='mr-4 cursor-pointer text-xl' onClick={handlePlayback}>
          {playing ? '❚❚' : '▶'}
        </p>
        <div className='flex flex-col'>
          <p>{props.songname}</p>
          <p className='text-gray-400 text-sm'>{props.artist}</p>
        </div>
      </div>
      <p className='my-auto text-sm'>{props.len}</p>
    </div>
  )
}
