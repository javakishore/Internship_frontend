import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import headphone from "./assets/hero/headphone.png"
import Products from './components/Products/Products'
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from "aos"
import "aos/dist/aos.css"
import LoginPopup from './components/LoginPopup/LoginPopup'
import { Route, Routes } from 'react-router-dom'


const BannerData={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 29 Jun",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Wireless Over Ear Headphones W/Up to 30Hrs Playtime, 40Mm Drivers, Signature Sound, Beast Mode, Enx, Dual Pairing, Bt V5.2, Instant Voice Assistant, Adaptive Fit",
  bgColor:"#f42c37",

};


const BannerData2={
  discount:"30% OFF",
  title:"Happy Hours",
  date:"16 Jan to 29 Jun",
  image:smartwatch2,
  title2:"Smart Solo",
  title3:"Winter Sale",
  title4:"Smart Watch with 1.69 Square HD Display, DIY Watch Face Studio, Coins,HR & SpO2 Monitoring,7 Days Battery Life, Crest App Health Ecosystem, Multiple Sports Modes",
  bgColor:"#2dcc6f",

};

const App = () => {
  const[orderPopup,setOrderPopup]=useState(false);

  const handleOrderPopup=()=>
  {
    setOrderPopup(!orderPopup);
  }

  const [loginPopup, setLoginPopup] = useState(false);
  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  useEffect(()=> {
    AOS.init(
      {
        duration:2000,
        easing:"ease-in-slate",
        delay:100,
        offset:100,
       
        
      }
    )
    AOS.refresh();
  },[]);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      

      
      < Navbar handleOrderPopup={handleOrderPopup} handleLoginPopup={handleLoginPopup}/>
      <div className="hidden lg:block">
      <Routes >
        <Route path='/blogs'element={<Products/>}/>
        <Route path="/shop" element={<Category/>}/>
        <Route path="/about" element={<Footer/>}/>
        <Route path="/upp"   element={<Blogs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path ="/partners" element={<Partners/>}/>
      </Routes>
        </div>
      < Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      
      <Blogs/>
      
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup}
         handleOrderPopup={handleOrderPopup}/>
      <LoginPopup loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} />   
      <Routes>
        <Route path='/blogs'element={<Products/>}/>
        <Route path="/about" element={<Footer/>}/>
        <Route path="/services" element={<Services/>}/>
        
        
        

      </Routes>
      
      </div>
  )
}

export default App