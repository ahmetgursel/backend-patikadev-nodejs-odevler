const blogPosts = [
  { postId: 1, postTitle: 'Post1', postBody: 'This is post1 body' },
  { postId: 2, postTitle: 'Post2', postBody: 'This is post2 body' },
  { postId: 3, postTitle: 'Post3', postBody: 'This is post3 body' },
];

const showPost = () => {
  blogPosts.map((post) => {
    console.log(
      `Id: ${post.postId}  PostTitle: ${post.postTitle}  PostBody: ${post.postBody}`
    );
  });
};

function addNewPost(newPost) {
  const promiseNewPost = new Promise((resolve, reject) => {
    blogPosts.push(newPost);
    resolve(blogPosts);
  });
  return promiseNewPost;
}

async function postCycle() {
  try {
    await addNewPost({
      postId: 4,
      postTitle: 'Post4',
      postBody: 'This is post4 body',
    });
    showPost();
  } catch (e) {
    console.log(e);
  }
}

postCycle();
