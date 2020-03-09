const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

// initialize environment variables from your .env file
dotenv.config()

const app = express()

function tweetHandler(request, response) {
    // future code here
}

app.post('/tweet', tweetHandler)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000) // the port does not matter - we chose 3000 randomly