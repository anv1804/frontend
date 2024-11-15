import React from 'react'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import { Outlet } from 'react-router-dom'

const LayoutClinet = () => {
  return (
    <div className='wrapper grid grid-cols-cline-layout justify-between overflow-y-scroll scrollbar-hide'>
      <SideBarLeft />
      <div className="content overflow-y-scroll scrollbar-hide">
        <Outlet />
      </div>
      <SideBarRight />
    </div>
  )
}

export default LayoutClinet