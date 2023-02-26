import BookingPageCSS from '../../styles/bookingPage.module.css';
import { useState } from 'react';
import axios from 'axios';

import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

function BookingPage({ page, setPage, setFormData }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [service, setService] = useState('Haircut');
    const [date, setDate] = useState(setHours(setMinutes(new Date(), 0), 9));

    const createBooking = async (e) => {
        e.preventDefault();
        // await axios.post('https://barber-app-backend.onrender.com/createBooking', {
        await axios.post('/createBooking', {
            name,
            email,
            phone,
            service,
            date
        })

        // await axios.get('https://barber-app-backend.onrender.com/getConfirmedBooking').then((response) => {
        await axios.get('/getConfirmedBooking').then((response) => {
            setFormData({
                name: response.data.name,
                email: response.data.email,
                phone: response.data.phone,
                service: response.data.service,
                date: response.data.date
            });
        });
        setPage(3);
    };

    return (
        <div className={BookingPageCSS.container}>
            <form onSubmit={createBooking} className={BookingPageCSS.bookingForm}>
                <div className={BookingPageCSS.customerContainer}>
                    <h3>Customer Details</h3>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Name' 
                        onChange={(e) => {setName(e.target.value)}} 
                        required 
                    />
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Email' 
                        onChange={(e) => {setEmail(e.target.value)}}
                        required 
                    />
                    <input 
                        type="tel" 
                        name='phone' 
                        placeholder='Phone Number'
                        pattern='[0-9]{10}'
                        maxLength='10'
                        title='Must be 10 digits (numbers only)'
                        onChange={(e) => {setPhone(e.target.value)}}
                        required 
                    />
                </div>

                <div className={BookingPageCSS.appointmentContainer}>
                    <h3>Appointment Details</h3>
                    <select name="service" onChange={(e) => {setService(e.target.value)}}>
                        <option value="Haircut">Haircut {'(1 hour)'}</option>
                        <option value="Haircut + Beard">Haircut + Beard {'(1 hour)'}</option>
                    </select>

                    <DatePicker 
                        className={BookingPageCSS.date}
                        name='date'
                        selected={date} 
                        minDate={new Date()}
                        dateFormat="MMMM do, yyyy - h:mm a"
                        showTimeSelect
                        timeIntervals={60}
                        minTime={setHours(setMinutes(new Date(), 0), 9)}
                        maxTime={setHours(setMinutes(new Date(), 0), 20)}
                        onChange={(selectedDate) => setDate(selectedDate)}
                    />
                </div>
                <button className={BookingPageCSS.submitBtn}>Book Appointment</button>
            </form>
            <button
                className={BookingPageCSS.updateBtn}
                onClick={() => setPage(page + 1)}
            >
                Change/Cancel Appointments
            </button>
        </div>
    );
}

export default BookingPage;