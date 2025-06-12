import React from 'react'
import Header from '../../components/Header'
import refund from '../../services/refund.json';
import Footer from '../../components/Footer';

function Refund() {
    return (
        <section>
            <Header></Header>
            <main className='w-2/4 mx-auto p-5 border-2 border-violet-600 mb-10'>
                <h1 className="font-semibold text-4xl text-black capitalize mb-5">{refund.title}</h1>
                {refund.subheading && <h2 className='text-lg my-4 text-black '>{refund.subheading}</h2>}
                {refund.description && <h4 className='text-lg text-red-600 font-normal'>* {refund.description}</h4>}

                <ul className='mt-4'>
                    {
                        refund.list.map((item, index) => (
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

                <h4 className="text-sm my-5 font-semibold text-black">
                  Refunds, if approved, will be processed within 7 working days.
                </h4>

                <h5 className="text-black text-lg font-medium">
                  We reserve the right to deny refund requests for reasons including:
                </h5>
                <ul className='list-disc mx-10 my-5'>
                  <li className='text-black font-norma'>Change of mind</li>
                  <li className='text-black font-normal'>Mistaken purchases</li>
                </ul>

            </main>
            <Footer></Footer>
        </section>
    )
}

export default Refund