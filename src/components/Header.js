import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-[#374151] p-4'>
        <input type='checkbox' className='mr-8 ml-2'/>

        <p className='text-gray-400 font-semibold text-sm w-[25vw]'>NAME</p>
        <p className='text-gray-400 font-semibold text-sm w-[20vw]'>POSITION</p>
        <p className='text-gray-400 font-semibold text-sm w-[20vw]'>COUNTRY</p>
        <p className='text-gray-400 font-semibold text-sm w-[20vw]'>STATUS</p>
    </div>
  )
}

export default Header