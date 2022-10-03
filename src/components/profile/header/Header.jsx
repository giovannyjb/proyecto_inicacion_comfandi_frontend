import CTA from './CTA';
import './header.css';
import IMG from '../../../assets/img/gio.png';
import HeaderSocial from './HeaderSocial';

const Header = ()=>{

    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Giovanni Jaramillo Bolaños</h1>
                <h5 className="text-ligth">Fullstack Developer</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>

                <div className='me'>
                    <img src={IMG} alt="me" />
                </div>

                <a  href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
