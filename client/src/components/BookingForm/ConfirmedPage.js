import ConfirmedPageCSS from '../../styles/confirmedPage.module.css';
import moment from 'moment';
import Confetti from 'react-confetti';

function ConfirmedPage({ formData }) {

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
            </div>
    );
}

export default ConfirmedPage;