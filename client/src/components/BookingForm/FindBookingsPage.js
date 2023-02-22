import FindBookingsCSS from '../../styles/findBookingsPage.module.css';
import { useState } from "react";
import axios from 'axios';
import moment from 'moment';

function FindBookingsPage({ page, setPage, updateHelper, setUpdateHelper, appointments, setAppointments }) {

    const [empty, setEmpty] = useState(false);
    
    const findBookings = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3001/findBookings/${updateHelper.email}&${updateHelper.phone}`)
        .then((response) => {
            if(response.data.length !== 0) {
                setAppointments(response.data);
                setEmpty(false);
            } else {
                setEmpty(true);
            }
        })
    }

    const handleDelete = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3001/deleteBooking/${id}`);
        setAppointments(appointments.filter((appt) => appt._id !== id));
    }

    return (  
        <div className={FindBookingsCSS.container}>
            <form onSubmit={findBookings} className={FindBookingsCSS.searchForm}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={updateHelper.email}
                            onChange={(e) => setUpdateHelper({...updateHelper, email: e.target.value})}
                            required
                        />
                        <input
                            type="tel"
                            name='phone'
                            placeholder='Phone Number'
                            pattern='[0-9]{10}'
                            maxLength='10'
                            title='Must be 10 digits (numbers only)'
                            value={updateHelper.phone}
                            onChange={(e) => setUpdateHelper({...updateHelper, phone: e.target.value})}
                            required
                        />
                        <input type="submit" hidden/>
            </form>
            <div className={FindBookingsCSS.appointmentsContainer}>
                {
                    empty ? <p>No appointments found</p>
                    : 
                    appointments.map((appt) => {
                        return (
                            <div 
                                key={appt._id}
                                className={FindBookingsCSS.appointments}
                                onClick={() => {
                                    setUpdateHelper({
                                        ...updateHelper, 
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