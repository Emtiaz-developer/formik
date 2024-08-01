import React from 'react'
import RegFromComp from '../Components/Registartion/Index'

const Registration = () => {
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center'>
    <div className='w-2/4 p-4 items-center flex justify-between shadow-md rounded-md'>
    <div className='w-[48%]'>Animation/img</div>
    <div className='w-[48%]'>
    <RegFromComp/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Registration