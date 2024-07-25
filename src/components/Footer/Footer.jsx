import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const FooterLinks=[
   
    {
        title:"About",
        link:"/about",
    },
    {
        title:"Services",
        link:"/services",
    },
    {
        title:"Top Offers",
        link:"/blogs",
    },

]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-10'>

                <div className='py-4 text-ellipsis'>
                     
                <a href="#" className="text-primary tracking-widest text-2xl uppercase
                    sm:text-3xl    ">ESHOP </a>
                

                <p className='text-gray-600 dark:text-white/70 lg:pr-24'> Eshop offers a convenient online platform where customers can browse and purchase a vast array of products with fast delivery options.</p> 
                <p className='text-2xl text-gray-600 mt-3  dark:text-gray-300'>Crafted with love delivered with happiness</p> 
                <a 
                  href="#"
                  target="_blank"
                  className='inline-block bg-primary text-white py-2 px-4 mt-4 text-base rounded-full'>
                Visit out Location</a>  
                </div>
                {/* FOOTER */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-2 md:pl-10'>
                    <div className='py-8 px-4' >
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Get to Know Us</h1>
                        <a href="/"  className=' text-gray-600 hover:text-black duration-300 hover:dark:text-white dark:text-gray-300 ' >Home</a>
                        <ul className='space-y-3 mt-3'>  
                            {
                                FooterLinks.map((data,index) =>
                                (
                                    <li key={index}>
                                        <Link to={data.link} className='text-gray-600 hover:text-black duration-300 hover:dark:text-white dark:text-gray-300' >
                                        {data.title}
                                        </Link>

                                    </li>
                                ))

                            }


                        </ul>
                    </div>
                                {/* Address */}
                    <div className='py-8 px-4  sm:col-auto'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Details </h1>

                        <div className=''>
                            <div className='flex items-center gap-4'>
                            <FaLocationArrow />
                            <p>Chennai , Tamil Nadu </p>
                            <p className=''> India</p>
                            </div>
                            <div className='flex items-center gap-4 mt-7' >
                                <FaMobileAlt/>
                                <p>+91 1234567890</p>

                            </div>
                            <div className='flex items-center gap-4 mt-7 '>
                                <a href='#'>
                                    <FaInstagram className='text-3xl hover:text-pink-600 duration-300'/>
                                </a>
                                <a href='#'>
                                    <FaFacebook className='text-3xl hover:text-blue-600 duration-300'/>

                                </a>
                                <a href='#'>
                                    <FaLinkedin className='text-3xl hover:text-blue-400 duration-300'/>

                                </a>

                            </div>

                        </div>

                    </div>



                </div>
            </div>  
        </div>
    </div>
  )
}

export default Footer