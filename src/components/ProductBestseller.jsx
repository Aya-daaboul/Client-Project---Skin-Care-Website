import React from 'react'
import lilac from '../assets/lilacsreum 1.png'
import serum from '../assets/serum 1.png'
import cream from '../assets/creams 1.png'
import '../css/ProductBestseller.css'
import { Link } from 'react-router-dom' 
export default function ProductBestseller(){
  return (
    <>
    <div className='product_card'>
        <div className='product_card_img_desc'>
        <img src={serum}></img>
        <p> Lotions & Serum</p>
        </div>

        <div className='product_card_img_desc'>
        <img src={lilac}></img>
        <p> Facial Radiant Serum</p>
        </div>

        <div className='product_card_img_desc'>
        <img src={cream}></img>
        <p> Body Creams</p>
        </div>

    </div>

    <div className='button_product_holder'>
        <Link to='/services'><button> Products </button></Link>
        
    </div>
    </>
  )
}


