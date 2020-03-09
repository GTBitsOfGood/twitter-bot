const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const twitter = require('twitter')

// initialize environment variables from your .env file
dotenv.config()

// access your API keys as environment variables
const auth = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}

const app = express()

/**
 * Send a tweet to the Twitter API
 * 
 * https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update
 */
function sendTweet(tweet) {

    // see the Parameters section of the Twitter API docs linked above ^^^
    const params = {
        status: tweet
    }

    twitter.post('statuses/update', params, (errors, data, response) => {
        if (errors) {
            console.log(errors) // logs errors to console so we can debug what went wrong
        }
    })
}

function tweetHandler(request, response) {
    // future code here
}

app.post('/tweet', tweetHandler)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000) // the port does not matter - we chose 3000 randomly