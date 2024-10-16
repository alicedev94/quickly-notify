const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));
console.log(path.join(__dirname, "../public"));

app.get("/", (req, res) => {
  res.send("api run in port 3000");
});

app.listen(port, () => {
  console.log("Running in port: ", port);
});
