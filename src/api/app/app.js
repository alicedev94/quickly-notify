const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");

app.use(bodyParser.json());

const publicRoute = path.join(__dirname, "../public");

app.use(express.static(publicRoute));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
