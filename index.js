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

axios.get('http://localhost:3000/posts/?title=java')
  .then(function (response) {
    // handle success
    console.log(response.data);
  });

axios.get('http://localhost:3000/posts', {
  params: {
    title: 'java'
  }
}).then(function (response) {
  // handle success
  console.log(response.data);
});

// 上面是 get 请求两种不同的参数传递方式：
// 1. url 传参：拼接 url（可以使用 es6 的模板字符串来拼接）
// 2. get 请求的 body 里面传参（但语义层面 get 不应有body，不符合一个叫做 REST 的规范，
// 如果真的有 get 传递的参数非常复杂的情况，按照规范，可以使用 post 请求来做。
// 当然，这里变通一下是有必要的，可以在 body里面传参）

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
