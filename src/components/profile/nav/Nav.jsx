import { FcHome } from 'react-icons/fc'
import { BiUserCircle } from 'react-icons/bi'
import { TbBook } from 'react-icons/tb'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import {BiMedal} from 'react-icons/bi'
import { useState } from 'react'

import './nav.css'
const Nav = () => {

    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a href="#"
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
            <a href="#services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === "#services" ? 'active' : ''}
            >
                <TbBook></TbBook>
            </a>
            <a href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === "#contact" ? 'active' : ''}
            >
                <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
            </a>
        </nav>
    )
}

export default Nav;