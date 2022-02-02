const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//Connect database
db.connect()

//Settings

//Enable server receive data post method(json)
app.use(express.json())

//Def routes
app.use('/api', routes)

//Run the Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))