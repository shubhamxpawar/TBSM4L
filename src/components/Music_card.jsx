import React from 'react'

export const Music_card = (props) => {
  return (
    <div className='w-full my-1 mx-auto py-2 px-4 bg-slate-800 hover:bg-slate-700 h-16 flex justify-between text-white rounded-2xl select-none'>

      <div name="song info" className='flex'>
        <p className='mr-4 cursor-pointer'>
          ▶
        </p>
        <div name="song name and artist" className='flex flex-col'>
          <p>{props.songname}</p>
          <p className='text-gray-400'>{props.artist}</p>
        </div>
      </div>

      <p className='my-auto'>{props.len}</p>
    </div>
  )
}
