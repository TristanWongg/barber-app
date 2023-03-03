import AboutCSS from '../styles/about.module.css';
import image2016 from '../assets/images/IMG_5414.JPG';
import video2017 from '../assets/videos/4DA49038-476E-462F-95FF-7FAEA1F2136D.mp4';
import image2018 from '../assets/images/51126635_2295180023849194_307567074832547840_n_17957472649146445.jpg';
import video2019 from '../assets/videos/IMG_1857.mp4';
import { motion as m } from 'framer-motion'; 

function About({ titleAnimation }) {

    const leftTextAnimation = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1, 
            transition:{ duration: 1 }
        }
    }

    const rightTextAnimation = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1, 
            transition:{ duration: 1 }
        }
    }

    const leftImageAnimation = {
        hidden: { x: '-20vw', opacity: 0 },
        show: { 
            x: 0, 
            opacity: .9, 
            transition:{ duration: 1 }, 
            transition:{ type: 'spring', stiffness: 25 }
        }
    }

    const rightImageAnimation = {
        hidden: { x: '20vw', opacity: 0 },
        show: { 
            x: 0, 
            opacity: .9, 
            transition:{ duration: 1 }, 
            transition:{ type: 'spring', stiffness: 25 }
        }
    }

    return (  
        <div id='about' className={`${AboutCSS.background} scroll-section`}>
            
            <m.div 
                className={ AboutCSS.title }
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: true, amount: .5}}
                transition={{ staggerChildren: .3 }}
            >
                <m.h1 variants={ titleAnimation }>My</m.h1>
                <m.h1 variants={ titleAnimation }>Barber</m.h1>
                <m.h1 variants={ titleAnimation }>Journey</m.h1>
            </m.div>
            
            <div className={AboutCSS.gridLeft} >
                <m.div 
                    className={AboutCSS.gridText}
                    initial={ "hidden" }
                    whileInView={ "show" }
                    viewport={{ once: true, amount: .3 }}
                >
                    <m.h1 variants={leftTextAnimation} className={AboutCSS.gridTextHeader}>2016</m.h1>
                    <m.p variants={leftTextAnimation} className={AboutCSS.gridTextBody}>
                        After watching countless haircutting tutorials on Youtube, I began to practice cutting my own hair as well as a few courageous friends that volunteered to be my guinea pigs. 
                        <br />
                        <br />
                        I was equipped with nothing more than a pair of Walmart clippers and a DIY barber cape made out of a garbage bag.
                    </m.p>
                </m.div>
            </div>

            <m.div 
                className={AboutCSS.gridRight} 
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: true, amount: .3 }}
            >
                <m.img variants={rightImageAnimation} className={AboutCSS.image2016} src={image2016} alt="Unable to load" />
            </m.div>
        
            <m.div 
                className={AboutCSS.gridLeft} 
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: true, amount: .3 }}
            >
                <m.video variants={leftImageAnimation} className={AboutCSS.video2017} src={video2017} autoPlay loop muted />
            </m.div>

            <div className={AboutCSS.gridRight} >
                <m.div 
                    className={AboutCSS.gridText}
                    initial={ "hidden" }
                    whileInView={ "show" }
                    viewport={{ once: true, amount: .3 }}
                >
                    <m.h1 variants={rightTextAnimation} className={AboutCSS.gridTextHeader}>2017</m.h1>
                    <m.p variants={rightTextAnimation} className={AboutCSS.gridTextBody}>
                        My interest in barbering continued to grow so I decided to purchase my first pair of professional grade clippers and began cutting more often.
                    </m.p>
                </m.div>
            </div>

            <div className={AboutCSS.gridLeft} >
                <m.div 
                    className={AboutCSS.gridText}
                    initial={ "hidden" }
                    whileInView={ "show" }
                    viewport={{ once: true, amount: .3 }}
                >
                    <m.h1 variants={leftTextAnimation} className={AboutCSS.gridTextHeader}>2018</m.h1>
                    <m.p variants={leftTextAnimation} className={AboutCSS.gridTextBody}>
                        The peak of my barbering career. I established Trispy Fades and began promoting my haircut business through word of mouth and Instagram. I built a solid clientele where I was cutting about 6-12 people almost every weekend. 
                        <br />
                        <br />
                        Near the end of 2018, I worked at a barbershop for a few months where I was able to learn from some experienced barbers.
                    </m.p>
                </m.div>
            </div>

            <m.div 
                className={AboutCSS.gridRight} 
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: true, amount: .3 }}
            >
                <m.img variants={rightImageAnimation} className={AboutCSS.image2018} src={image2018} alt="Unable to load" />
            </m.div>

            <m.div 
                className={AboutCSS.gridLeft} 
                initial={ "hidden" }
                whileInView={ "show" }
                viewport={{ once: true, amount: .3 }}
            >
                <m.video variants={leftImageAnimation} className={AboutCSS.video2019} src={video2019} autoPlay loop muted />
            </m.div>

            <div className={AboutCSS.gridRight} >
                <m.div 
                    className={AboutCSS.gridText}
                    initial={ "hidden" }
                    whileInView={ "show" }
                    viewport={{ once: true, amount: .3 }}
                >
                    <m.h1 variants={rightTextAnimation} className={AboutCSS.gridTextHeader}>2019 - Now</m.h1>
                    <m.p variants={rightTextAnimation} className={AboutCSS.gridTextBody}>
                        Barbering began as an interest but has grown to become a passion and enjoyable side hustle of mine. There is something extremely satisfying about watching how a haircut comes together that keeps me cutting to this day. It's always a good time catching up with friends and connecting with new people as well!
                    </m.p>
                </m.div>
            </div>
        </div> 
    );
}

export default About;