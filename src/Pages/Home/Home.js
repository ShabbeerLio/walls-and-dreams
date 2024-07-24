import React from 'react'
import Banner from '../../Components/Banner/Banner'
import HAbout from '../../Components/HAbout/HAbout'
import Services from '../../Components/Services/Services'
import Projects from '../../Components/Projects/Projects'
import Skills from '../../Components/Skills/Skills'
import Testimonial from '../../Components/Testimonial/Testimonial'
import ContactUs from '../../Components/ContactUs/ContactUs'

const Home = () => {
    return (
        <div>
            <Banner />
            <HAbout />
            <Services/>
            <Projects/>
            <Skills/>
            <Testimonial/>
            <ContactUs/>
        </div>
    )
}

export default Home
