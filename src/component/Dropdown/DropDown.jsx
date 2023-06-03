import React, { useState } from 'react'

import {AiFillCaretUp,AiFillCaretDown} from 'react-icons/ai'

export default function DropDown() {

    const [isOpen,setIsOpen] = useState(false)

  return (
    // <div className='relative flex flex-col items-center w-[340px] h-[340px] rounded-lg'>
    <div>
        <button  onClick={() => setIsOpen((prev) => !prev)}
        className='px-4 mt-2 mx-2 w-full flex items-center justify-between font-nano font-semibold text-lg rounded-md tracking-wider border-2 border-transparent active:border-gray-500 duration-200 active:text-white'>
            <span>USER ID</span>
            {!isOpen ? (
               
                <AiFillCaretDown className='h-4'/>
            ): (
                <AiFillCaretUp className='h-4'/>
            )}
        </button>
        {isOpen && 
        <div className='bg-green-300 absolute z-20 top-[55px] w-[140px] p-2 right-4 flex flex-col items-start rounded-md'>
            <div className='flex w-full flex-col  hover:bg-white cursor-pointer rounded-md'>
            <span className='p-2  font-nano font-semibold'>Home</span>
            </div>
            <div className='flex w-full flex-col hover:bg-white cursor-pointer rounded-md'>
            <span className='p-2 font-nano font-semibold'>Logout</span>
            </div>
        </div>

        }
    </div>
  )
}
