const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));

// routes
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/add_post', function (req, res) {
  res.render('add_post');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
