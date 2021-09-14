const express = require('express');
const path = require('path');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');
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
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// routes
app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post/update_post/:id', pageController.getUpdatePage);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
