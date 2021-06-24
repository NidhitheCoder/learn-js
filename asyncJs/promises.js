const posts = [
  { title: "Post one", description: "This is post one" },
  { title: "Post two", description: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong.");
      }

    }, 2000);
  });
};

createPost({title: 'Post three', description: 'This is post three'})
.then(getPosts)
.catch(error => console.log(error));
