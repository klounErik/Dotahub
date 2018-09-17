const express = require('express')
const cors = require('cors')
const Router = require('./router')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use('/api', Router)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(1234, (err) => {
        if(err){
            console.log('something went wrong')
        }
        console.log('Connected to Server!')
})