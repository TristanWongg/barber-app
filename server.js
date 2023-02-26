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

// const MONGO_URI = process.env.MONGO_URI
// mongoose.connect(MONGO_URI);


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`);
    })
})


app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
            function (err) {
                res.status(500).send(err);
            }
        );
});








app.get('/getConfirmedBooking', (req, res) => {
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
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

app.delete('/deleteBooking/:id', (req, res) => {
    BookingsModel.findByIdAndDelete(req.params.id).exec();
    res.send('deleted')
})

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })