import React from 'react'
import Property from '../components/Property'
import Header from '../components/Header'
import '../css/About.css'
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import wom from '../assets/womenpic.png'  ;
import wom1 from '../assets/wom2.png'
import AboutPicSection from '../components/AboutPicSection';
import Footer from '../components/Footer'
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

    <AboutPicSection img={wom} title="Our Mission" description="At Lemiere, our mission is to provide luxurious, natural skincare that nourishes the skin while promoting sustainability and ethical sourcing. We believe in high-performance, nature-powered formulations that enhance your natural beauty and deliver real results—all while being kind to your skin and the planet."></AboutPicSection>
    <AboutPicSection img={wom1} title="Our Vision" description="We envision a world where skincare is more than beauty— it is self-care, well-being, and sustainability all at once. Lemiere strives to be a leader in premium, eco-conscious skincare, empowering individuals with science-backed, nature-inspired products that help them look and feel their best."></AboutPicSection>
    
    <Footer/>
    </>

      
  )
}
