import React from 'react'
import socials from '../assets/social media.png'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

function Footer(){
  return (
    <div className='Footer_container'>
      <div className='Footer_logo_socials'>
        <Link className='lumiere_magnified'to="/">&nbsp; Lumiére</Link> 
        <img src={socials} alt="socials" />
      </div>

      <div className='Footer_links_nav'>

        <ul>
          <li>
          <Link to="/"> Home</Link>
          </li>
          <li>
          <Link to="/about"> About</Link>
          </li>
          <li>
          <Link to="/services"> Services</Link>
          </li>
          <li>
          <Link to="/contact"> Contact Us</Link>
          </li>
        </ul>

      </div>

      <div className='Footer_info'>
      <div className='bullet_new'>
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.8335C7.6 1.8335 4 5.1335 4 9.16683C4 14.1168 11 19.7085 11.3 19.9835C11.5 20.0752 11.8 20.1668 12 20.1668C12.2 20.1668 12.5 20.0752 12.7 19.9835C13 19.7085 20 14.1168 20 9.16683C20 5.1335 16.4 1.8335 12 1.8335ZM12 18.0585C9.9 16.2252 6 12.2835 6 9.16683C6 6.14183 8.7 3.66683 12 3.66683C15.3 3.66683 18 6.14183 18 9.16683C18 12.1918 14.1 16.2252 12 18.0585ZM12 5.50016C9.8 5.50016 8 7.15016 8 9.16683C8 11.1835 9.8 12.8335 12 12.8335C14.2 12.8335 16 11.1835 16 9.16683C16 7.15016 14.2 5.50016 12 5.50016ZM12 11.0002C10.9 11.0002 10 10.1752 10 9.16683C10 8.1585 10.9 7.3335 12 7.3335C13.1 7.3335 14 8.1585 14 9.16683C14 10.1752 13.1 11.0002 12 11.0002Z" fill="#9B738F"/>
          </svg>
          <p> Lumiere Headquarters Coastal City LN<br></br>CA 90210 USA</p>
      </div>
      
      <div className='bullet_new'>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.2037 10.9564L13.6637 10.697C13.365 10.6656 13.0623 10.6952 12.7782 10.7835C12.4942 10.8718 12.2362 11.0165 12.0237 11.2068L10.1837 12.8525C7.34507 11.5609 5.03774 9.49724 3.59367 6.95841L5.44367 5.30377C5.87367 4.91918 6.08367 4.38254 6.01367 3.83696L5.72367 1.58308C5.66719 1.1467 5.43314 0.744161 5.06614 0.452203C4.69913 0.160245 4.22484 -0.000715581 3.73367 2.39158e-06H2.00367C0.873674 2.39158e-06 -0.0663265 0.840735 0.00367348 1.8514C0.533673 9.48955 7.36367 15.5893 15.8937 16.0634C17.0237 16.126 17.9637 15.2852 17.9637 14.2746V12.7273C17.9737 11.8239 17.2137 11.0637 16.2037 10.9564Z" fill="#9B738F"/>
          </svg>
          <p> +1 (800) 123-4567</p>
      </div>

      <div className='bullet_new'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z" fill="#9B738F"/>
          </svg>
          <p> Support@lumiere.com</p>
      </div>
              
      </div>
      <div className='Footer_button_cta'>
        <Link>
        <button className='cta_services'></button>
        </Link>
      </div>
      
    </div>
  )
}

export default Footer
