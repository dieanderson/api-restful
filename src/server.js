const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//Connect database
db.connect()

//Settings

//Enable server receive data post method(form)
app.use(express.urlencoded({ extended: true }))

//Def routes
app.use('/api', routes)

//Run the Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))