import { FcHome } from 'react-icons/fc'
import {FiLogOut} from 'react-icons/fi'
import { useContext, useState } from 'react'
import {  BsUpload} from 'react-icons/bs'

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
          
            >
               <FiLogOut></FiLogOut>
            </a>
            <a href="#"  data-toggle="modal" data-target="#exampleModal"
            >
               <  BsUpload></  BsUpload>
            </a>

          

        </nav>
    )
}

export default Nav;