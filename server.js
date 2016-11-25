var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/component.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'component.css'));
});

app.get('/ui/default.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'default.css'));
});

app.get('/ui/cbpHorizontalMenu.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cbpHorizontalMenu.min.js'));
});

app.get('/ui/modernizr.custom.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modernizr.custom.js'));
});

app.get('/ui/jquery.fullPage.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.fullPage.css'));
});

app.get('/ui/jquery.fullPage.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.fullPage.js'));
});

app.get('/ui/grunge.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'grunge.png'));
});

app.get('/ui/linedpaper.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linedpaper.png'));
});


app.get('/ui/facebook_circle_color-128', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook_circle_color-128'));
});

app.get('/ui/plane.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'plane.png'));
});


app.get('/articleone', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
