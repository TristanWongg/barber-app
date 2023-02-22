import MyWorkCSS from '../styles/myWork.module.css';
import { images } from './MyWorkData';
import { motion as m } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

function MyWork({ titleAnimation }) {

    return (  
        <div id='my-work' className={`${MyWorkCSS.background} scroll-section`}>
            <m.div 
                className={ MyWorkCSS.title }
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: false, amount: .5}}
                transition={{ staggerChildren: .3 }}
            >
                <m.h1 variants={ titleAnimation }>My</m.h1>
                <m.h1 variants={ titleAnimation }>Work</m.h1>
            </m.div>

            <Swiper
                className={MyWorkCSS.swiper}
                modules={[Keyboard, Pagination, Autoplay]} 
                keyboard= {{ enabled: true }}
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={2}
                loop
                autoplay={{ disableOnInteraction: false, delay: 2500 }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id} className={MyWorkCSS.swiperSlide}>
                        <img src={image.img} alt="Unable to load" className={MyWorkCSS.image}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MyWork;

