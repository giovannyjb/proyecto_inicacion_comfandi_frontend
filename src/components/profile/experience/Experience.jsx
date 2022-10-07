import React from "react";
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'
const Experience = (props) => {

    return (
        <section id="experiences">
            <h5>What Skill I Have</h5>
            <h2>My experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">

                        {
                            props.frontend.map((front) => (

                                <article className="experience__details">
                                    <BsFillPatchCheckFill className="experience__details-icon">
                                    </BsFillPatchCheckFill>
                                    <div>
                                        <h4>{front.title}</h4>
                                        <small className="text-light">{
                                            front.level === 0 ? "LOW" : front.level === 1 ? "MEDIUM" : front.level === 2 ? "HIGH" : ""}</small>
                                    </div>
                                </article>
                            ))
                        }


                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {
                            props.backend.map((front) => (

                                <article className="experience__details">
                                    <BsFillPatchCheckFill className="experience__details-icon">
                                    </BsFillPatchCheckFill>
                                    <div>
                                        <h4>{front.title}</h4>
                                        <small className="text-light">{
                                            front.level === 0 ? "LOW" : front.level === 1 ? "MEDIUM" : front.level === 2 ? "HIGH" : ""}</small>
                                    </div>
                                </article>
                            ))
                        }

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience;