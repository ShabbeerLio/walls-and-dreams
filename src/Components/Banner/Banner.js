import React from 'react'
import "./Banner.css"
import bannerv from "../../Assets/Banner/banner.mp4"

const Banner = () => {
    return (
        <div className='Banner'>
            <video loop muted autoPlay>
                <source src={bannerv} type="video/mp4" />
            </video>
        </div>
    )
}

export default Banner
