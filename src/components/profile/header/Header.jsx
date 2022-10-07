import CTA from './CTA';
import './header.css';
import IMG from '../../../assets/img/gio.png';
import HeaderSocial from './HeaderSocial';

const Header = (props)=>{

    return (
        <header>
            {props.user}
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>{props.name}</h1>
                <h5 className="text-ligth">{props.job_description}</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>

                <div className='me'>
                    <img src={props.img} alt="me" />
                </div>

                <a  href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
