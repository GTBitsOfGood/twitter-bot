const express = require('express')
const bodyParser = require('body-parser')

const app = express()

function tweetHandler(request, response) {
    // future code here
}

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.post('/tweet', tweetHandler)

app.listen(3000) // the port does not matter - we chose 3000 randomly