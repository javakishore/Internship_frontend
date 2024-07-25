import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/macbook.png"
import Button from '../Shared/Button';

const HeroData=[
  {
    id:1,
    img:Image1,
    Subtitle:"Beats sold",
    title:"Wireless",
    title2:"Headphone", 
  },

  {
    id:2,
    img:Image2,
    Subtitle:"Beats sold",
    title:"Wireless",
    title2:"Virtual", 
  },
  
  {
    id:3,
    img:Image3,
    Subtitle:"Beats sold",
    title:"Branded",
    title2:"Laptops", 
  },
]






const Hero = ({handleOrderPopup}) => {

  const settings={
    dots:false,
    arrows:false,
    infinity:true,
    speed:800,
    slidesToScroll:1,

    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,
  };

  return (
    <div className='container'>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[550px] hero-bg-color  flex justify-center items-center'>
          
          
          <div className='container pb-8 sm:pb-0' >  


            {/*       Hero section*/ }
          <Slider {...settings}>

          {
            HeroData.map((data)=>
            (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center order-2 relative z-10 sm:text-left  sm:order-1 '>
                      <h1 data-aos="zoom-out"
                          data-aos-duration="500"
                          data-aos-once="true"
                      
                      className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.Subtitle}</h1>
                      <h1 data-aos="zoom-out"
                          data-aos-duration="500"
                          data-aos-once="true"
                      
                      className='text-5xl sm:text-5xl lg:text-7xl font-bold'>{data.title}</h1>
      {/* 1.17.56 */} <h1 data-aos="zoom-out"
                          data-aos-duration="500"
                          data-aos-once="true"
                           className='text-4xl uppercase text-white dark:text-while/5 sm:text-[38px] md:text-[45px] xl:text-[100px] font-bold py-6'>{data.title2}</h1>
                      <div>
                        <Button text="Shop By Category" bgcolor="bg-primary" textColor="text-white"
                                handler={handleOrderPopup}/>
                      </div>

                    </div>
                    {/* Image selection */}
                    <div className='order-1 sm:order-2'>
                      <div
                        data-aos="zoom-out"
                        data-aos-duration="600"
                        data-aos-once="true"
                      
                      >
                        <img src={data.img}alt="no image" className=' w-[220px] h-[300px] object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] z-40 relative 
                                                sm:h-[450px] sm:w-[450px] sm:scale-100 lg:scale-110  Sm:'/>
                      </div>
                    </div>
                </div>

              </div>
            )

            
          )
          }

          </Slider>
        </div> 
      </div>
    </div>
  )
}

export default Hero