const express = require('express')
const app = express()
const dbconnect = require('./dbconnect')
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/api/bikes/', require('./routes/bikeRoute'))
app.use('/api/users/', require('./routes/userRoute'))
app.use('/api/booking/', require('./routes/bookingRoute'))
app.get("/api/config/paypal", (req, res) => {
    res.send("AeYbGDLudmepQ8zLSTHD3b_oEFlgMIP_OU9U0V3nr4qA0P0Vn9O9Rz1eS9VxeZDFpLhAT1EmeD5DlJQ2")
})

app.listen(port, () => console.log("Server started on server 5000"))