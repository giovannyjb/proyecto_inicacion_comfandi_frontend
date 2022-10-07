import { FcHome } from 'react-icons/fc'
import {FiLogOut} from 'react-icons/fi'
import { useContext, useState } from 'react'

import './nav.css'
import { AuthContext } from '../../../hooks/useAuth'
const Nav = () => {

    const [activeNav, setActiveNav] = useState("#");
    const { signOut } = useContext(AuthContext);
    return (
        <nav className='nav2'>
            
            <a href="/"
                onClick={() => setActiveNav('#')}
                className={activeNav === "#" ? 'active' : ''}
            >
                <FcHome></FcHome>
            </a>
            <a href="#"
                onClick={() => signOut()}
                className={activeNav === "#about" ? 'active' : ''}
            >
               <FiLogOut></FiLogOut>
            </a>

        </nav>
    )
}

export default Nav;