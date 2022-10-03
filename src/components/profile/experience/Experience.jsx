import React from "react";
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'
const Experience = () => {

    return (
        <section id="experiences">
            <h5>What Skill I Have</h5>
            <h2>My experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediated</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>React-native</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>VueJs</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>Boostrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>


                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text-light">Experienced</small>
                            </div>

                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>Laravel</h4>
                                <small className="text-light">Intermediated</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>SQLServer</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon">
                            </BsFillPatchCheckFill>
                            <div>
                                <h4>Django</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience;