import React from 'react'

export const Music_loading = () => {
  
  return (
    <div className='w-full my-2 mx-auto py-2 px-4 moving-gradient h-16 flex justify-between text-white rounded-2xl select-none backdrop-blur-xs'>
      <div className='flex'>
        <p className='mr-4 cursor-pointer text-xl' ></p>
        <div className='flex flex-col'>
          <p></p>
          <p className='text-gray-400 text-sm'></p>
        </div>
      </div>
      <p className='my-auto text-sm'></p>
    </div>
  )
}
