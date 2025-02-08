import React from 'react'
import '../css/SectionPic.css'
import pic1 from '../assets/picside.png'
export default function SectionPic() {
  return (
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
  )
}


