const mongoose = require('mongoose');

const jewelerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phoneNumber: String,
    companyName: String,
    companyType: {
      type: String,
      enum: ['proprietorship', 'partnership/LLC', 'HUF', 'public company', 'private company'],
    },
    billingAddress: String,
    city: String,
    state: String,
    pincode: String,
    GST: String,
    gstFile: String,
});

const Jeweler = mongoose.model('Jeweler', jewelerSchema);

module.exports = { Jeweler };