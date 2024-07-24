import React from 'react'
import SubMenuOne from './SubMenuOne'

export default function({setOpenMenuOne}) {
  return (
    <div className='flex justify-between bg-navbarBackground w-full absolute left-0 top-12 z-50  py-5' onMouseLeave={()=> setOpenMenuOne(false)}>
        <div className='w-[70%] flex mx-auto'>
        <SubMenuOne/>
        <SubMenuOne/>
        <SubMenuOne/>
        </div>
    </div>
  )
}
