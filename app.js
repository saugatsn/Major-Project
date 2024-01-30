const express = require("express");
const app = express();
const port = 3000;
const expressError = require("./expressError");

let checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    throw new expressError(401, "Access denied");
  }
};

app.get("/wrong", (req, res) => {
  abcd = abcd;
});

app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.get("/admin", (req, res) => {
  throw new expressError(401, "Access to admin is forbidden");
});

app.use((err, req, res, next) => {
  console.log("---Error---");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("---Error2---");
  let { status = 500, message = "Some error occurred" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
