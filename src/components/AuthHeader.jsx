import React from 'react'
import brandLogo from '../assets/icon.png';
import BrandLogo from '../components/BrandLogo';
import { Link } from 'react-router-dom';

function AuthHeader({signIn}) {
  return (
    <header className='w-12/12 lg:px-16 lg:py-4 flex justify-between items-center'>
        <BrandLogo></BrandLogo>

        {signIn && <Link to={'/auth/forgot-password'} className='text-violet-500'>Forgot password?</Link>}

    </header>
  )
}

export default AuthHeader