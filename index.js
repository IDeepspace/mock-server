let axios = require('axios');

// get
axios.get('http://localhost:3000/posts')
  .then(function (response) {
    // handle success
    console.log(response.data);
  });

// get one post
axios.get('http://localhost:3000/posts/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  });

// post
axios.post('http://localhost:3000/posts', {
  "title": "java",
  "author": "java"
}).then(function (response) {
  console.log(response.status, response.data);
})

// put
axios.put('http://localhost:3000/posts/1', {
  "id": 1,
  "title": "json-server",
  "author": "programming"
}).then(function (response) {
  console.log(response.status, response.data);
})

// delete
axios.delete('http://localhost:3000/posts/2').then(function (response) {
  console.log(response.status, response.data);
})
