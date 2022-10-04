const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.post("/login", async (req, res) => {
    const { name, pass } = req.body

    try {
        const user = await User.find({ name, pass })
        if (user) {
            res.send(user)
        } else {
            return res.status(400).json({ msg: "Login failed" })
        }
    } catch (error) {
        return res.status(400).json({ msg: "Login failed" })

    }
})

router.post("/register", async (req, res) => {
    User.find({ email: req.body.email }, (err, docs) => {
        if (docs.length > 0) {
            return res.status(400).json({ message: 'User already exists' })
        }
        else {
            const newUser = new User(req.body)

            newUser.save(err => {
                if (!err) {
                    res.send('User Registration Success')
                }
                else
                    res.send('Something went wrong')
            })
        }
        if (err) {
            return res.status(400).json({ message: 'Something went wrong' })
        }
    })
})


module.exports = router
