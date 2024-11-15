import React from 'react'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import { Outlet } from 'react-router-dom'

const LayoutClinet = () => {
  return (
    <div className='wrapper flex justify-between overflow-hidden'>
      <SideBarLeft />
      <Outlet/>
      <SideBarRight />
    </div>
  )
}

export default LayoutClinet