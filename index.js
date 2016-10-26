var express = require('express');
var app = express();
var handlebars = require('handlebars');
var fs = require('fs');
var os = require('os');


app.get('/', function(req, res) {

  var tmpl = fs.readFileSync('src/index.handlebars', 'utf-8');
  var compiled = handlebars.compile(tmpl)
  var html = compiled({
    'hostname': os.hostname()
  });
  
  res.set('Content-type', 'text/html');
  res.status(200);
  res.send(html);
  // res.sendFile(__dirname + '/public/index.html');
});

app.use('/', express.static(__dirname + '/public'));

app.listen(80, function() {
  console.log('Listening at port 80');
});