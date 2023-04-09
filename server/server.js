const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BookingsModel = require('./models/Bookings');
const dotenv = require('dotenv');

dotenv.config();
mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

//connect to MongoDB database
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

//retrieves the most recently created appointment
app.get('/getConfirmedBooking', (req, res) => {
    BookingsModel.findOne().sort({_id:-1}).exec((err, result) => {
        if(err){
            res.json(err)
        } else{
            res.json(result)
        }
    })
})

//retrieves the appointments that correspond to the email/phone parameters and returns it in ascending order by date
app.get('/findBookings/:email&:phone', (req, res) => {
    BookingsModel.find({
        'email': req.params.email,
        'phone': req.params.phone
    })
    .sort({date:1})
    .exec((err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

//creates an appointment and saves it into the database
app.post('/createBooking', async (req, res) => {
    const booking = req.body;
    const newBooking = new BookingsModel(booking);
    await newBooking.save();
    res.json(booking);
})

//finds and updates the corresponding appointment details
app.put('/updateBooking', (req, res) => {
    try{
        BookingsModel.findByIdAndUpdate(req.body.id, {
            service: req.body.service,
            date: req.body.date
        }, {new: true}, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    } catch (err) {
        console.log(err);
    }
})

//removes appointment from the database
app.delete('/deleteBooking/:id', (req, res) => {
    BookingsModel.findByIdAndDelete(req.params.id).exec();
    res.send('deleted')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})