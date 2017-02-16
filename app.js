const express = require('express')
const operations = require('./operations')
const fetchAPIData = require('./fetchAPIData')
const app = express()

app.get('/populateDB', function (req, res) {
  operations()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500))
})

app.get('/movie/:moviename', function (req, res) {
  const movie = req.params.moviename
  fetchAPIData(movie).then((data) => {
    console.log(data)
    res.send(data)
  })
})

app.listen(3000, function () {
  console.log('Started on PORT 3000')
})
