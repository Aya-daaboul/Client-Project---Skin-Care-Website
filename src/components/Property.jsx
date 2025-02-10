import React from 'react'
import '../css/Property.css'

export default function Property(props){

    const { img: Icon, title, description} = props;


  return (
    <div className='property_section'>
        <div className="circle_property">
        <img src={Icon} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      
    </div>
  )
}


