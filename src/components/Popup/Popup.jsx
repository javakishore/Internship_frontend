import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import Button from '../Shared/Button';


const Popup = ({orderPopup,handleOrderPopup}) => {
  return (
    <>
    {
       orderPopup && (

        <div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 blackdrop-blur-sm'>
            <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white  rounded-xl
                            dark:bg-gray-900 dark:text-white duration-200 '>
                <div className='flex items-center justify-between'>
                    <h1>Order Now</h1>
                    <div>
                    <IoCloseOutline
                        onClick={handleOrderPopup}
                        className='text-2xl cursor-pointer' />


                    </div>

                </div>
                {/* Form section 3.05.08*/ } 

                <div className='mt-4'>
                  <input type="tel" pattern="[0-9]{10}" placeholder='Phone Number'className='form-input' />
                  <input type='text' placeholder='PIN Code'className='form-input' />
                  
                  <input type='text' placeholder='Address' className='form-input' />

                  <div className='flex justify-center'>
                    <Button text="order now" bgcolor={"bg-primary"} textColor={"text-white"}/>
                  </div>



                </div>
                





            </div>
        </div>
    </div>
       ) 
    }


    </>
  )
}

export default Popup