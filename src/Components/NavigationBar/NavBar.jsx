import React from 'react'
import {Link} from "react-scroll";
import './NavBar.css'

function NavBar() {
  return (
    <div className='nav-wrapper'>
        <div className='nav-left'>
            <div className='nav-name'>Munna</div>
        </div>
        <div className='nav-right'>
            <div className='nav-list'>
                <ul style={{listStyleType:'none'}}>
                    <li>
                        <Link activeClass="active" to="nav-wrapper" spy={true} smooth={true}>Home</Link>
                    </li>
                    <li>
                        <Link to='ser' spy={true} smooth={true}>Skills</Link>
                    </li>
                    <li>
                        <Link to='d' spy={true} smooth={true}>Projects</Link>
                    </li>
                    <li>
                        <Link to='T-wrap' spy={true} smooth={true}>Training</Link>
                    </li>
                </ul>
            </div>
            <button className='button nav-button'>
                <Link to='cont-wrap' spy={true} smooth={true}>Contact</Link>
            </button>
        </div>
    </div>
  )
}

export default NavBar