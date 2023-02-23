import ConfirmedPageCSS from '../../styles/confirmedPage.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Confetti from 'react-confetti';

function ConfirmedPage() {

    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        axios.get('https://barber-app-backend.onrender.com/getConfirmedBooking').then((response) => {
            setAppointment(response.data);
        });
    },[]);

    return (  
            <div className={ConfirmedPageCSS.container}>
                <Confetti 
                    gravity={0.2}
                    height={window.innerHeight - 100}
                    numberOfPieces={500}
                    recycle={false}
                />
                <h3>Your appointment has been confirmed</h3>
                <h4>Appointment Details:</h4>
                <div className={ConfirmedPageCSS.detailsContainer}>
                    <div>
                        <p>Name :</p>
                        <p>Email :</p>
                        <p>Phone :</p>
                        <p>Service :</p>
                        <p>Date :</p>
                    </div>
                    <div>
                        <p>{appointment.name}</p>
                        <p>{appointment.email}</p>
                        <p>{appointment.phone}</p>
                        <p>{appointment.service}</p>
                        <p>{moment.utc(appointment.date).local().format('MMMM Do, YYYY - h:mm A')}</p>
                    </div>
                </div>
                <h3>See you soon!</h3>
            </div>
    );
}

export default ConfirmedPage;