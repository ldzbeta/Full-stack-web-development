import React from 'react'
import './Hero.css'
import hand_icon from '../assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../assets/Frontend_Assets/arrow.png'
import hero_image from '../assets/Frontend_Assets/hero_image.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow_icon} alt="" srcset="" />

        </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" srcset="" />
        </div>
    </div>
  )
}
