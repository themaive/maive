import React from 'react'
import brandLogo from '../assets/icon.png';
import { Link } from 'react-router-dom';

function Header() {

    const links = [
        {id:0, title: "home", route:'/'},
        {id:1, title: "services", route:'/'},
        {id:2, title: "products", route:'/'},
        {id:3, title: "our work", route:'/'},
        {id:4, title: "how it works", route:'/'},
        {id:5, title: "contact us", route:'/'}
    ];

  return (
    <header className='bg-transparent m-auto px-20 flex justify-between items-center py-4'>
        <div className="brand flex justify-start items-center">
            <img src={brandLogo} alt="" className="w-15" />
            <h1 className='text-2xl font-semibold text-black'>Maive</h1>
        </div>
        <nav className='w-fit p-4 rounded-full backdrop:blur-2xl' style={{backgroundColor:'#FFFFFF75'}}>
            <ul className='flex'>
                {
                    links.map((item)=> (
                        <li key={item.id} className='list-none text-sm mx-4'>
                            <Link to={''} className='font-semibold text-gray-900 capitalize hover:text-violet-600 transition-colors'>
                            {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        <a href="#" className="rounded-full transition-colors bg-transparent border-2 hover:bg-violet-500 hover:text-white border-violet-600 text-black p-3 py-2 font-semibold">Get started</a>
    </header>
  )
}

export default Header