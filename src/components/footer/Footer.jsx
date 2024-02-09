import React from 'react'
import{
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'

import ContentWrapper from '../contentWrapper/ContentWrapper'

import "./style.scss"

function Footer() {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className='menuItems'>
          <li className="menuItems">Terms of use</li>
          <li className="menuItems">Privacy-policy</li>
          <li className="menuItems">About</li>
          <li className="menuItems">Blog</li>
          <li className="menuItems">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia blanditiis amet
          deserunt cupiditate unde debitis neque
          voluptatem optio quis nemo, sapiente
          dignissimos. Eaque dolorem quam esse 
          voluptatum, excepturi distinctio sit?
        </div>
        <div className='socialIcons'>
          <span className="icon"><FaFacebookF /></span>
          <span className="icon"><FaInstagram /></span>
          <span className="icon"><FaTwitter /></span>
          <span className="icon"><FaLinkedin /></span>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer