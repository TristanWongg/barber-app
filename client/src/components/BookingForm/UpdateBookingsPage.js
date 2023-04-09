import UpdateBookingCSS from '../../styles/updateBookingsPage.module.css'
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

function UpdateBookingsPage({ formData, setFormData, appointments, setAppointments }) {

    const [service, setService] = useState('Haircut');
    const [date, setDate] = useState(setHours(setMinutes(new Date(), 0), 9));
    const [success, setSuccess] = useState(false);

    const updateBooking = (e) => {
        e.preventDefault();
        //PUT request sends the user input to the server side to be used to update the corresponding appointment details
        axios.put('https://barber-app-production.up.railway.app/updateBooking', { id: formData.id, service, date })
        .then((response) => {
            const data = response.data;
            //finds and replaces the old appointment with the newly updated appointment in the array
            setAppointments(appointments.map((appt) => {
                if (appt._id === data._id) {
                    appt.service = data.service;
                    appt.date = data.date;
                }
                return appt;
            }));
            setAppointments(appointments.sort((a, b) => (a.date > b.date) ? 1:-1));
            setSuccess(true);   
            setFormData({...formData, service: data.service, date: data.date});
        })
    }

    return ( 
        <>
            <form onSubmit={updateBooking} className={UpdateBookingCSS.updateForm}>
                <select 
                    name="service" 
                    value={service}
                    onChange={(e) => setService(e.target.value)} 
                >
                    <option value="Haircut">Haircut {'(1 hour)'}</option>
                    <option value="Haircut + Beard">Haircut + Beard {'(1 hour)'}</option>
                </select>

                <DatePicker 
                    className={UpdateBookingCSS.date}
                    name='date'
                    selected={date}
                    minDate={new Date()}
                    dateFormat="MMMM do, yyyy - h:mm a"
                    showTimeSelect
                    timeIntervals={60}
                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                    maxTime={setHours(setMinutes(new Date(), 0), 20)}
                    onChange={(selectedDate) => {setDate(selectedDate)}}
                />
                <button className={UpdateBookingCSS.updateBtn}>Confirm Update</button>
            </form>
            {success ?  
                <div className={UpdateBookingCSS.updateMsgContainer}>
                    <h3>Your appointment has been updated!</h3>
                    <br />
                    <br />
                    <h4>New Appointment Details:</h4>
                    <br />
                    <div className={UpdateBookingCSS.detailsContainer}>
                        <div>
                            <p>Name :</p>
                            <p>Email :</p>
                            <p>Phone :</p>
                            <p>Service :</p>
                            <p>Date :</p>
                        </div>
                        <div>
                            <p>{formData.name}</p>
                            <p>{formData.email}</p>
                            <p>{formData.phone}</p>
                            <p>{formData.service}</p>
                            <p>{moment.utc(formData.date).local().format('MMMM Do, YYYY - h:mm A')}</p>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    );
}

export default UpdateBookingsPage;