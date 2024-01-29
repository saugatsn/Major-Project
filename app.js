const express = require("express");
const app = express();
const port = 3000;

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    res.send("ACCESS DENIED");
  }
});

app.get("/api", (req, res) => {
  res.send("Data");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
