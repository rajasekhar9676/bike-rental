const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.post("/login", async (req, res) => {
    const { email, pass } = req.body

    try {
        const user = await User.find({ email, pass })
        if (user) {
            res.send(user)
        } else {
            return res.json({ msg: "Login failed" })
        }
    } catch (error) {
        return res.json({ msg: "Login failed" })

    }
})

router.post("/register", async (req, res) => {
    User.find({ email: req.body.email }, (err, docs) => {
        if (docs.length > 0) {
            return res.json({ msg: 'User already exists' })
        }
        else {
            const newUser = new User(req.body)

            newUser.save(err => {
                if (!err) {
                    res.json({ msg: 'User Registration Success' })
                }
                else
                    res.json({ msg: 'Something went wrong' })
            })
        }
        if (err) {
            return res.json({ message: 'Something went wrong' })
        }
    })
})


module.exports = router
