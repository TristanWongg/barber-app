import NavbarCSS from '../styles/navbar.module.css';
import { motion as m } from 'framer-motion';

function Navbar({ setOpenForm }) {
    return (
        <m.div 
            className={NavbarCSS.navbar}
            initial = {{ y: '-30vw' }}
            animate = {{ y: 0 }}
            transition = {{ duration: .7 }}
        >
            <div className={NavbarCSS.leftNavbar}>
                <a href="#about" className={NavbarCSS.aLink}>About</a>
                <a href="#services" className={NavbarCSS.aLink}>Services</a>
                <a href="#my-work" className={NavbarCSS.aLink}>My Work</a>
                <a href="#reviews" className={NavbarCSS.aLink}>Reviews</a>
            </div>

            <div className={NavbarCSS.middleNavbar}>
                <a href="#mainpage" className={NavbarCSS.aLink}>
                    <h1>Trispy</h1>
                    <h1>Fades</h1>
                </a>
            </div>

            <div className={NavbarCSS.rightNavbar}>
                <a href="https://www.instagram.com/trispyfades/" target="_blank" rel="noreferrer">
                    <i className={`fa-brands fa-instagram ${NavbarCSS.instagramIcon}`}></i>
                </a>
                <button 
                    className={NavbarCSS.btn}
                    onClick={() => { setOpenForm(true) }}
                >
                    Book Now
                </button>
            </div>
        </m.div>
    );
}

export default Navbar;