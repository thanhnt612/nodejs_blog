const express = require("express");
const app = express();
const port = 3000;

app.get("/trang-chu", (req, res) => {
  var a = 2;
  var b = 4;
  var c = a + b;
  console.log(c);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
