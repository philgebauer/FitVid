var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var request = require ('request');
var favorites = require('./public/routes/favorites');
var portDecision = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use(express.static('server/public'));

app.use('/favorites', favorites)

app.listen(portDecision, function(){
  console.log('running on port', portDecision);
});
