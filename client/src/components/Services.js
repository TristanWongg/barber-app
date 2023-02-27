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
                    <div>
                       <p>Haircut</p> 
                       <p>$25</p> 
                    </div>
                    <div>
                        <p>Haircut + Beard</p>
                        <p>$35</p>  
                    </div>
                    <div>
                        <p>Small Talk</p>
                        <p>Priceless</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;