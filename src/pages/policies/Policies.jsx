import React from 'react'
import Header from '../../components/Header'
import { Link, Outlet } from 'react-router-dom'

function Policies() {
  return (
    <section >
        <Header></Header>
        <main className='container mx-auto py-10'>
            <div className="max-w-fit pe-10 border-2 border-gray-50 flex justify-start items-center w-auto h-auto py-4">
                <ul>
                    <li className='font-medium p-4 py-2 text-sm text-violet-600'>
                        <Link to={'/terms-and-conditions'}>Terms and Conditions</Link>
                    </li>
                    <li className='font-medium p-4 py-2 text-sm text-violet-600'>
                        <Link to={'/privacy-policy'}>Privacy policy</Link>
                    </li>
                    <li className='font-medium p-4 py-2 text-sm text-violet-600'>
                        <Link to={'/return-and-refund'}>Return and Refund</Link>
                    </li>
                    <li className='font-medium p-4 py-2 text-sm text-violet-600'>
                        <Link to={'/shipping-and-deliveryP'}>Shipping and delivery</Link>
                    </li>
                </ul>
            </div>
        </main>
    </section>
  )
}

export default Policies