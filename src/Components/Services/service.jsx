import React from 'react'
import './service.css'
import Card from '../Card/card'
import Humble from '../../pics/humble.png'
import glasses from '../../pics/glasses.png'
import Resume from './CV_1.pdf'

const service = () => {
  return (
    <div className='ser'>
        <div className='ser-left'>
            <span>My Technical</span>
            <span>Skills</span>
            <span>I have gained various skill in various aspects</span>
            <a href={Resume} download={false} rel="noreferrer"  target='_blank'>
              <button className='button download'>Download CV</button>
            </a>
        </div>
        <div className='ser-right'>
          <Card className='ser-1' 
            emoji={glasses} heading="Languages" content="C++, Java, Python, C, JavaScript, TypeScript, HTML, CSS."/>
          <Card className='ser-2'
            emoji={Humble} heading={"FrameWorks"} content={"React Native CLI, React Expo-Go, React JS, Expree JS."}/>
          <Card className='ser-1'
            emoji={glasses} heading={"Frontend"} content={"HTML, CSS, JavaScript, React."}/>
          <Card className='ser-2'
            emoji={Humble} heading={"Backend"} content={"MongoDB, MySQL."}/>
        </div>
    </div>
  )
}

export default service