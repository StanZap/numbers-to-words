var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.set('Content-type', 'text/html');
  res.status(200);
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(80, function() {
  console.log('Listening at port 80');
})