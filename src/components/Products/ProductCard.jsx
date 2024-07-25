import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import Button from '../Shared/Button';


const ProductCard = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {
                data.map((data)=>
                (
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                     key={data.id} className='group'>
                        <div className='relative'>
                            <img src={data.img} alt="" className='h-[180px] w-[260px] object-cover rounded-md bg-gray-500' />
                            <div className='absolute top-1/2 place-items-center -translate-x-1/2 left-1/2 -translate-y-1/2 w-full h-full text-center
                                             group-hover:backdrop-blur-sm hidden group-hover:flex justify-center items-center duration-200 '>
                                <Button 
                                    text={"Add to Cart"} 
                                    bgcolor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            
                            
                            
                            </div>    

                         </div>
                         <div className='leading-7 '> 
                            <h2 className='font-semibold text-center'>{data.title}</h2>
                            <h2 className='flex font-bold items-center justify-center '><FaIndianRupeeSign  className='text-2xl text-gray-500 '/>
                            {data.price}</h2>
                         </div>    
                    </div>   
                ))
            }
        </div>
    </div>
  )
}

export default ProductCard