const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("Hello, I would be a programmer in the future");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
