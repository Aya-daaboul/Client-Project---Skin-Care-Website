import React from 'react'
import '../css/SectionPic.css'
import pic1 from '../assets/picside.png'
export default function SectionPic() {
  return (
    <>
    <div className='section_pic_container'>

        <div className='child_left_text'>
            <h2>Glow with <br></br>Confidence</h2>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <p> Personalized Skincare for Every Skin Story</p>
        </div>
        <div className='child_right_pic'>
            <img src={pic1} alt='glowy skin'></img>
        </div>
      
    </div>
    <div className='custom_hr'>
    <svg className='svg_star' width="54.5" height="47.5" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 28.5C19.1076 28.5 27 20.4425 27 1C27 20.4425 34.8376 28.5 53 28.5C34.8376 28.5 27 36.7897 27 56C27 36.7897 19.1076 28.5 1 28.5Z" fill="#BF754C" stroke="#AC3A4E" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

        
    </div>
    </>
  )
}


