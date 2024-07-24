import React from 'react'
import "./Skills.css"
import { PiStarFourFill } from "react-icons/pi";
import { IoExtensionPuzzleSharp } from "react-icons/io5";



const Skills = () => {
    return (
        <div className='Skills'>
            <div className='Services-bg'>
                <div className="imag"></div>
            </div>
            <span className='back-cover-right'></span>
            <div className='Skills-main'>
                <div className='Skills-box'>
                    <div className="HAbout-clients-title">
                        <h3><PiStarFourFill /> DESIGN EXPERIENCE</h3>
                    </div>
                    <div className="Skills-box-card">
                        <div className="Skills-card-detail">
                            <p>Oct 2024 - Present</p>
                            <h3>UI/UX Lead Designer</h3>
                            <h6>Amazon INC</h6>
                        </div>
                        <div className="Skills-card-detail">
                            <p>Oct 2024 - Present</p>
                            <h3>PRODUCT LEAD DESIGNER</h3>
                            <h6>Amazon INC</h6>
                        </div>
                        <div className="Skills-card-detail">
                            <p>Oct 2024 - Present</p>
                            <h3>UI/UX DESIGNER</h3>
                            <h6>Amazon INC</h6>
                        </div>
                        <div className="Skills-card-detail">
                            <p>Oct 2024 - Present</p>
                            <h3>INTERSHIP GRAPHIC DESIGNER</h3>
                            <h6>Amazon INC</h6>
                        </div>
                    </div>
                </div>
                <div className='HAbout-clients'>
                    <div className="HAbout-clients-title">
                        <h3><PiStarFourFill />Skills</h3>
                    </div>
                    <div className="HAbout-box-card">
                        <div className="skills-box-clients">
                            <p><IoExtensionPuzzleSharp /></p>
                            <div className="skills-detail">
                                <h6>68%</h6>
                                <p>snowflake</p>
                            </div>
                        </div>
                        <div className="skills-box-clients">
                            <p><IoExtensionPuzzleSharp /></p>
                            <div className="skills-detail">
                                <h6>68%</h6>
                                <p>snowflake</p>
                            </div>
                        </div>
                        <div className="skills-box-clients">
                            <p><IoExtensionPuzzleSharp /></p>
                            <div className="skills-detail">
                                <h6>68%</h6>
                                <p>snowflake</p>
                            </div>
                        </div>
                        <div className="skills-box-clients">
                            <p><IoExtensionPuzzleSharp /></p>
                            <div className="skills-detail">
                                <h6>68%</h6>
                                <p>snowflake</p>
                            </div>
                        </div>
                        <div className="skills-box-clients">
                            <p><IoExtensionPuzzleSharp /></p>
                            <div className="skills-detail">
                                <h6>68%</h6>
                                <p>snowflake</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
