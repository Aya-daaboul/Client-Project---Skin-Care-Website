import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AboutPicSection.css'

export default function AboutPicSection(props) {
  return (
    <div className="about_pic_section_container">

        <div className='img_container'>
          <img src={props.img} width='600px' height='540px'></img>
        </div>

        <div className="text_and_details_container">

          <h2 className='subtitle_about'>{props.title}</h2>

          <p>
          {props.description}
          </p>
          <Link to="/services">
          <button className='cta_about_wide'>
          Explore Services &#8594;
          </button>
          </Link>

        </div>


    </div>
  )
}