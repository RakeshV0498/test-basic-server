import express from "express";

const server = express();

server.get;

server.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const port = 8121;

server.listen(port, () => {
  console.log(`${Date().toString()}: Server listening on ${port} `);
});
