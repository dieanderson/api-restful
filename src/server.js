const express = require('express')
const cors = require('cors')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//Connect database
db.connect()

//Enable CORS
const allowedOrigins = [
    'http://127.0.0.1:49466',
    'http://www.api.com.br'
]
app.use(cors({
    origin: function(origin, callback){
        let alowed = true
        
        //Mobile app
        if(!origin){
            alowed = true
        } 

        if(!allowedOrigins.includes(origin)){
            alowed = false
        }

        callback(null, alowed)
    }
}))

//Enable server receive data post method(json)
app.use(express.json())

//Def routes
app.use('/api', routes)

//Run the Server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))