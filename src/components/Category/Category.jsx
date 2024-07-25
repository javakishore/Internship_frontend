import React from 'react'
import Image1 from "../../assets/category/earphone.png"
import Image2 from "../../assets/category/watch.png"
import Image3 from "../../assets/category/macbook.png"
import Image0 from "../../assets/hero/headphone.png"
import Button from '../Shared/Button'


const Category = () => {
  return (
    <div className='py-8 '>
        <div className='container'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4  '>
{/* 1 */}       <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl
                                relative h-[320px] flex place-items-center  '>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400 font-bold'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-2xl xl:text-4xl font-bold opacity-40 mb-2'>Earphone</p>
                            <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} className='w-[320px] -right-7 absolute bottom-0 cursor-pointer hover:scale-105 duration-300'/>

                </div>



{/* 2 */}       <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70 text-white rounded-3xl
                                relative h-[320px] flex place-items-center  '>
                                <div>
                                    <div className='mb-4'>
                                        <p className='mb-[2px] text-black font-bold'>Enjoy</p>
                                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                        <p className='text-3xl xl:text-4xl font-bold opacity-80 mb-2'>Gadget</p>
                                        <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                                        />
                                    </div>
                                </div>
                                <img src={Image2} className='w-[320px] absolute right-[-73px] lg:top-[40px] cursor-pointer hover:scale-105 duration-300' />
            
                </div>




                <div>
    {/* 3 */}       <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-brandYellow/70 text-white rounded-3xl
                                    relative h-[320px] flex place-items-center  '>
                                    <div >
                                        <div className='mb-4'>
                                            <p className='mb-[2px] text-black font-bold' >Enjoy</p>
                                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                            <p className='text-2xl xl:text-5xl font-bold opacity-80 mb-2'>Laptop</p>
                                            <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                                            />
                                        </div>
                                    </div>
                                    <img src={Image3} className='w-[200px] absolute top-1/2 -translate-y-1/2 -right-1 sm:w-[180px] cursor-pointer hover:scale-105 duration-300'  />
                
                    </div>





                 </div>
                 
{/* 1 */}       <div className='py-10 pl-5 bg-gradient-to-br from-teal-400 to-black/70 text-white rounded-3xl
                                relative h-[320px] flex place-items-center  '>
                                <div>
                                    <div className='mb-4'>
                                        <p className='mb-[2px] text-black font-bold'>Enjoy</p>
                                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                        <p className='text-xl xl:text-3xl font-bold opacity-80 mb-2 '>Headphone</p>
                                        <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                                        />
                                    </div>
                                </div>
                                <img src={Image0} className='w-[150px] -right-2 absolute top-1/2 -translate-y-1/2  cursor-pointer hover:scale-105 duration-300'/>
            
                            </div>

                 


            </div>
        </div>
    </div>
  )
}

export default Category