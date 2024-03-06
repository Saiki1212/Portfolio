import React from 'react'
import './Pcard.css'

const Pcard = ({emoji, heading, content}) => {
  return (
    <div className='box1'>
        <img className='img1' src={emoji} alt=""/>
        <div className='inner1'>
            <span className='s11'>{heading}</span>
            <span className='s22'>{content}</span>
        </div>
    </div>
  )
}

export default Pcard