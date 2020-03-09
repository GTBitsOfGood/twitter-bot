const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const Twitter = require('twitter')

// initialize environment variables from your .env file
dotenv.config()

// access your API keys as environment variables
const auth = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}
const client = new Twitter(auth)

const app = express()

function tweetHandler(request, response) {
    // future code here
}

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.post('/tweet', tweetHandler)

app.listen(3000) // the port does not matter - we chose 3000 randomly