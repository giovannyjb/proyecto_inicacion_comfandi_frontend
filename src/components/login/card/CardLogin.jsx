import { FaUserCircle } from "react-icons/fa";
import {ImMail4} from "react-icons/im";
import {RiLockPasswordFill} from"react-icons/ri";
import './card.css'
const CardLogin = () => {


    return (

        <section className="section_login">
            <form className="cont_login" >
                <div className="login_img">
                    <FaUserCircle></FaUserCircle>
                </div>
                <div className="login_inputs">
                    <div>
                        <ImMail4/>
                        <input placeholder="Email"/>
                    </div>
                    <div>
                        <RiLockPasswordFill/>
                        <input placeholder="Password"/>
                    </div>

                </div>

                <div className="login_buttons">
                    <button>Login</button>
                </div>


            </form>
        </section>)

}

export default CardLogin;