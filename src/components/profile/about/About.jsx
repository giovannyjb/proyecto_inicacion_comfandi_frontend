import React from "react";
import './about.css'
import ME from '../../../assets/img/bradpit_about_me.jpg'
import {FaAward} from 'react-icons/fa'
import{FaUsers} from 'react-icons/fa'
import {HiFolder} from 'react-icons/hi'
const App = () => {
    return (
        <section id="about">
            <h5>Get To know</h5>
            <h2>About me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                        <FaAward className="about__icon"></FaAward>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                           
                        </article>

                        <article className="about__card">
                        <FaUsers className="about__icon"></FaUsers>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                           
                        </article>

                        <article className="about__card">
                        <HiFolder className="about__icon"></HiFolder>
                            <h5>Projects</h5>
                            <small>200+ completed</small>
                           
                        </article>

                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Doloribus expedita enim sit ullam earum autem dolore laboriosam doloremque 
                        sunt quas eos ratione reiciendis veritatis, nam omnis quidem, quos neque mollitia.</p>
                        <a  className="btn btn-primary" href="#contact">Let's Talk</a>

                </div>

            </div>

        </section>
    )
}
export default App;