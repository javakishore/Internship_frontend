import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from "../../assets/blogs/up-1.png" 
import Img2 from "../../assets/blogs/up-2.png"
import Img3 from "../../assets/blogs/up-3.png"




const BlogData=[
    { 
        title:"Air Pods",
     subtitle:"Truly Wireless in-Ear Earbuds with 30dB ANC, 360° Spatial Audio Effect, 12.4mm Dynamic Bass Boost Driver with Dolby Atmos Support, Upto 40Hrs Battery and Fast Charging ",
     published:"Upcoming Launch Date-July 24,2024",
     image:Img1,
     aosDelay:"0"
    
    },
    { 
        title:"Home Theatre",
        subtitle:"120W Sound bar, 5.1 Channel Home Theatre with Mega subwoofer, Dual Rear Satellites, AUX, USB & Bluetooth, 3 Equalizer Modes, Stylish Remote & LED Display",
        published:"Upcoming Launch Date-July 27,2024",
        image:Img2,
        aosDelay:"200"
    },
    { title:"Neck Band",
        subtitle:"Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant",
        published:"Upcoming Launch Date-July 31,2024",
        image:Img3,
        aosDelay:"400"
    },
        
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container'>
            <Heading  title="Reacent News" subtitle={"Upcomming  Products"}/>

            <div className='grid grid-cols-1  md:grid-cols-3 gap-6 gap-y-8 sm:gap-28 md:gap-28'>
            {
                BlogData.map((data)=>(
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay} 
                    key={data.title} className='bg-white dark:bg-gray-900'>
                        {/* image */}
                        <div  className='overflow-hidden rounded-2xl mb-2 '>
                            <img src={data.image} alt="" className='w-full h-[400px]   rounded-2xl hover:scale-110 duration-500  object-fill'/>

                         </div> 

                         <div className='space-y-2 text-center '>
                            <p className='text-3xl text-gray-500 font-bold '>{data.published} </p>
                            <p className='text-2xl font-bold line-clamp-1 '>{data.title}</p>
                            <p className=' text-base text-gray-600 dark:text-gray-400'>{data.subtitle}</p>


                         </div>  

                    </div>    
                ))



            }
            </div>
        </div>
    </div>
  )
}

export default Blogs