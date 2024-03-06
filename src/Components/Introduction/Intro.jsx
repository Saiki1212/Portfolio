import React from 'react'
import './Intro.css'
import Instagram from '../../pics/instagram.png'
import Github from '../../pics/github.png'
import LinkedIn from '../../pics/linkedin.png'
import vector1 from '../../pics/Vector1.png'
import vector2 from '../../pics/Vector2.png'
import boy from '../../pics/boy.png'
import thumbup from '../../pics/thumbup.png'
import crown from '../../pics/crown.png'
import glassesimoji from '../../pics/glassesimoji.png'
import Floating from '../Floatingdiv/Floating'
import {Link} from "react-scroll";

const Intro = () => {
  return (
    <div className='i-wrapper'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hy! I Am</span>
                <span>Sai Kiran Varma</span>
                <span>MERN Stack developer , Developed an application "Lets Learn", producting the quality work. producting the quality work.</span>
            </div>
            <button className='button i-button'>
                <Link to='cont-wrap' spy={true} smooth={true}>Hire me</Link>
            </button>
            <div className='i-footericons'>
                <a href='https://github.com/Saiki1212' target='_blank' rel="noreferrer">
                    <img className='i-i' src={Github} alt="Github Link"/>
                </a>
                <a href='https://www.linkedin.com/in/sai-kiran-varma-pingili-536841231/' target='_blank' rel="noreferrer">
                    <img className='i-i' src={LinkedIn} alt="LinkedIn Link"/>
                </a>
                <a href='https://www.instagram.com/sai_ki_munna/' target='_blank' rel="noreferrer">
                    <img className='i-i' src={Instagram} alt="Instagram Link"/>
                </a>
            </div>
        </div>
        <div className='i-right'>
            <img src={vector1} alt=''/>
            <img src={vector2} alt=''/>
            <img className='MyImg' src={boy} alt=''/>
            <img src={glassesimoji} alt=''/>
            <div style={{left:'18rem', top:'-2rem'}}>
                <Floating image={crown} text1='MERN Stack' text2='Developer'/>
            </div>
            <div style={{ bottom:'13.5rem'}}>
                <Floating image={thumbup} text1='Good Coding' text2='Skills'/>
            </div>
            <div className='blurBack' style={{background:'rgb(283 210 255)'}}></div>
            <div className='blurBack' style={{background:'#C1F5FF', top:'25%', left:'-25%', width:'25rem', height:'20rem'}}></div>
        </div>
    </div>
  )
}

export default Intro