const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BookingsModel = require('./models/Bookings');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)

app.get('/getConfirmedBooking', (req, res) => {
    BookingsModel.findOne().sort({_id:-1}).exec((err, result) => {
        if(err){
            res.json(err)
        } else{
            res.json(result)
        }
    })
})

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

app.post('/createBooking', async (req, res) => {
    const booking = req.body;
    const newBooking = new BookingsModel(booking);
    await newBooking.save();
    res.json(booking);
})

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

app.delete('/deleteBooking/:id', async (req, res) => {
    await BookingsModel.findByIdAndDelete(req.params.id).exec();
    res.send('deleted')
})

app.listen(3001, () => {
    console.log('Running server on port 3001');
})