import React from 'react'
import Property from '../components/Property'
import Header from '../components/Header'
import '../css/About.css'
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";

const icons = [Icon1, Icon2, Icon3];

export default function About() {
  return (
    <>
    <Header/>
    <h2 className="Title_1_ab">Our Story: The Birth of Lumiere</h2>
    
    <div className="about_section_1">

    <Property img={icons[0]} title="The Inspiration" description="Driven by passion, we created clean, effective skincare using luxurious, ethically sourced ingredients." />
    <Property img={icons[1]} title="The Innovation" description="Lemiere became a trusted name in high-performance, eco-conscious skincare through sustainability and expert care." />
    <Property img={icons[2]} title="Today & Beyond" description="We keep innovating with science-backed, nature-powered formulations for radiant, healthy skin." />

    </div>
    
    </>

      
  )
}
