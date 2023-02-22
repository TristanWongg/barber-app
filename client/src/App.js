import './styles/global.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm/BookingForm';
import MainPage from './components/MainPage';
import About from './components/About';
import MyWork from './components/MyWork';
import Services from './components/Services';
import Reviews from './components/Reviews';
import topImage1 from './assets/images/aleksandar-andreev-yEslqroRR_U-unsplash.jpg';
import topImage2 from './assets/images/michael-demoya-Q82AM6BWBPM-unsplash.jpg';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [openForm, setOpenForm] = useState(false);

  const titleAnimation = {
    hidden: { x: '-20vw', opacity: 0 },
    show: { 
        x: 0, 
        opacity: 1, 
        transition:{ duration: .5 }
    }
  }

  return (
    <div className="App">
      <Navbar setOpenForm={setOpenForm} />
      <AnimatePresence>
        {openForm && <BookingForm setOpenForm={setOpenForm}/>}
      </AnimatePresence>
      <div className='scroll-container'>
        <MainPage setOpenForm={setOpenForm}/>
        <div className='top-images' style={{backgroundColor: '#fafafa'}}>
          <img className='about-top-image1' src={topImage1} alt="Unable to load" />
          <img className='about-top-image2' src={topImage2} alt="Unable to load" />
        </div>
        <About titleAnimation={titleAnimation}/>
        <Services titleAnimation={titleAnimation}/>
        <MyWork titleAnimation={titleAnimation}/>
        <Reviews titleAnimation={titleAnimation}/>
      </div>
    </div>
  );
}

export default App;
