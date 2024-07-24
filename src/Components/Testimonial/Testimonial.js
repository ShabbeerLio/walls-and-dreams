import React, { useRef } from 'react'
import "./Testimonial.css"
import TestimoCard from './TestimoCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TestimonialData from './TestimonialData';

const Testimonial = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='Testimonial'>
            <span className='back-cover-left'></span>
            <div className='Testimonial-main'>
                <div className='Testimonial-box'>
                    <div className='Testimonial-box-heading'>
                        <h2>What</h2>
                        <h2>Our Client Says</h2>
                    </div>
                    <div className="testimonial-btn">
                        <button ref={prevRef} className='swiper-button-prev'></button>
                        <button ref={nextRef} className='swiper-button-next'></button>
                    </div>
                    <div className='Testimonial-box-body'>
                        <div className='Testimonial-box-left'>
                            <div className="testimonial-left-btn">
                                <p>BECOME A CLIENT</p>
                            </div>
                            <h5>Rated 4.9 out of 5 based <br />500+ reviews</h5>
                        </div>
                        <div className='Testimonial-box-right'>
                            <Swiper
                                className="mySwiper"
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                speed={800}
                                rewind={true}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onSwiper={(swiper) => {
                                    // Make sure Swiper knows about the navigation buttons
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                modules={[Autoplay, Navigation]}
                            >
                                {TestimonialData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <TestimoCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
