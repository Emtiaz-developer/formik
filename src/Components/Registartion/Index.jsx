import { useFormik } from 'formik'
import React from 'react'

const RegFromComp = () => {

    const formik = useFormik({
        onSubmit:console.log("Hello")
    })
  return (
    <>
    
    <div>
        <h1 className='text-xl font-fontBold mb-3'>Registration for your new journey</h1>
        <form onSubmit={formik.handleSubmit}>
            <input placeholder='enter your name' className='w-full border border-slate-400 rounded-md px-3 py-2 mb-3' />
            <input placeholder='enter your email' className='w-full border border-slate-400 rounded-md px-3 py-2 mb-3' />
            <input placeholder='enter your password' className='w-full border border-slate-400 rounded-md px-3 py-2 mb-3' />
            <button className='text-white bg-slate-900 rounded-md font-fontBold w-full py-2'>Sign Up</button>
        </form>
        
    </div>
    </>
  )
}

export default RegFromComp