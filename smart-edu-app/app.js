const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const pageController = require('./controllers/pageControllers');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

//Connect to db
mongoose.connect('mongodb://localhost:27017/smartedu-db').then(() => {
  console.log('DB connected succesfully.');
});

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}.`);
});
