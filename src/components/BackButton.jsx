import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function BackButton({to}) {
    const navigator = useNavigate();
  return (
    <button className='w-10 h-10 bg-violet-500 text-white rounded-full' onClick={()=>navigator(to)}>
        <i className="text-xl fas fa-angle-left"></i>
    </button>
  )
}

export default BackButton