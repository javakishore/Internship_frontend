import React from 'react'

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 '>
      <div className='container'>
        <div style={{background:data.bgColor}} 
         className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
          <div className='p-6 sm:p-8'>
            <p data-aos="slide-right" className='text-xl'>{data.discount}</p>
            <h1 data-aos="zoom-out" className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
            <p data-aos="slide-right" className='text-xl'>{data.date}</p>
          </div>
              {/* 2 column */}
          <div data-aos="fade-up" className='h-full flex items-center'>
            <img src={data.image} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover hover:scale-150 duration-500 ' />
          </div>
                 {/* 3 column */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p data-aos="zoom-out" className='font-bold text-3xl'>{data.title2}</p>
            <p data-aos="fade-up" className='text-8xl sm:text-5xl font-bold'>{data.title3}</p>
            <p data-aos="fade-up" className='text-xl tracking-wide leading-5'>{data.title4}</p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button className=' bg-white text-primary cursor-pointer hover:scale-125 duration-300 py-2 px-5 rounded-full relative z-10'>Shop Now</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner