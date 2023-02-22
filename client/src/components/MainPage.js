import MainCSS from '../styles/mainPage.module.css';

function MainPage({ setOpenForm }) {

    return (  
        <div id='mainpage' className={`${MainCSS.background} scroll-section /`}>
            <button 
                className={MainCSS.btn}
                onClick={() => { setOpenForm(true) }}
            >
                Book Now
            </button>
        </div>
    );
}

export default MainPage;