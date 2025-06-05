import React from 'react'
import brandLogo from '../assets/icon.png';
import BrandLogo from '../components/BrandLogo';

function AuthHeader() {
  return (
    <header className='w-screen lg:px-16 lg:py-4 flex justify-start'>
        <BrandLogo></BrandLogo>
    </header>
  )
}

export default AuthHeader