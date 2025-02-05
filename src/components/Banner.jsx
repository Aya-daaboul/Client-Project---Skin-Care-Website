import React from 'react'
import banner from '../assets/banner1.jpg'
import '../css/Banner.css'

export default function Banner() {
  return (
    <>
    <div className='banner_container'>
        <img className="my_cover" src={banner} alt="Banner" />
      
    </div>

    <h2 className='hero_title'>Glow <br></br>and <br></br>Shine</h2>
    </>
    

  )
}

