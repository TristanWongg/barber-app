import ServicesCSS from '../styles/services.module.css';
import { motion as m } from 'framer-motion';

function Services({ titleAnimation }) {
    
    return (  
        <div id='services' className={`${ServicesCSS.background} scroll-section`}>
            <m.div
                className={ ServicesCSS.title }
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: false, amount: 1 }}
            >
                <m.h1 variants={titleAnimation}>Services</m.h1>
            </m.div>
            
            <div className={ServicesCSS.bgImage}>
                <div className={ServicesCSS.servicesContainer}>
                    <ul>
                        <li>Haircut</li>
                        <li>Haircut + Beard</li>
                        <li>Small Talk</li>
                    </ul>
                    <ul>
                        <li>$25</li>
                        <li>$35</li>
                        <li>Priceless</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;