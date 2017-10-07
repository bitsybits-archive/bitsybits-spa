const express = require('express')
const path = require('path')

const app = express()

app.get('/api/v1/test/:id', function (req, res) {
  res.send(req.params.id)
})

const listener = app.listen(8081, function () {
  console.log('Development server listening on port ' + listener.address().port)
})
