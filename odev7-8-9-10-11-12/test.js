const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// create schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

// create first post
// Post.create({
//   title: 'Blog Post 3',
//   detail:
//     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, recusandae?',
// });

//read a post
// Post.find({}, (err, data) => {
//   console.log(data);
// });

const id = '613ffe47c219056b6b126b37';
//update a post - id 613ffe47c219056b6b126b37
// Post.findByIdAndUpdate(
//   id,
//   {
//     title: 'Blog Post 3 Updated 2',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete a post
Post.findByIdAndDelete(id, (err, data) => {
  console.log('Post succesfully deleted.');
});
