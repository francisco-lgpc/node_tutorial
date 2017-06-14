var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html' );
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function(req, res){
  var data = {age: 32, name: 'Joe'}
  res.render('profile', {id: req.params.id, data: data});
});

app.listen(3000);
