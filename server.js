const express = require('express')
const app = express()
const dbconnect = require('./dbconnect')
const port = process.env.PORT || 5000


app.use('/api/bikes', require('./routes/bikeRoute'))
app.listen(port, () => console.log("Server started on server 5000"))