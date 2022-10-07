import React from "react";
import './about.css'
import {FaAward} from 'react-icons/fa'
import{FaUsers} from 'react-icons/fa'
import {HiFolder} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
const App = (props) => {
    return (
        <section id="about">
            <h5>Get To know</h5>
            <h2>About me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <a  href={"https://api.whatsapp.com/send?phone="+props.phone}className="about__me-image">
                        <BsWhatsapp></BsWhatsapp>
                    </a>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                        <FaAward className="about__icon"></FaAward>
                            <h5>Experience</h5>
                            <small>{props.experience}</small>
                           
                        </article>

                        <article className="about__card">
                        <FaUsers className="about__icon"></FaUsers>
                            <h5>Clients</h5>
                            <small>{props.clients}</small>
                           
                        </article>

                        <article className="about__card">
                        <HiFolder className="about__icon"></HiFolder>
                            <h5>Projects</h5>
                            <small>{props.projects}</small>
                           
                        </article>

                    </div>
                    <p>{props.description}</p>
                        <a  className="btn btn-primary" href="#contact">Let's Talk</a>

                </div>

            </div>

        </section>
    )
}
export default App;