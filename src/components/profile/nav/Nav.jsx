import { FcHome } from 'react-icons/fc'
import { BiUserCircle } from 'react-icons/bi'
import {BiMedal} from 'react-icons/bi'
import { useState } from 'react'

import './nav.css'
const Nav = () => {

    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a href="/"
                onClick={() => setActiveNav('#')}
                className={activeNav === "#" ? 'active' : ''}
            >
                <FcHome></FcHome>
            </a>
            <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === "#about" ? 'active' : ''}
            >
                <BiUserCircle></BiUserCircle>
            </a>
            <a href="#experiences"
                onClick={() => setActiveNav('#experiences')}
                className={activeNav === "#experiences" ? 'active' : ''}
            >
                <BiMedal></BiMedal>
            </a>
        </nav>
    )
}

export default Nav;