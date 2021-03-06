const express = require("express");

const app = express();
const port = process.env.port || 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`We are LIVE on port ${port}!`);
});
