import React, { useEffect, useRef } from 'react'
import "./Projects.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Parallax, Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Parallax]);

const Projects = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.update();
        }
    }, []);

    const slides = [
        "https://images.pexels.com/photos/10669815/pexels-photo-10669815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10675618/pexels-photo-10675618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10669824/pexels-photo-10669824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10675614/pexels-photo-10675614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10669823/pexels-photo-10669823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10669819/pexels-photo-10669819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10669815/pexels-photo-10669815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10669817/pexels-photo-10669817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    return (
        <div className='Projects'>
            <span className='back-cover-left'></span>
            <div className='Projects-main'>
                <div className='Projects-box'>
                    <div className="Projects-btn">
                        <button ref={prevRef} className='swiper-button-prev'></button>
                        <button ref={nextRef} className='swiper-button-next'></button>
                    </div>
                    <div className="section slideStyle">
                        <Swiper
                            loop={true}
                            slidesPerView={2}
                            centeredSlides={true}
                            speed={800}
                            grabCursor={true}
                            parallax={true}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="swiper swiperParallax is-gallery"
                        >
                            {slides.map((src, index) => (
                                <SwiperSlide key={index} className="swiper-slide is-gallery">
                                    <div className="gallery-img__wrapper">
                                        <img
                                            data-swiper-parallax-x="25%"
                                            loading="lazy"
                                            alt="Skateboards"
                                            src={src}
                                            className="gallery-img"
                                        />
                                    </div>
                                    {/* <div className="gallery-info__wrapper">
                                        <div className="heading-medium">Skateboards</div>
                                    </div> */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
