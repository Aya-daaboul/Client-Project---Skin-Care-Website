import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SectionPic from '../components/SectionPic'
import ProductBestseller from '../components/ProductBestseller'
import Benefits from '../components/Benefits'
import Stat from '../components/Stat'
import Testimonials from '../components/Testimonials'
export default function MainPage(){
  return (
   <>

      <Header/>
      <Banner/>
      <SectionPic/>
      <ProductBestseller/>
      <Benefits/>
      <Stat/>
      <Testimonials/>
      <Footer/>
   
   </>
      
   
  )
}
