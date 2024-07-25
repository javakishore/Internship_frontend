import React from 'react';
import brand1 from "../../assets/brand/br-1.png"
import brand2 from "../../assets/brand/br-2.png"
import brand3 from "../../assets/brand/br-3.png"
import brand4 from "../../assets/brand/br-4.png"
import brand5 from "../../assets/brand/br-5.png"





const Partners = () => {
  return (     /* hidden */
    <div className=' mt-8   '>
        <div className="container">
        <p className='text-4xl text-center p-9 dark:text-gray-400 font-bold  lg:text-5xl '> PARTNERS </p>
            <div className='grid grid-cols-5 gap-7 place-items-center opacity-50  bg-gray-200 dark:bg-white/10 py-8'>
               
                <img src={brand1} alt="brand" className='dark:invert' />
                <img src={brand2} alt="brand" className='dark:invert' />
                <img src={brand3} alt="brand" className='dark:invert' />
                <img src={brand4} alt="brand" className='dark:invert' />
                <img src={brand5} alt="brand" className='dark:invert' />


            </div>    
        </div>
    </div>
  )
}

export default Partners