import React from 'react'
import '../css/Stat.css'
import skin from '../assets/skinplus.png'
import { Link } from 'react-router-dom'
export default function Stat() {
  return (
    <>
    <div className='stats_container'>
      <div className='nbs_and_stats'>
            <p> + <span className='number_holder'>386</span> <br></br> Happy Customers</p>
      </div>
      <div className='nbs_and_stats'>
      <p> + <span className='number_holder'>500</span> <br></br> Followers</p>
      </div>
      <div className='nbs_and_stats'>
      <p> + <span className='number_holder'>12</span> <br></br> Shops</p>
      </div>

    </div>

    <div className='care_science_section'>
            <img src={skin} alt="skin pleasure" />
            <div className='why_science_right_section'>
                        <h3 className='headline'>The science of <br></br>self care</h3>
                        <p className='desc'>Are you ready for something completely different? 
                        <br></br>Meet you where you are</p>
                        <Link to='/contact'>
                        <button className='contact_cta'>Contact Us</button>
                        </Link>
            </div>
                
                

    </div>

    </>
  )
}


