import ConfirmedPageCSS from '../../styles/confirmedPage.module.css';
import moment from 'moment';
import Confetti from 'react-confetti';
import emailjs from '@emailjs/browser';
import { useState, useRef} from 'react';

function ConfirmedPage({ formData }) {

    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_1v3154q', 
            'template_wr970b5', 
            form.current, 
            '6b_9B6WMGpRPZqftG'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setEmailSent(true);
    };

    return (  
            <div className={ConfirmedPageCSS.container}>
                <Confetti 
                    gravity={0.2}
                    height={window.innerHeight - 100}
                    numberOfPieces={2000}
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
                        <p>{formData.name}</p>
                        <p>{formData.email}</p>
                        <p>{formData.phone}</p>
                        <p>{formData.service}</p>
                        <p>{moment.utc(formData.date).local().format('MMMM Do, YYYY - h:mm A')}</p>
                    </div>
                </div>
                <h3>See you soon!</h3>

                {
                    emailSent ? 
                    <button className={ConfirmedPageCSS.sentBtn}>Sent!</button>
                    :
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="hidden" name="name" value={formData.name}/>
                        <input type="hidden" name="email" value={formData.email}/>
                        <input 
                            type="hidden" 
                            name="message" 
                            value={`${formData.service}
                                    ${moment.utc(formData.date).local().format('MMMM Do, YYYY - h:mm A')}`}
                        />
                        <button className={ConfirmedPageCSS.sendBtn}>Send Email Confirmation</button>
                    </form>
                    
                }
            </div>
    );
}

export default ConfirmedPage;