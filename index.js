import http from "http";

// Creating a basic server

const server = http.createServer((req, res) => {
  // res.end(
  //   "Hello World, I am also used to create api, I am using the live server,lk"
  // );
  res.end(JSON.stringify({ message: "hello World" }));
});

const port = 8120;

server.listen(port, () => {
  console.log(`${Date().toString()}: Server listening on ${port} `);
});
