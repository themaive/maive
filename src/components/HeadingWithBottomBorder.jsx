import React from 'react'

function HeadingWithBottomBorder({heading, color, size}) {
  return <div className='w-screen flex-col flex justify-center items-center'>
    <h1 className={`font-semibold text-${size ? size : '3xl'} text-${color ? color : 'black'} capitalize text-center`}>{heading}</h1>
    <hr className='w-25 h-2 bg-violet-600 mt-2 rounded-full'/>
  </div>
}

export default HeadingWithBottomBorder