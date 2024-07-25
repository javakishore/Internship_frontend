import React from 'react'
import Heading from "../Shared/Heading"
import ProductCard from './ProductCard'
import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"
 import Img5 from "../../assets/product/p-5.jpg"
import Img9 from "../../assets/product/p-9.jpg"
import Img7 from "../../assets/product/p-7.jpg" 
import Img6 from "../../assets/product/p-6.png" 



const ProductsData=[
  {
    id:1,
    img:Img1,
    title:"Boat Headpone",
    price:"2200",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title:"Amazfit",
    price:"4200",
    aosDelay:"200",
  },
  {
    id:3,
    img:Img3,
    title:"HperX",
    price:"3200",
    aosDelay:"400",
  },

  {
    id:4,
    img:Img4,
    title:"JBL",
    price:"1400",
    aosDelay:"600",
  },

]

const ProductsData2=[
  {
    id:5,
    img:Img5,
    title:"Cosmic Byte",
    price:"800",
    aosDelay:"0",
  },
  {
    id:9,
    img:Img9,
    title:"Soney",
    price:"1000",
    aosDelay:"200",
  },
  {
    id:7,
    img:Img7,
    title:"IEM",
    price:"1500",
    aosDelay:"400",
  },

  {
    id:6,
    img:Img6,
    title:"Charger",
    price:"400",
    aosDelay:"600",
  }, 

]

const Products = () => {
  return (
    <div>
        <div className='container'>
            <Heading title="Our Product" subtitle={"Explore Our Products"}/>
            <ProductCard data={ProductsData}/>
            <ProductCard data={ProductsData2}/>


        </div>
        
        
        
    </div>
  )
}

export default Products