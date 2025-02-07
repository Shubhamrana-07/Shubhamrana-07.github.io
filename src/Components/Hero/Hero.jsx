import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {
  return (
    <div id ="home"className='hero'>
      <img src={profile_img} alt='' />
      <h1><span>I'm Shubham Rana,</span> frontend developer based in India.</h1>
      <p>
  I am a frontend developer from Himachal Pradesh, India with 2.5 years experience in web development and also worked in company CM Solutionz.
</p>
<div className="hero-action">
    <div className="hero-connect"><AnchorLink  className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero
