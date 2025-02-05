import React from 'react'
import banner from '../assets/banner.jpg'
import '../css/Banner.css'
console.log(banner)
export default function Banner() {
  return (
    <div className='banner_container'>
        <img src={banner}></img>
      
    </div>
  )
}

