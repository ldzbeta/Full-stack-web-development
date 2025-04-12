import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/Frontend_Assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
    const{product}=props;
  return (
    <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" />
            {product.name}
    </div>
  )
}
