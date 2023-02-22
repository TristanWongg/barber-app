const mongoose = require('mongoose');

const BookingsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    service: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const BookingsModel = mongoose.model('bookings', BookingsSchema);
module.exports = BookingsModel;