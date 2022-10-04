const mongoose = require('mongoose')

var mongoURL = "mongodb+srv://abkuser:SePbuDwyIYa9Qdpx@cluster0.09dcr.mongodb.net/bike-rentals"

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var dbconnect = mongoose.connection

dbconnect.on('error', () => {
    console.log('Con failed');
})

dbconnect.on('connected', () => {
    console.log('Con success');
})

module.exports = mongoose