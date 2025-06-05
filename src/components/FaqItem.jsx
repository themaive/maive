import React, { useState } from 'react'
import angleDown from '../assets/icons/angle-down.png';
import angleUp from '../assets/icons/angle-up.png';

function FaqItem() {

    const [extended, setExtended] = useState(false);

    const handleExtended = () => {
        setExtended(extended => !extended);
    }

  return (
    <div className={`${extended ? 'h-full' : 'h-auto'}`}>
        <div className="flex justify-between">
            <h2 className="text-black text-xl font-semibold">1. How long does a project take?</h2>
            <button onClick={handleExtended} className={`${extended ? 'rotate-180' : 'rotate-0'} text-violet-600 text-2xl px-5 cursor-pointer bg-violet-50`}> 
               <i className="fas fa-angle-down"></i>
            </button>
        </div>

        {extended && 

            <div className="my-4 w-full h-full bg-violet-100 text-black p-4">
                Hello
            </div>
        
        }

    </div>
  )
}

export default FaqItem