import axios from "axios";
import { useState, useCallback, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";
import {AiFillCaretRight} from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import './card.css'
import { useEffect } from "react";
const CardRegister = () => {
    const [data, setData] = useState({
        username:"",
        email: "",
        password: "",
    });

    let cont = 0;


    const handle_submit = () => {
        cont++;
        console.log(cont)
        document.getElementById('register'+cont);

        // document.getElementById('register'+cont+1).style.display = "flex"
        console.log(document.getElementById('register'+cont))
    }

    const handleChange = useCallback(
        (value) => {
            setData((state) => ({ ...state, ...value }));
        },
        [setData]
    );




    return (

        <section className="section_register">
            <form className="cont_register"   >
                <div className="register_img">
                    <FaUserCircle></FaUserCircle>
                </div>
                <div className="register_inputs" id="register1">
                    <div>
                        <FiUser />
                        <input placeholder="UserName" type="text" required
                            onChange={(e) => { handleChange({ username: e.target.value }) }} />
                    </div>
                    <div>
                        <ImMail4 />
                        <input placeholder="Email" type="email" required
                            onChange={(e) => { handleChange({ email: e.target.value }) }} />
                    </div>
                    <div>
                        <RiLockPasswordFill />
                        <input placeholder="Password" type="password" required onChange={(e) => { handleChange({ password: e.target.value }) }} />
                    </div>

                </div>
                <div className="register_inputs" id="register2">
                    <div>
                        <FiUser />
                        <input placeholder="UserName" type="text" required
                            onChange={(e) => { handleChange({ username: e.target.value }) }} />
                    </div>
                    <div>
                        <ImMail4 />
                        <input placeholder="Email" type="email" required
                            onChange={(e) => { handleChange({ email: e.target.value }) }} />
                    </div>
                    <div>
                        <RiLockPasswordFill />
                        <input placeholder="Password" type="password" required onChange={(e) => { handleChange({ password: e.target.value }) }} />
                    </div>

                </div>

                <div className="register_buttons">
                   
                    <button type="button" onClick={handle_submit}> <AiFillCaretRight></AiFillCaretRight></button>
                </div>


            </form>
        </section>)

}

export default CardRegister;