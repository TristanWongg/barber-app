import FindBookingsCSS from '../../styles/findBookingsPage.module.css';
import { useState } from "react";
import axios from 'axios';
import moment from 'moment';
function FindBookingsPage({ page, setPage, formData, setFormData, appointments, setAppointments }) {

    const [empty, setEmpty] = useState(false);
    
    //GET request to retreive all the appointments that correspond to the provided email and phone parameters
    const findBookings = (e) => {
        e.preventDefault();
        axios.get(`https://barber-app-production.up.railway.app/findBookings/${formData.email}&${formData.phone}`)
        .then((response) => {
            if(response.data.length !== 0) {
                setAppointments(response.data);
                setEmpty(false);
            } else {
                setEmpty(true);
            }
        })
    }

    //sends a DELETE request to the server with the corresponding ID of the appointment to be deleted
    const handleDelete = (e, id) => {
        e.stopPropagation();
        axios.delete(`https://barber-app-production.up.railway.app/deleteBooking/${id}`);
        setAppointments(appointments.filter((appt) => appt._id !== id));
    }

    return (
        <div className={FindBookingsCSS.container}>
            <form onSubmit={findBookings} className={FindBookingsCSS.searchForm}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                            <input
                                type="tel"
                                name='phone'
                                placeholder='Phone Number'
                                pattern='[0-9]{10}'
                                maxLength='10'
                                title='Must be 10 digits (numbers only)'
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                required
                            />
                            <button>Find</button>
            </form>
            <div className={FindBookingsCSS.appointmentsContainer}>
                {
                    empty ? <p>No appointments found</p>
                    : 
                    //maps through appointments array and displays all appointments
                    appointments.map((appt) => {
                        return (
                            <div 
                                key={appt._id}
                                className={FindBookingsCSS.appointments}
                                onClick={() => {
                                    setFormData({
                                        ...formData, 
                                        id: appt._id,
                                        name: appt.name
                                    })
                                    setPage(page + 1)
                                    }
                                }
                                
                            >
                                <div className={FindBookingsCSS.appointmentDetails}>
                                    <p className={FindBookingsCSS.service}>{appt.service}</p>
                                    <p className={FindBookingsCSS.date}>{moment.utc(appt.date).local().format('MMMM Do, YYYY - h:mm A')}</p>
                                </div>
                                <div className={FindBookingsCSS.deleteBtnDiv}>
                                    <i 
                                        className={`fa-solid fa-trash-can ${FindBookingsCSS.deleteBtn}`} 
                                        onClick={(e) => handleDelete(e, appt._id)}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FindBookingsPage;