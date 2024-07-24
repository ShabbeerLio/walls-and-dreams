import React from 'react'
import "./Services.css"
import servicebg from "../../Assets/Services/hero-2-overlay.png"
import { PiStarFourFill } from "react-icons/pi";

const Services = () => {
    return (
        <div className='Services'>
            <div className='Services-bg'>
                <div className="imag"></div>
            </div>
            <span className='back-cover-right'></span>
            <div className='Services-main'>
                <div className='Services-box'>
                    <div className="HAbout-clients-title">
                        <h3><PiStarFourFill /> OUR SERVICES</h3>
                    </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    01. We Build It Like This Is Our Home
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    No two homes built by us are ever the same. That’s because every home is uniquely built for you. With high quality of craftsmanship and energy efficient materials, we design and build your home as per your lifestyle. Whether you choose one of our construction packages or personalize it, we offer that flexibility to each of our customers. Once you’ve finalized all of your design selections and our construction package, we’ll start building your dream home.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    02. Design
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloremque quasi fuga iusto, amet consectetur temporibus voluptatem quia enim quod. Magnam consectetur eius ipsum modi!
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    03. Construction
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident pariatur voluptate. Facilis tempore fugit itaque in libero, quo fugiat, blanditiis mollitia tenetur vel vero?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    04. Completion
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officiis quia nam praesentium officia dolores. Dolorem asperiores aut accusantium molestiae quam animi alias dolore veniam.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
