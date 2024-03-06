import React from 'react'
import './project.css'
import Pcard from '../Pcard/Pcard'
import Amazon from '../../pics/amazon.png'

const project = () => {
  return (
    <div className='d'>
        <div className='d1'>
            <span className='sp'>My Projects</span>
        </div>

        <div className='proj'>
            <Pcard emoji={Amazon} heading="Let's Learn"
                content="Let's Learn helps the students to understand the algorithms of the code with the help of the visuals."
            />
            <Pcard emoji={Amazon} heading="Amazon Clone"
                content="It is a mobile application , clone of Amazon mobile app. It contains all the features of Amazon."
            />
            <Pcard emoji={Amazon} heading="Algorithm Simulator"
                content="It is just a Algorithm simulator which sorts the given data by using any of the sorting techniques."
            />
        </div>

    </div>
  )
}

export default project