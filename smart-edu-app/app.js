const express = require('express');
const pageController = require('./controllers/pageControllers');

const app = express();

app.get('/', pageController.getIndexPage);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}.`);
});
