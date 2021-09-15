const express = require('express');
const ejs = require('ejs');
const pageController = require('./controllers/pageControllers');
const pageRoute = require('./routes/pageRoute');
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Routes
app.use('/', pageRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}.`);
});
