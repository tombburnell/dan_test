

console.log("starting")

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/tom', function (req, res) {
    res.send('hello tom')
})

app.get('/name/:name', function (req, res) {
    console.log(req.params.name);
    res.send(req.params.name)
})

app.listen(8080);
