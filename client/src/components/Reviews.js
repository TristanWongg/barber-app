import ReviewsCSS from '../styles/reviews.module.css';
import { reviews } from './ReviewsData';
import { motion as m } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Reviews({ titleAnimation }) {
    return (  
        <div id='reviews' className={`${ReviewsCSS.background} scroll-section`}>
            <m.div 
                className={ ReviewsCSS.title }
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: false, amount: .6 }}
                transition={{ staggerChildren: .3 }}
            >
                <m.h1 variants={ titleAnimation }>Reviews</m.h1>
                <m.h1 variants={ titleAnimation }>and</m.h1>
                <m.h1 variants={ titleAnimation }>Reposts</m.h1>
            </m.div>
            <Swiper
                className={ReviewsCSS.swiper}
                modules={[EffectCoverflow, Pagination, Keyboard]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"2"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                keyboard= {{ enabled: true }}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className={ReviewsCSS.swiperSlide}>
                        <img src={review.img} alt="Unable to load" className={ReviewsCSS.image}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Reviews;