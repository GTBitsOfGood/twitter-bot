const express = require('express')

const app = express()

function tweetHandler(request, response) {
    // future code here
}

app.use(express.static('public'))

app.post('/tweet', tweetHandler)

app.listen(3000) // the port does not matter - we chose 3000 randomly