const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
  res.send("This is a random page.");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
