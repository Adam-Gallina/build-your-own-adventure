var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')

var app = express()
var port = process.env.PORT || 2282;

app.engine('handlebars', exphbs.engine({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.static('public'))

app.get('/', function(req, res, next) {
    var messages = []
    for (var i = 0; i < 60; i++)
        messages.push("Hello BYOA!")

    res.status(200).render('home', {messages:messages})
})

app.get('/about', function(req, res, next) {
    res.status(200).render('about')
})

app.get('/rules', function(req, res, next) {
    res.status(200).render('rules')
})

app.get('/byoa', function(req, res, next) {
    var data = {
        "text": "This is a test node",
        "buttons": [
            {
                "btnId": "btn1",
                "btnText": "button 1"
            },
            {
                "btnId": "btn2",
                "btnText": "button 2"
            },
            {
                "btnId": "btn3",
                "btnText": "button 3"
            }
        ]
    }

    res.status(200).render('storynode', data)
})

app.get('*', function(req, res) {
    res.status(404).render('404')
})

app.listen(port, function() {
    console.log('-- Server is listening on port ' + port + '!')
})