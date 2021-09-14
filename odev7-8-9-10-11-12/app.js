const express = require('express');
const path = require('path');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');
const moment = require('moment');
const app = express();
const port = 3000;

// connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  let date = moment(post.dateCreated).format('LLL');
  res.render('post', {
    post,
    date,
  });
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
