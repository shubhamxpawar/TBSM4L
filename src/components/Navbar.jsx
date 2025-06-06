import React from 'react'
import { NavLink} from 'react-router'

export const Navbar = () => {

  return (
    <div className='mx-auto max-w-auto md:w-[680px] w-[690px] flex border-1 border-slate-600 bg-stone-900 text-gray-200 rounded-full shadow-xl shadow-black/15 md:text-base text-sm'>
      <NavLink className='hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] transition duration-500 rounded-l-full py-4 px-8 hover:bg-gray-300 delay-150 hover:text-gray-900' to={'/'}>Home</NavLink>
      <NavLink className='hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] transition duration-500 p-2 px-4 py-4 hover:bg-gray-300 delay-100 hover:text-gray-900' to={'/Bayaan'}>Bayaan</NavLink>
      <NavLink className='hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] transition duration-500 p-2 px-8 py-4 hover:bg-gray-300 delay-100 hover:text-gray-900' to={'/N'}>न</NavLink>
      <NavLink className='hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] transition duration-500 p-2 px-4 py-4 hover:bg-gray-300 delay-100 hover:text-gray-900' to={'/Nayaab'}>Nayaab</NavLink>
      <NavLink className='hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] transition duration-500  md:px-4 px-2 py-4 hover:bg-gray-300 delay-100 hover:text-gray-900 flex' to={'/Lunchbreak'}><p className='mr-2'>Lunch</p> <p>Break</p> </NavLink>
      <NavLink className='hover:shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] transition duration-500 p-2 px-4 py-4 hover:bg-gray-300 delay-100 hover:text-gray-900' to={'/Kshama'}>Kshama</NavLink>
      <NavLink className='hover:shadow-[0_0_60px_5px_rgba(255,255,255,0.2)] transition rounded-r-full duration-500 p-2 px-6 py-4 hover:bg-gray-300 delay-100 hover:text-gray-900' to={'/Dl91'}>DL91</NavLink>
    </div>
  )
}
