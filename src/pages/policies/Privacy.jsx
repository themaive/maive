import React from 'react'
import Header from '../../components/Header'

import privacy from '../../services/privacy_policy.json';
import Footer from '../../components/Footer';

function Privacy() {
    return (
        <section>
            <Header></Header>
            <main className='w-2/4 mx-auto p-5 border-2 border-violet-600 mb-10'>
                <h1 className="font-semibold text-4xl text-black capitalize mb-5">{privacy.title}</h1>
                {privacy.subheading && <h2 className='text-lg my-4 text-black '>{privacy.subheading}</h2>}
                {privacy.description && <h4 className='text-lg text-red-600 font-normal'>* {privacy.description}</h4>}

                <ul className='mt-4'>
                    {
                        privacy.list.map((item, index) => (
                            <li className='text-black' key={index}>
                                <h2 className="text-2xl font-semibold capitalize">{index + 1}. {item.title}</h2>
                                {item.items &&
                                    <ul className='mx-4 my-2'>
                                        {
                                            item.items.map((item, index) => (
                                                <li className='text-lg' key={index}><span className='font-medium'>-</span>&nbsp;{item.content}</li>
                                            ))
                                        }
                                    </ul>
                                }

                                {item.conclusion && <p className='font-normal text-lg my-2 mx-5'>{item.conclusion}</p>}

                            </li>
                        ))
                    }
                </ul>
            </main>
            <Footer></Footer>
        </section>
    )
}

export default Privacy