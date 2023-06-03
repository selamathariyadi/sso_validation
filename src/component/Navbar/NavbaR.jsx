import React from 'react'

import Logo from '../../asset/images/logoNav.png'
import DropDown from '../Dropdown/DropDown'
import {MdNotifications} from 'react-icons/md'
export const NavbaR = () => {
  return (
    <>
    <div className='w-full-[100%] flex justify-between items-center'>
        <div className='mt-2'>
            <img src={Logo} alt="" className='mx-4 block w-80'  />
        </div>
        <div className='mx-5 flex'>
            <span className='px-4 py-2'><MdNotifications size={30}/></span>
            <DropDown/>
        </div>
    </div>
    </>
  )
}
