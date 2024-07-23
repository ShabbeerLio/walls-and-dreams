import React from 'react'
import "./HAbout.css"
import haboutimg from "../../Assets/About/about.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";

const HAbout = () => {
    return (
        <div className='HAbout'>
            <span></span>
            <div className='HAbout-main'>
                <div className='HAbout-box'>
                    <div className='HAbout-box-left'>
                        <div className='HAbout-left-card'>
                            <img src={haboutimg} alt="" />
                            <div className='HAbout-left-title'>
                                <h2>12</h2>
                                <p>Years  Of Working Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className='HAbout-box-right'>
                        <h6>Hello There!</h6>
                        <h2>I’m Diego</h2>
                        <h5>I am a UI Designer building usable human </h5>
                        <p>Suspendisse convallis, mauris a placerat rutrum, lorem  libero sodales ipsum, quis tincidunt.!</p>

                        <div className='HAbout-right-btun'>
                            <p><a href="">NEED THIS? LETS TALK <FaArrowRightLong /></a></p>
                        </div>
                    </div>
                </div>
                <div className='HAbout-clients'>
                    <div className="HAbout-clients-title">
                        <h3><PiStarFourFill />Clients</h3>
                    </div>
                    <div className="HAbout-box-card">
                        <div className="HAbout-box-clients">
                            <p>snowflake</p>
                        </div>
                        <div className="HAbout-box-clients">
                            <p>snowflake</p>
                        </div>
                        <div className="HAbout-box-clients">
                            <p>snowflake</p>
                        </div>
                        <div className="HAbout-box-clients">
                            <p>snowflake</p>
                        </div>
                        <div className="HAbout-box-clients">
                            <p>snowflake</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HAbout
