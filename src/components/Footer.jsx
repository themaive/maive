import React from 'react'
import brandLogo from '../assets/icon.png';
import instagramLogo from '../assets/instagram.png';


function Footer() {
  return (
    <footer className='w-screen h-2/4 bg-black'>
      <section className="container mx-auto w-full h-full flex justify-between items-start flex-col">
      <div className="w-full flex justify-center items-center">
        <section className=' w-2/4'>
          <div className="w-full flex justify-between items-start flex-col">
           <div className="brand flex justify-start items-center">
            <img src={brandLogo} alt="" className="w-25" />
            <h1 className='text-4xl font-semibold text-white'>Maive</h1>
          </div>
          <h2 className="font-semibold text-2xl text-white">From Concept to Code — Seamlessly.</h2>
          <a href="https://instagram.com/themaive.in/" target='_blank' className="flex justify-start items-center my-5">
            <img src={instagramLogo} alt="" className='w-8' />
            <span className='m-2'>themaive.in</span>
          </a>
        </div>
      </section>
      <section className='w-2/4 h-full flex justify-center items-center'>
        <div className="w-full h-full py-5">
          <div className="p-2">
            <h2 className="text-xl pb-1 font-semibold capitalize">Useful links
            </h2>
              <hr className='w-20 h-1 rounded-full bg-violet-500 border-0'/>
          </div>

          <ul className='mx-4'>
            <li className='font-semibold text-gray-400 text-sm mt-2 hover:text-gray-100 transition-colors'><a href="#">Home</a></li>
            <li className='font-semibold text-gray-400 text-sm mt-2 hover:text-gray-100 transition-colors'><a href="#">Services</a></li>
            <li className='font-semibold text-gray-400 text-sm mt-2 hover:text-gray-100 transition-colors'><a href="#">Products</a></li>
            <li className='font-semibold text-gray-400 text-sm mt-2 hover:text-gray-100 transition-colors'><a href="#">Our work</a></li>
            <li className='font-semibold text-gray-400 text-sm mt-2 hover:text-gray-100 transition-colors'><a href="#">About the founder</a></li>
            <li className='font-semibold text-gray-400 text-sm mt-2 hover:text-gray-100 transition-colors'><a href="#">How it works</a></li>
          </ul>

        </div>
        <div className="w-full h-full py-5">
            <div className="p-2">
              <h2 className="text-xl pb-1 font-semibold capitalize">Contact us
              </h2>
                <hr className='w-20 h-1 rounded-full bg-violet-500 border-0'/>
          </div>
          <ul className='mx-4 text-sm cursor-default'>
            <li className='font-semibold my-2'>Email : <a href="#" className='font-medium text-violet-500'>themaive@gmail.com</a></li>
            <li className='font-semibold my-2'>WhatsApp: <span className="font-medium text-violet-500">+91 9384727902</span></li>
            <li className='font-semibold my-2'>Location : <span className='font-medium text-violet-500'>Chennai, India.</span></li>
          </ul>
        </div>
      </section>
      </div>
      <section className='w-full'>
        <hr className='w-full border-2 border-violet-600 rounded-full'/>
      <div className="flex justify-center items-center">
        <ul className='w-full flex mx-auto justify-center items-center py-4'>
          <li  className='transition-colors text-md my-2 text-gray-400 hover:text-gray-100 capitalize px-2 border-r-2 border-gray-700'>
            <a href="#">terms and conditions</a>
          </li>
          <li className='transition-colors text-md my-2 text-gray-400 hover:text-gray-100 capitalize px-2 border-r-2 border-gray-700'>
            <a href="#">privacy policy</a>
          </li>
          <li className='transition-colors text-md my-2 text-gray-400 hover:text-gray-100 capitalize px-2 border-r-2 border-gray-700'>
            <a href="#">return and refund policy</a>
          </li>
          <li className='transition-colors text-md my-2 text-gray-400 hover:text-gray-100 capitalize px-2'>
            <a href="#">shipping and delivery policy</a>
          </li>
        </ul>
      </div>
      </section>
      </section>
    </footer>
  )
}

export default Footer