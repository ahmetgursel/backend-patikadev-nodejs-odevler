var express = require('express');
var app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

  res.send(blog);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
