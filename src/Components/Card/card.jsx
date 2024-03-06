import React from 'react'
import './card.css'

const card = ({emoji, heading, content}) => {
  return (
    <div className='box'>
        <img className='img' src={emoji} alt=""/>
        <div className='inner'>
            <span className='s1'>{heading}</span>
            <span className='s2'>{content}</span>
        </div>
    </div>
  )
}

export default card