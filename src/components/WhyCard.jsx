import React from 'react'

function WhyCard({ item, isLast }) {

    const style = isLast ? 'w-full bg-white flex justify-center items-center p-4' : 'w-2/4 max-w-100 bg-white flex justify-center items-start flex-col p-4';

    return (
        <div className={`${style} m-4`}>
            <div className='w-15 h-15 bg-violet-600 rounded-full'></div>

            <div className={`${isLast ? 'w-2/4' : ''}`}>
                    <h2 className={`${isLast ? 'ms-4 w-fit' : 'w-80  my-4'} text-2xl text-black font-bold capitalize`}>{item.title}</h2>
                <p className={`
                    ${isLast ? 'ms-4' : 'w-80'} text-m font-medium text-gray-700`}>{item.description}</p>
            </div>
        </div>
    )
}

export default WhyCard