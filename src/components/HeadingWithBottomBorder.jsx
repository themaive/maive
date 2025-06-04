import React from 'react'

function HeadingWithBottomBorder({heading}) {
  return <div className='w-screen flex-col flex justify-center items-center'>
    <h1 className='font-semibold text-3xl text-black capitalize text-center'>{heading}</h1>
    <hr className='w-25 h-2 bg-violet-600 mt-2 rounded-full'/>
  </div>
}

export default HeadingWithBottomBorder