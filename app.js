var express = require('express');
var fs = require('fs')
var https = require('https')
var app = express();
var path = require('path');

// viewed at http://localhost:8000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

https.createServer({
  key: fs.readFileSync(__dirname + '/<key file path here>'),
  cert: fs.readFileSync(__dirname + '/<cert file path here>')
}, app)
.listen(8000, function () {
  console.log('Example app listening on port 8000! Go to https://localhost:8000/')
})