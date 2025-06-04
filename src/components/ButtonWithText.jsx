import React from 'react'

function ButtonWithText({title, icon}) {
  return (
    <a href="#" className='flex justify-center items-center w-fit px-20 py-4 rounded-full bg-black text-lg hover:text-black hover:bg-white transition-colors'>
        <span className='mx-2'>{title}</span>
        <i className={`fas fa-${icon}`}></i>
    </a>
  )
}

export default ButtonWithText