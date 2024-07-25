import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MenuLinks=[
    {
        id:1,
        name:"Home",
        link:"/",
    },

    {
        id:2,
        name:"SHOP",
        link:"/shop",
    },
    
    {
        id:3,
        name:"About",
        link:"/about",
    },
    {
        id:4,
        name:"Top Offers",
        link:"/blogs",
    },
   
]

const DropdownLinks=[
    {
        id:1,
        name:"Upcoming Products",
        link:"/upp",
    },
    {
        id:2,
        name:"Services",
        link:"/services",
    },
    {
        id:3,
        name:"Partners",
        link:"/partners",
    },
]


const Navbar = ({handleOrderPopup ,handleLoginPopup }) => {

  return (
    <div className='bg-white duration-200 relative z-40
                         dark:bg-gray-900 dark:text-white'>
        <div className='py-4'>
            <div className="container flex justify-between items-center " >


                <div className='flex  items-center gap-4'>
                    <a href="#" className="text-primary tracking-widest text-2xl uppercase
                    sm:text-3xl ">ESHOP </a>
                    
                     {/* Menu items */}

                    <div className="hidden lg:block" >

                       
                        <ul className='flex items-center  gap-4  ' >
                              
                             {
                              MenuLinks.map((data,index) =>
                              (<li key={index}>
                                <Link className='inline-block px-4 font-semibold text-gray-500 hover:text-black 
                                dark:hover:text-white duration-200' to={data.link}>{data.name}  </Link>
                              </li>))
                            } 
                            {/* Dropdown 50.30 */} 
                        <li className='relative cursor-pointer group'>
                            <a href='' className='flex items-center gap-[3px] font-semibold text-gray-500
                                                    dark:hover:text-white py-2'>quick Links
                            <span>
                                <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                            </span>
                            </a>
                            
                            {/* drop down link */}
                            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md p-2 
                                             dark:bg-gray-900  dark:text-white'>
                                <ul className='space-y-2'>
                                    {
                                        DropdownLinks.map((data,index)=>(
                                            <li key={index}>
                                            <Link className='text-gray-500 hover:text-black duration-200 hover:bg-primary/20 w-full inline-block rounded-md font-semibold
                                            dark:hover:text-white '
                                             to={data.link}>{data.name} </Link>

                                            </li>

                                        )
                                        )
                                    }
                                </ul>
                            </div>

                        </li>

                        </ul>
                                
                    </div>
                </div>

                {/* NAVEBAR */}
                <div className='flex justify-between items-center gap-4'>
                    
                    <div className='relative group hidden sm:block'>
                    <input type='text ' placeholder='search'
                        className='search-bar' />

                    <IoMdSearch className='text-3xl text-gray-600 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200
                                            dark:text-gray-400 ' />
                    </div>



<a href='#' onClick={handleLoginPopup} className='relative  p-3'>
    <FaUserCircle  className='text-3xl text-gray-600 
                                                    dark:text-gray-400'/>
</a>






                    {/* order button */}
                      <button className='relative  p-3' onClick={handleOrderPopup}>

                      <FaCartShopping  className='text-xl text-gray-600 
                                                    dark:text-gray-400'/>

                        <div className='w-4 h-4 bg-red-600 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xl'>4
                            </div>                            
                        </button>

                                      
                        

                    {  /* Dark modesearch bar */ }
                    <div>
                        <DarkMode/>
                    </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default Navbar