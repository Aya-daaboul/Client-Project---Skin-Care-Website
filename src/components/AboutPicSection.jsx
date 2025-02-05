import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AboutPicSection.css'
import wom from '../assets/womenpic.png'  
export default function AboutPicSection() {
  return (
    <div className="about_pic_section_container">

        <div className='img_container'>
          <img src={wom} width='600px' height='540px'></img>
        </div>

        <div className="text_and_details_container">

          <h2 className='subtitle_about'>Our Mission</h2>

          <p>
          At Lemiere, our mission is to provide luxurious, natural skincare that nourishes the skin while promoting sustainability and ethical sourcing. We believe in high-performance, nature-powered formulations that enhance your natural beauty and deliver real results—all while being kind to your skin and the planet.
          </p>

          <button className='cta_about_wide'>
          Explore Services &#8594;
          </button>

        </div>


    </div>
  )
}