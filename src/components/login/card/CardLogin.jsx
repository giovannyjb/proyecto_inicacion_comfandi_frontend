import axios from "axios";
import { useState, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './card.css'
const CardLogin = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const MySwal = withReactContent(Swal)

    const handle_submit = () => {

        console.log(login);
        let config = {
            headers: {
              'Accept': 'application/json',
            }
            }
 

        let data = axios.post("http://localhost:8000/api/user/login/", login,config)
            .then((response) => {
                console.log(response.data);

                if (response.data.errors){

                    MySwal.fire({
                        icon:'error',
                        title:'Oops...',
                        text:'User or password incorrect'
                    })
                }else{
                    MySwal.fire({
                        icon:'success',
                        title:'Success',
                        text:'entering the system'
                    })

                    if (MySwal.clickConfirm){
                        console.log("ready");
                    }
                }


            })
            .catch((error) => {
                console.log(error);
            });


    }

    const handleChange = useCallback(
        (value) => {
            setLogin((state) => ({ ...state, ...value }));
        },
        [setLogin]
    );




    return (

        <section className="section_login">
            <form className="cont_login"   >
                <div className="login_img">
                    <FaUserCircle></FaUserCircle>
                </div>
                <div className="login_inputs">
                    <div>
                        <ImMail4 />
                        <input  placeholder="Email" type="email" required onChange={(e) => { handleChange({ email: e.target.value }) }} />
                    </div>
                    <div>
                        <RiLockPasswordFill />
                        <input  placeholder="Password" type="password" required onChange={(e) => { handleChange({ password: e.target.value }) }} />
                    </div>

                </div>

                <div className="login_buttons">
                    <button type="button" onClick={handle_submit}>Login</button>
                </div>


            </form>
        </section>)

}

export default CardLogin;