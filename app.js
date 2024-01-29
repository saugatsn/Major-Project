const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
  console.log("I am the 1st middleware");
  next();
});

app.use((req, res) => {
  console.log("I am the 2nd middleware");
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
