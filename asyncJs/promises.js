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
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong.");
      }

    }, 2000);
  });
};

// createPost({title: 'Post three', description: 'This is post three'})
// .then(getPosts)
// .catch(error => console.log(error));

// // promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//   setTimeout(resolve, 2000, 'Good bye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then((values) => console.log(values));


// // async await
// const init = async () => {
//   await createPost({ title: 'Post Three', description: 'This is post three' });
//   getPosts();
// };

// init();

// async await with fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();
  console.log(data);
};

fetchUsers();
