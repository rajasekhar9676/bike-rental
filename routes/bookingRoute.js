const express = require('express')
const router = express.Router()
const Booking = require('../models/bookingModel')
const Bike = require('../models/bikeModel')


router.post("/bookbike", async (req, res) => {
    req.body.transactionId = '1234Transaction'
    try {
        const newBooking = new Booking(req.body)
        await newBooking.save()
        const bike = await Bike.findOne({ _id: req.body.bikeid })
        bike.bookedSlots.push(req.body.bookedSlots)
        await bike.save()
        res.json({ msg: 'Booking Success!' })
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Booking Failed' })

    }
})

module.exports = router
