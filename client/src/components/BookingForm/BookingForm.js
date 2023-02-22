import BookingFormCSS from '../../styles/bookingForm.module.css';
import { useState } from 'react';
import { motion as m } from 'framer-motion';
import BookingPage from './BookingPage';
import ConfirmedPage from './ConfirmedPage';
import FindBookingsPage from './FindBookingsPage';
import UpdateBookingsPage from './UpdateBookingsPage';

function BookingForm({ setOpenForm }) {

    const [page, setPage] = useState(0);
    const [updateHelper, setUpdateHelper] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        service: '',
        date: ''
    })
    const [appointments, setAppointments] = useState([]);
    const pageHeaders = ['Complete Your Booking Details', 'Search Up Appointments', 'Update your appointment', 'Thanks for booking!'];
    const pageBody = () => {
        switch(page) {
            case 0: return <BookingPage page={page} setPage={setPage} />
            case 1: return <FindBookingsPage 
                                page={page} 
                                setPage={setPage} 
                                updateHelper={updateHelper} 
                                setUpdateHelper={setUpdateHelper}
                                appointments={appointments}
                                setAppointments={setAppointments}
                            />
            case 2: return <UpdateBookingsPage 
                                updateHelper={updateHelper}
                                setUpdateHelper={setUpdateHelper}
                                appointments={appointments} 
                                setAppointments={setAppointments} 
                            />
            case 3: return <ConfirmedPage />
            default: return alert('Could not load proper page')
        }
    }

    const displayPrevIcon = () => {
        if(page !== 0 && page !== 3) {
            return (
                <button className={BookingFormCSS.prevIcon} onClick={() => setPage(page - 1)}>
                    <i className={`fa-solid fa-chevron-left`}/>
                </button>
            )
        }
    }

    return (  
        <m.div 
            className={BookingFormCSS.bookingForm}
            initial={{ x:"50vw"}}
            animate={{ x: 0 }}
            transition={{ duration: .75 }}
            exit={{ x:"50vw" }}
        >
            <div className={BookingFormCSS.header}>
                {displayPrevIcon()}
                <button className={BookingFormCSS.closeBtn} onClick={() =>  setOpenForm(false)}>X</button>
                <h3>{pageHeaders[page]}</h3>
            </div>
            <div className={BookingFormCSS.body}>
                {pageBody()}
            </div>
        </m.div>
    );
}

export default BookingForm;