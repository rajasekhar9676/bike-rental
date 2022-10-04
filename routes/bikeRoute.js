const express = require('express')
const router = express.Router()
const Bike = require('../models/bikeModel')

router.get("/allbikes", async (req, res) => {

    try {
        const bikes = await Bike.find()
        res.send(bikes)
    } catch (error) {
        return res.status(400).json({ msg: "Something went wrong" })
    }
})

module.exports = router