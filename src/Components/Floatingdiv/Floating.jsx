import React from 'react'
import './Floating.css'

const Floating = ({image, text1, text2}) => {
  return (
    <div className='floating'>
        <img className='img' src={image} alt=''/>
        <span>
            {text1}
            <br/>
            {text2}
        </span>
    </div>
  )
}

export default Floating