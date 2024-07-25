import React from 'react'
import Image1 from "../../assets/category/gaming.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/speaker.png"
import Image0 from "../../assets/category/mobile.png"
import Button from '../Shared/Button'


const Category = () => {
  return (
    <div className='py-8 '>
        <div className='container'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4  '>
{/* 1 */}       <div className='py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-50/70 text-white rounded-3xl
                                relative h-[320px] flex place-items-center  '>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px]  text-black font-bold'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-2xl xl:text-4xl font-bold text-gray-800 opacity-40 mb-2'>Console</p>
                            <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} className='w-[150px] -right-0.5 absolute  cursor-pointer hover:scale-105 duration-300'/>

                </div>



{/* 2 */}       <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl
                                relative h-[320px] flex place-items-center  '>
                                <div>
                                    <div className='mb-4'>
                                        <p className='mb-[2px] text-black font-bold'>Enjoy</p>
                                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                        <p className='text-3xl xl:text-4xl font-bold opacity-80 mb-2'>VR</p>
                                        <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                                        />
                                    </div>
                                </div>
                                <img src={Image2} className='w-[200px] absolute right-1 lg:top-[40px] cursor-pointer hover:scale-105 duration-300' />
            
                </div>




                <div>
    {/* 3 */}       <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/70 text-white rounded-3xl
                                    relative h-[320px] flex place-items-center  '>
                                    <div >
                                        <div className='mb-4'>
                                            <p className='mb-[2px] text-black font-bold'>Enjoy</p>
                                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                            <p className='text-2xl xl:text-4xl font-bold opacity-80 mb-2'>Speaker</p>
                                            <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                                            />
                                        </div>
                                    </div>
                                    <img src={Image3} className='w-[200px] absolute top-1/2 -translate-y-1/2 -right-1 sm:w-[180px] cursor-pointer hover:scale-105 duration-300'  />
                
                    </div>





                 </div>
                 
{/* 1 */}       <div className='py-10 pl-5 bg-gradient-to-br from-purple-800 to-slate-300/80 text-white rounded-3xl
                                relative h-[320px] flex place-items-center  '>
                                <div>
                                    <div className='mb-4'>
                                        <p className='mb-[2px] text-black font-bold'>Enjoy</p>
                                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                        <p className='text-3xl xl:text-3xl font-bold opacity-80 mb-2'>Mobile</p>
                                        <Button text="Browse" bgcolor="bg-primary" textColor={"text-white"}
                                        />
                                    </div>
                                </div>
                                <img src={Image0} className='w-[250px] -right-10 absolute top-1/2 -translate-y-1/2  cursor-pointer hover:scale-105 duration-300'/>
            
                            </div>

                 


            </div>
        </div>
    </div>
  )
}

export default Category